import { internal } from "./_generated/api";
import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import axios from "axios";

const GITHUB_API_BASE = "https://api.github.com";

// IMPORTANT: To avoid hitting GitHub's rate limit, you should create a personal access token
// and set it as an environment variable named GITHUB_TOKEN in your Convex project.
// The action will use this token for authenticated requests, which have a higher rate limit.
// For this implementation, it proceeds without a token, which is not recommended for production.
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers = GITHUB_TOKEN ? { Authorization: `bearer ${GITHUB_TOKEN}` } : {};

async function githubAPI(path: string, params?: Record<string, any>) {
  const url = new URL(`${GITHUB_API_BASE}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });
  }
  return await axios.get(url.toString(), { headers });
}

export const fetchAndScoreProfile = internalAction({
  args: { login: v.string() },
  handler: async (ctx, { login }) => {
    try {
      // Fetch all metrics in parallel
      // 1. Fetch base profile data
      const profileRes = await githubAPI(`/users/${login}`);
      const profile = profileRes.data;

      // Store basic profile data immediately so it shows up in the UI
      await ctx.runMutation(internal.profiles.storeBasicProfile, {
        login: profile.login,
        name: profile.name ?? profile.login,
        avatar_url: profile.avatar_url,
        bio: profile.bio || "",
        public_repos: profile.public_repos || 0,
        followers: profile.followers || 0,
        following: profile.following || 0,
        html_url: profile.html_url,
        twitter_username: profile.twitter_username ?? undefined,
        blog: profile.blog ?? undefined,
        location: profile.location ?? undefined,
      });

      // 2. Fetch commit timestamps (last 2 years)
      const twoYearsAgo = new Date();
      twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
      const commitsRes = await githubAPI("/search/commits", {
        q: `author:${login} committer-date:>${twoYearsAgo.toISOString().slice(0, 10)}`,
        sort: "committer-date",
        per_page: 100, // Max per page
      });
      const commitTimestamps = commitsRes.data.items.map((c: any) =>
        new Date(c.commit.committer.date).getTime(),
      );

      // 3. Fetch PR data
      const mergedPrsRes = await githubAPI("/search/issues", {
        q: `is:pr is:merged author:${login}`,
        per_page: 1,
      });
      const prMerged = mergedPrsRes.data.total_count;

      const totalPrsRes = await githubAPI("/search/issues", {
        q: `is:pr author:${login}`,
        per_page: 1,
      });
      const prTotal = totalPrsRes.data.total_count;

      const mergedPrTimestampsRes = await githubAPI("/search/issues", {
        q: `is:pr is:merged author:${login}`,
        per_page: 100,
      });
      const mergedPrTimestamps = mergedPrTimestampsRes.data.items.map(
        (pr: any) => new Date(pr.closed_at).getTime(),
      );

      // 4. Fetch issues closed
      const issuesClosedRes = await githubAPI("/search/issues", {
        q: `is:issue is:closed author:${login}`,
        per_page: 1,
      });
      const issuesClosed = issuesClosedRes.data.total_count;

      // 5. Fetch repos for language and star data
      const reposRes = await githubAPI(`/users/${login}/repos`, {
        per_page: 100,
      });
      const repos = reposRes.data;

      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      const activeRepos = repos.filter(
        (r: any) => new Date(r.pushed_at) > oneYearAgo,
      ).length;

      let languageSet = new Set<string>();
      for (const repo of repos) {
        const languagesRes = await githubAPI(
          `/repos/${login}/${repo.name}/languages`,
        );
        Object.keys(languagesRes.data).forEach((lang) => languageSet.add(lang));
      }
      const languageBreadth = languageSet.size;

      // 6. Fetch star timestamps
      let starTimestamps: number[] = [];
      for (const repo of repos) {
        if (repo.stargazers_count > 0) {
          const stargazersRes = await githubAPI(
            `/repos/${login}/${repo.name}/stargazers`,
            {
              headers: {
                ...headers,
                Accept: "application/vnd.github.v3.star+json",
              },
              per_page: 100,
            },
          );
          stargazersRes.data.forEach((star: any) => {
            starTimestamps.push(new Date(star.starred_at).getTime());
          });
        }
      }

      // 7. Check for Convex usage (simplified)
      const convexPromises = repos.map(async (repo: any) => {
        try {
          const { data: packageJson } = await axios.get(
            `https://raw.githubusercontent.com/${login}/${repo.name}/main/package.json`,
          );
          const dependencies = {
            ...packageJson.dependencies,
            ...packageJson.devDependencies,
          };
          return Object.keys(dependencies).some(
            (dep) => dep === "convex" || dep.startsWith("@convex/"),
          );
        } catch {
          return false;
        }
      });

      const results = await Promise.all(convexPromises);
      const usesConvex = results.some((hasConvex) => hasConvex);

      // Once all data is fetched, store it
      await ctx.runMutation(internal.profiles.storeProfileMetrics, {
        login: profile.login,
        name: profile.name ?? profile.login,
        avatar_url: profile.avatar_url,
        bio: profile.bio || "",
        public_repos: activeRepos,
        followers: profile.followers,
        following: profile.following,
        html_url: profile.html_url,
        twitter_username: profile.twitter_username ?? undefined,
        blog: profile.blog ?? undefined,
        location: profile.location ?? undefined,
        commitTimestamps,
        mergedPrTimestamps,
        starTimestamps,
        prMerged,
        prTotal,
        issuesClosed,
        languageBreadth,
        usesConvex,
        commits: commitsRes.data.total_count, // keep old commit count for now
      });

      // After storing, trigger a score recalculation for all profiles
      await ctx.scheduler.runAfter(0, internal.scores.recalculateScores);
    } catch (error: any) {
      console.error(`Error fetching data for ${login}:`, error);

      // Check if it's a private profile (403 Forbidden)
      if (error.response?.status === 403) {
        // Try to get basic public profile data only
        try {
          const basicProfile = await githubAPI(`/users/${login}`);
          const profile = basicProfile.data;

          // Store basic profile with limited data and a note about privacy
          await ctx.runMutation(internal.profiles.storeProfileMetrics, {
            login: profile.login,
            name: profile.name ?? profile.login,
            avatar_url: profile.avatar_url,
            bio: profile.bio || "This profile is private",
            public_repos: profile.public_repos || 0,
            followers: profile.followers || 0,
            following: profile.following || 0,
            html_url: profile.html_url,
            twitter_username: profile.twitter_username ?? undefined,
            blog: profile.blog ?? undefined,
            location: profile.location ?? undefined,
            // Empty arrays for private profiles
            commitTimestamps: [],
            mergedPrTimestamps: [],
            starTimestamps: [],
            prMerged: 0,
            prTotal: 0,
            issuesClosed: 0,
            languageBreadth: 0,
            usesConvex: false,
            commits: 0,
          });

          // Set a special error message for private profiles
          await ctx.runMutation(internal.profiles.storeProfileError, {
            login,
            error:
              "This GitHub profile is private. Only basic public information is available.",
          });
        } catch (basicError: any) {
          // If even basic profile fails, store the original error
          await ctx.runMutation(internal.profiles.storeProfileError, {
            login,
            error: error.message || "An unknown error occurred",
          });
        }
      } else {
        // Store the error message for other types of errors
        await ctx.runMutation(internal.profiles.storeProfileError, {
          login,
          error: error.message || "An unknown error occurred",
        });
      }
    }
  },
});
