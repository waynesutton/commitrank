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
    if (!GITHUB_TOKEN) {
      console.warn(
        "GITHUB_TOKEN environment variable not set. Using unauthenticated GitHub API requests, which are severely rate-limited.",
      );
    }
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
        sort: "pushed",
      });
      const repos = reposRes.data;

      // Limit analysis to the top 30 most recently pushed repos to avoid rate limiting
      const reposToAnalyze = repos.slice(0, 30);

      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      const activeRepos = reposToAnalyze.filter(
        (r: any) => new Date(r.pushed_at) > oneYearAgo,
      ).length;

      let languageSet = new Set<string>();
      for (const repo of reposToAnalyze) {
        if (repo.fork) continue; // Skip forked repos for language analysis
        try {
          const languagesRes = await githubAPI(
            `/repos/${login}/${repo.name}/languages`,
          );
          Object.keys(languagesRes.data).forEach((lang) =>
            languageSet.add(lang),
          );
        } catch (error: any) {
          console.warn(
            `Could not fetch languages for repo ${repo.name}:`,
            error.message,
          );
        }
      }
      const languageBreadth = languageSet.size;

      // 6. Fetch star timestamps
      let starTimestamps: number[] = [];
      for (const repo of reposToAnalyze) {
        if (repo.stargazers_count > 0) {
          try {
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
          } catch (error: any) {
            console.warn(
              `Could not fetch stargazers for repo ${repo.name}:`,
              error.message,
            );
          }
        }
      }

      // 7. Check for Convex usage (simplified)
      const convexPromises = reposToAnalyze.map(async (repo: any) => {
        if (repo.fork) return false;
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
      console.error(
        `Error fetching data for ${login}. Full error:`,
        JSON.stringify(error.response?.data, null, 2),
      );

      let errorMessage =
        "An unknown error occurred while fetching GitHub data.";

      if (error.response?.data?.message) {
        errorMessage = `GitHub API Error: ${error.response.data.message}`;
      } else if (error.message) {
        errorMessage = error.message;
      }

      // Log the specific error to the console for debugging
      console.error(`Storing error for ${login}: ${errorMessage}`);

      // Store the specific error message
      await ctx.runMutation(internal.profiles.storeProfileError, {
        login,
        error: errorMessage,
      });
    }
  },
});
