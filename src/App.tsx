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
  Notebook,
  Cloud,
  ChevronDown,
  ChevronUp,
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
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCards, setVisibleCards] = useState(1000);
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

  const filteredProfiles = profiles.filter((profile) =>
    profile.login.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleProfiles = filteredProfiles.slice(0, visibleCards);
  const hasMoreProfiles = filteredProfiles.length > visibleCards;

  const overloadProfiles = filteredProfiles.filter((p: Profile) => p.commits >= 100000);
  const hackerProfiles = filteredProfiles.filter(
    (p: Profile) => p.commits >= 10000 && p.commits < 100000
  );
  const wizardProfiles = filteredProfiles.filter(
    (p: Profile) => p.commits >= 5000 && p.commits < 10000
  );
  const samuraiProfiles = filteredProfiles.filter(
    (p: Profile) => p.commits >= 1000 && p.commits < 5000
  );
  const explorerProfiles = filteredProfiles.filter((p: Profile) => p.commits < 10);
  const noobProfiles = filteredProfiles.filter((p: Profile) => p.commits >= 10 && p.commits < 1000);
  const convexProfiles = filteredProfiles.filter((p: Profile) => p.usesConvex);

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
      <div className="max-w-7xl mx-auto pt-10">
        <div className="flex items-center justify-center gap-3 mb-2">
          <a href="https://commitrank.ai" className="flex items-center justify-center">
            <h1 className="text-4xl font-bold text-center">GitHub Commit Ranking</h1>
          </a>
        </div>

        <p className="text-xl text-center text-gray-600 mb-2">
          CommitRank.AI ranks the best developers on GitHub with AI. Just paste the GitHub profile
          URL below.
        </p>

        <div className="flex items-center justify-center gap-2 text-med text-gray-500 mb-8">
          <a href="https://github.com/waynesutton/commitrank">Open Source project built with</a>
          <a
            href="https://convex.link/C9EptlP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-500 hover:underline flex items-center gap-1">
            <img
              src="/convex-black.svg"
              alt="Convex"
              width="16"
              height="16"
              className="text-gray-500"
            />
            convex.dev
          </a>
          {" |"}
          <a
            href="https://openai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-500 hover:underline flex items-center gap-1">
            OpenAI
          </a>
          {" | "}
          <a
            href="https://tanstack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-500 hover:underline">
            TanStack
          </a>
          {" | "}
          <a
            href="https://bolt.new"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-500 hover:underline">
            Bolt.new
          </a>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12">
          <div className="flex gap-4">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter GitHub profile URL"
              className="flex-1 px-4 py-2 text-lg border rounded-lg focus:ring-2 focus:ring-[#222222] focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
              Start Ranking
            </button>
          </div>
          {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
        </form>

        <div className="flex px-4">
          <div className="w-72 shrink-0">
            <div className="sticky top-4 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-2">Ranking Categories</h2>
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1">
                  <ChevronUp size={16} />
                  Scroll to top
                </button>
                <button
                  onClick={() =>
                    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
                  }
                  className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1">
                  <ChevronDown size={16} />
                  Scroll to bottom
                </button>
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search GitHub usernames"
                  className="w-full pl-8 pr-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-[#222222] focus:border-transparent"
                />
              </div>

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
                        {category.profiles.map((profile) => (
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

          <div className="flex-1 pl-8 pr-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16.5rem] gap-y-8">
              {filteredProfiles?.map((profile) => (
                <div key={profile._id} className="w-full max-w-[300px] mx-auto">
                  <ProfileCard
                    profile={profile}
                    commits={profile.commits}
                    usesConvex={profile.usesConvex}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-16 pb-8">
          <hr className="border-gray-200 mb-6" />
          <div className="text-center text-med text-gray-500">
            <p className="mb-4">
              Database powered by{" "}
              <a href="https://convex.link/C9EptlP" className="inline-flex items-center">
                <img
                  src="/convex-black.svg"
                  alt="Convex"
                  width="16"
                  height="16"
                  className="text-gray-500"
                />
                <span className="ml-2">convex.dev</span>
              </a>
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://bsky.app/profile/convex.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#222222] transition-colors">
                <Cloud size={20} />
              </a>
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
              <a
                href="https://commitrank.ai/llms.txt  "
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#222222] transition-colors">
                <Notebook size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Disclaimer: This site is not affiliated with or endorsed by GitHub. All trademarks
              belong to their respective owners.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
