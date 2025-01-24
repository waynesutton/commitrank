import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
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
import { GitHubProfile, ProfileData } from "./types";
import ProfileCard from "./components/ProfileCard";

export function App() {
  const [url, setUrl] = useState("");
  const [profiles, setProfiles] = useState<ProfileData[]>([]);
  const [error, setError] = useState("");
  const [visibleCards, setVisibleCards] = useState(6);

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

  const fetchProfileMutation = useMutation({
    mutationFn: async (url: string) => {
      const username = url.split("/").pop();
      if (!username) throw new Error("Invalid GitHub URL");

      const profileResponse = await axios.get(`https://api.github.com/users/${username}`);
      const commitsResponse = await axios.get(
        `https://api.github.com/search/commits?q=author:${username}`,
        { headers: { Accept: "application/vnd.github.cloak-preview" } }
      );

      const commits = commitsResponse.data.total_count;
      const usesConvex = await checkForConvex(username);

      return {
        profile: profileResponse.data,
        commits,
        usesConvex,
      };
    },
    onSuccess: (data) => {
      setProfiles((prev) => [data, ...prev]);
      setUrl("");
      setError("");
    },
    onError: () => {
      setError("Error fetching GitHub profile. Please check the URL and try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.includes("github.com")) {
      setError("Please enter a valid GitHub profile URL");
      return;
    }
    fetchProfileMutation.mutate(url);
  };

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 6);
  };

  const visibleProfiles = profiles.slice(0, visibleCards);
  const hasMoreProfiles = profiles.length > visibleCards;

  const overloadProfiles = profiles.filter((p) => p.commits >= 100000);
  const hackerProfiles = profiles.filter((p) => p.commits >= 10000 && p.commits < 100000);
  const wizardProfiles = profiles.filter((p) => p.commits >= 5000 && p.commits < 10000);
  const samuraiProfiles = profiles.filter((p) => p.commits >= 1000 && p.commits < 5000);
  const explorerProfiles = profiles.filter((p) => p.commits < 10);
  const noobProfiles = profiles.filter((p) => p.commits >= 10 && p.commits < 1000);
  const convexProfiles = profiles.filter((p) => p.usesConvex);

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
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Commit Rank</h1>

        <p className="text-center text-gray-600 mb-2">
          Chat with any GitHub public profile and see their ranking. Just paste the GitHub profile
          URL below.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
          Open Source project built with
          <a
            href="https://convex.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:none flex items-center gap-1">
            <Database size={16} />
            Convex.dev
          </a>
          {" | "}
          <a
            href="https://tanstack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:none">
            TanStack.com
          </a>
          {" | "}
          <a
            href="https://bolt.new"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:none">
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
              disabled={fetchProfileMutation.isPending}
              className="px-6 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333] disabled:opacity-50">
              {fetchProfileMutation.isPending ? "Loading..." : "Start Ranking"}
            </button>
          </div>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </form>

        <div className="flex gap-8">
          <div className="w-72 flex-shrink-0">
            <div className="sticky top-4 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Ranking Levels</h2>

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
                        {category.profiles.map(({ profile }) => (
                          <p key={profile.login} className="text-sm text-gray-600">
                            @{profile.login}
                          </p>
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
              {visibleProfiles.map((data, index) => (
                <ProfileCard
                  key={index}
                  profile={data.profile}
                  commits={data.commits}
                  usesConvex={data.usesConvex}
                />
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
            <p className="mb-4">Database Powered by https://convex.dev</p>
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
                href="https://github.com/waynesutton/commitquest"
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
