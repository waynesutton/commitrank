import { useState, useRef } from "react";
import axios from "axios";
import {
  Search,
  Sword,
  Sprout,
  Wand2,
  Code2,
  Compass,
  Zap,
  Database,
  Twitter,
  Github,
  MessageCircle,
} from "lucide-react";
import { GitHubProfile } from "./types";
import ProfileCard from "./components/ProfileCard";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Doc } from "../convex/_generated/dataModel";

type Profile = Doc<"profiles"> & GitHubProfile;

export function App() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [visibleCards, setVisibleCards] = useState(6);
  const profileRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const storeProfile = useMutation(api.profiles.storeProfile);
  const profiles = useQuery(api.profiles.getProfiles) || [];

  const scrollToProfile = (login: string) => {
    profileRefs.current[login]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const checkForConvex = async (username: string) => {
    const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
    const repos = reposResponse.data;

    const convexPromises = repos.map(async (repo: any) => {
      try {
        const packageJson = await axios.get(
          `https://raw.githubusercontent.com/${username}/${repo.name}/main/package.json`
        );
        const dependencies = {
          ...packageJson.data.dependencies,
          ...packageJson.data.devDependencies,
        };
        return Object.keys(dependencies).some(
          (dep) => dep === "convex" || dep.startsWith("@convex/")
        );
      } catch {
        return false;
      }
    });

    const results = await Promise.all(convexPromises);
    return results.some((hasConvex) => hasConvex);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.includes("github.com")) {
      setError("Please enter a valid GitHub profile URL");
      return;
    }

    try {
      const username = url.split("/").pop();
      if (!username) throw new Error("Invalid GitHub URL");

      const profileResponse = await axios.get(`https://api.github.com/users/${username}`);
      const commitsResponse = await axios.get(
        `https://api.github.com/search/commits?q=author:${username}`,
        { headers: { Accept: "application/vnd.github.cloak-preview" } }
      );

      const commits = commitsResponse.data.total_count;
      const usesConvex = await checkForConvex(username);
      const profile = profileResponse.data;

      await storeProfile({
        login: profile.login,
        name: profile.name || profile.login,
        avatar_url: profile.avatar_url,
        bio: profile.bio || "",
        public_repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
        html_url: profile.html_url,
        twitter_username: profile.twitter_username || undefined,
        blog: profile.blog || undefined,
        location: profile.location || undefined,
        commits,
        usesConvex,
      });

      setUrl("");
      setError("");
    } catch (error) {
      console.error("Error fetching GitHub profile:", error);
      setError("Error fetching GitHub profile. Please check the URL and try again.");
    }
  };

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 6);
  };

  const visibleProfiles = profiles.slice(0, visibleCards);
  const hasMoreProfiles = profiles.length > visibleCards;

  const overloadProfiles = profiles.filter((p: Profile) => p.commits >= 100000);
  const hackerProfiles = profiles.filter((p: Profile) => p.commits >= 10000 && p.commits < 100000);
  const wizardProfiles = profiles.filter((p: Profile) => p.commits >= 5000 && p.commits < 10000);
  const samuraiProfiles = profiles.filter((p: Profile) => p.commits >= 1000 && p.commits < 5000);
  const explorerProfiles = profiles.filter((p: Profile) => p.commits < 10);
  const noobProfiles = profiles.filter((p: Profile) => p.commits >= 10 && p.commits < 1000);
  const convexProfiles = profiles.filter((p: Profile) => p.usesConvex);

  const categories = [
    {
      name: "Overload",
      icon: Zap,
      color: "text-purple-600",
      profiles: overloadProfiles,
      description: "100,000+ commits",
    },
    {
      name: "Hacker",
      icon: Code2,
      color: "text-red-600",
      profiles: hackerProfiles,
      description: "10,000+ commits",
    },
    {
      name: "Wizard",
      icon: Wand2,
      color: "text-blue-600",
      profiles: wizardProfiles,
      description: "5,000+ commits",
    },
    {
      name: "Samurai",
      icon: Sword,
      color: "text-indigo-600",
      profiles: samuraiProfiles,
      description: "1,000+ commits",
    },
    {
      name: "Noob",
      icon: Sprout,
      color: "text-green-600",
      profiles: noobProfiles,
      description: "10-999 commits",
    },
    {
      name: "Explorer",
      icon: Compass,
      color: "text-yellow-600",
      profiles: explorerProfiles,
      description: "Less than 10 commits",
    },
    {
      name: "Convex",
      icon: Database,
      color: "text-orange-600",
      profiles: convexProfiles,
      description: "Uses Convex in their repos",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#F3F2F2] to-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Commit Rank</h1>

        <p className="text-center text-gray-600 mb-2">
          Chat with any GitHub public profile and see their ranking. Just paste the GitHub profile
          URL below.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
          Built with
          <a
            href="https://convex.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline flex items-center gap-1">
            <Database size={16} />
            Convex.dev
          </a>
          {" | "}
          <a
            href="https://tanstack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            TanStack.com
          </a>
          {" | "}
          <a
            href="https://bolt.new"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            Bolt.new
          </a>
        </div>

        <form onSubmit={handleSubmit} className="mb-12">
          <div className="flex gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter GitHub profile URL"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#222222] focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333] disabled:opacity-50">
              Start Ranking
            </button>
          </div>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </form>

        <div className="flex gap-8">
          <div className="w-72 flex-shrink-0">
            <div className="sticky top-4 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Ranking Categories</h2>

              <div className="space-y-6">
                {categories.map((category) => (
                  <div key={category.name}>
                    <div className={`flex items-center gap-2 ${category.color} font-semibold mb-2`}>
                      <category.icon size={20} />
                      <div>
                        <h3>
                          {category.name} ({category.profiles.length})
                        </h3>
                        <p className="text-xs text-gray-500 font-normal">{category.description}</p>
                      </div>
                    </div>
                    {category.profiles.length > 0 && (
                      <div className="pl-7 space-y-2">
                        {category.profiles.map((profile: Profile) => (
                          <button
                            key={profile.login}
                            onClick={() => scrollToProfile(profile.login)}
                            className="text-sm text-gray-600 hover:text-[#222222] hover:underline block w-full text-left transition-colors">
                            @{profile.login}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visibleProfiles.map((data: Profile) => (
                <div key={data._id} ref={(el) => (profileRefs.current[data.login] = el)}>
                  <ProfileCard profile={data} commits={data.commits} usesConvex={data.usesConvex} />
                </div>
              ))}
            </div>

            {hasMoreProfiles && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333] transition-colors">
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        <footer className="mt-16">
          <hr className="border-gray-200 mb-6" />
          <div className="text-center text-sm text-gray-500">
            <p className="mb-4">
              Database powered by <a href="https://convex.link/C9EptlP"> convex.dev</a>
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://twitter.com/convex_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#222222] transition-colors">
                <Twitter size={20} />
              </a>
              <a
                href="https://discord.gg/XcRXcWPJGG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#222222] transition-colors">
                <MessageCircle size={20} />
              </a>
              <a
                href="https://github.com/waynesutton/commitrank"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#222222] transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
