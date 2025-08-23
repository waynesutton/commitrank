import { useState } from "react";
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
import ProfileCard, { LoadingProfileCard } from "./components/ProfileCard";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Doc } from "../convex/_generated/dataModel";

type Profile = Doc<"profiles">;

const categories = [
  { name: "Legendary", icon: Zap },
  { name: "Elite", icon: Code2 },
  { name: "Hacker", icon: Wand2 },
  { name: "Cracked", icon: Sword },
  { name: "Noob", icon: Sprout },
  { name: "Basic", icon: Compass },
  { name: "Convex", icon: Database },
];

export function App() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loadingProfiles, setLoadingProfiles] = useState<Set<string>>(
    new Set(),
  );
  const [isAlgorithmExpanded, setIsAlgorithmExpanded] = useState(false);

  const rankProfile = useMutation(api.profiles.rankProfile);
  const profiles = useQuery(api.profiles.getProfiles) || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.includes("github.com")) {
      setError("Please enter a valid GitHub profile URL");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      const username = url.replace(/\/$/, "").split("/").pop();
      if (!username) throw new Error("Invalid GitHub URL");

      // Add to loading profiles immediately for UI feedback
      setLoadingProfiles((prev) => new Set(prev).add(username));

      await rankProfile({ login: username });

      setUrl("");
    } catch (error) {
      console.error("Error ranking GitHub profile:", error);
      setError(
        "Error ranking GitHub profile. Please check the URL and try again.",
      );
      // Remove from loading profiles on error
      const username = url.replace(/\/$/, "").split("/").pop();
      if (username) {
        setLoadingProfiles((prev) => {
          const newSet = new Set(prev);
          newSet.delete(username);
          return newSet;
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getRank = (score: number | null | undefined): string => {
    if (score === null || score === undefined) return "Basic";
    if (score >= 90) return "Legendary";
    if (score >= 75) return "Elite";
    if (score >= 60) return "Hacker";
    if (score >= 40) return "Cracked";
    if (score >= 20) return "Noob";
    return "Basic";
  };

  const sortedProfiles = profiles
    .filter((p) => p.login.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      // First sort by creation time (most recent first)
      const timeA = a._creationTime || 0;
      const timeB = b._creationTime || 0;
      if (timeB !== timeA) {
        return timeB - timeA;
      }
      // Then by score as secondary sort
      return (b.score ?? 0) - (a.score ?? 0);
    });

  const filteredProfiles = selectedCategory
    ? selectedCategory === "Convex"
      ? sortedProfiles.filter((p) => p.usesConvex)
      : sortedProfiles.filter((p) => getRank(p.score) === selectedCategory)
    : sortedProfiles;

  // Remove loading profiles that now exist in the actual profiles
  const actualProfileLogins = new Set(profiles.map((p) => p.login));
  const currentLoadingProfiles = Array.from(loadingProfiles).filter(
    (login) => !actualProfileLogins.has(login),
  );

  // Update loading profiles state if needed
  if (currentLoadingProfiles.length !== loadingProfiles.size) {
    setLoadingProfiles(new Set(currentLoadingProfiles));
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#F3F2F2] to-[#FFFFFF]">
      <div className="w-full mx-auto">
        <header className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-7xl mx-auto">
            <div className="text-center md:text-left md:flex-1">
              <a href="https://commitrank.ai">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Are you a cracked dev?
                </h1>
              </a>
              <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                Rank the best developers on GitHub with AI.
              </p>
              <div className="mt-3 flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500">
                <a href="https://github.com/waynesutton/commitrank">
                  Open Source project built with
                </a>
                <a
                  href="https://convex.link/C9EptlP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  <img
                    src="/convex-black.svg"
                    alt="Convex"
                    width="14"
                    height="14"
                  />
                  convex.dev
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 md:w-auto md:max-w-md w-full">
              <p className="mb-2 text-sm text-gray-600 text-center md:text-left">
                Just paste the GitHub profile URL below.
              </p>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter GitHub profile URL"
                    className="flex-1 px-4 py-2 text-base border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap disabled:bg-gray-400"
                  >
                    {isLoading ? "Ranking..." : "Start Ranking"}
                  </button>
                </div>
                {error && (
                  <p className="mt-2 text-red-500 text-sm text-left">{error}</p>
                )}
              </form>
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto mb-12 flex flex-wrap justify-center gap-1 px-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1 rounded-lg text-sm ${
              !selectedCategory ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3 py-1 rounded-lg text-sm ${
                selectedCategory === cat.name
                  ? "bg-black text-white"
                  : "bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row px-4 justify-center gap-6">
          <div className="w-full lg:w-64 lg:shrink-0 order-1">
            <div className="lg:sticky lg:top-4 bg-white rounded-lg shadow-md p-4 lg:p-6 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
              <h2 className="text-xl font-bold mb-2">Leaderboard</h2>

              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-blue-600 hover:underline transition-colors cursor-pointer"
                >
                  ↑ Top
                </button>
                <button
                  onClick={() =>
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-blue-600 hover:underline transition-colors cursor-pointer"
                >
                  ↓ Bottom
                </button>
              </div>

              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-semibold mb-2 text-gray-700">
                  <a
                    href="#algorithm-breakdown"
                    className="hover:text-blue-600 hover:underline transition-colors cursor-pointer"
                  >
                    Developer Impact Score
                  </a>
                </h3>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>Based on commits, PRs, followers, stars,</div>
                  <div>issues closed, and language breadth</div>
                  <div className="mt-2 space-y-1">
                    <div className="font-medium">Score Ranges:</div>
                    <div>🔥 Legendary: 90-100</div>
                    <div>⚡ Elite: 75-89</div>
                    <div>🧙 Hacker: 60-74</div>
                    <div>⚔️ Cracked: 40-59</div>
                    <div>🌱 Noob: 20-39</div>
                    <div>🧭 Basic: 0-19</div>
                  </div>
                </div>
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

              <div className="space-y-3">
                {(() => {
                  // Group profiles by category
                  const profilesByCategory = filteredProfiles.reduce(
                    (acc, profile) => {
                      const category = getRank(profile.score);
                      if (!acc[category]) acc[category] = [];
                      acc[category].push(profile);

                      // Also add to Convex category if they use Convex
                      if (profile.usesConvex) {
                        if (!acc["Convex"]) acc["Convex"] = [];
                        acc["Convex"].push(profile);
                      }

                      return acc;
                    },
                    {} as Record<string, typeof filteredProfiles>,
                  );

                  // Define category order (highest to lowest)
                  const categoryOrder = [
                    "Legendary",
                    "Elite",
                    "Hacker",
                    "Cracked",
                    "Noob",
                    "Basic",
                    "Convex",
                  ];

                  let globalIndex = 0;

                  return categoryOrder
                    .map((category) => {
                      const categoryProfiles = profilesByCategory[category];
                      if (!categoryProfiles || categoryProfiles.length === 0)
                        return null;

                      return (
                        <div key={category} className="space-y-1">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-1">
                            {category} ({categoryProfiles.length})
                          </div>
                          {categoryProfiles.map((profile) => {
                            globalIndex++;
                            return (
                              <div
                                key={profile._id}
                                className="flex items-center gap-2 pl-2"
                              >
                                <span className="w-6 text-sm text-gray-500">
                                  {globalIndex}.
                                </span>
                                <a
                                  href={`#${profile.login}`}
                                  className="text-sm text-gray-600 hover:text-[#222222] hover:underline"
                                >
                                  @{profile.login}
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })
                    .filter(Boolean);
                })()}
              </div>
            </div>
          </div>

          <div className="flex-1 lg:pl-8 lg:pr-4 max-w-[850px] order-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Show loading cards first */}
              {currentLoadingProfiles.map((username) => (
                <div key={`loading-${username}`}>
                  <LoadingProfileCard username={username} />
                </div>
              ))}
              {/* Then show actual profiles */}
              {filteredProfiles.map((profile) => (
                <div key={profile._id} id={profile.login}>
                  <ProfileCard profile={profile as Profile} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-16 pb-8">
          <hr className="border-gray-200 mb-6" />

          {/* Algorithm Breakdown Section */}
          <div id="algorithm-breakdown" className="max-w-4xl mx-auto mb-8 px-4">
            <button
              onClick={() => setIsAlgorithmExpanded(!isAlgorithmExpanded)}
              className="flex items-center justify-center w-full text-left font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            >
              <span className="mr-2">Developer Impact Score Algorithm</span>
              {isAlgorithmExpanded ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {isAlgorithmExpanded && (
              <div className="mt-4 p-6 bg-gray-50 rounded-lg text-sm text-gray-700">
                <div className="mb-4 pb-4 border-b border-gray-200 text-xs text-gray-500">
                  Algorithm designed by{" "}
                  <a
                    href="https://github.com/mantrakp04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Mantra (@mantrakp04)
                  </a>{" "}
                  aka{" "}
                  <a
                    href="https://x.com/barre_of_lube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    @barre_of_lube
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">
                      Algorithm Components
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <strong>Commits:</strong> Recent activity with time
                        decay weighting
                      </div>
                      <div>
                        <strong>Pull Requests:</strong> Merged PRs and
                        acceptance rate
                      </div>
                      <div>
                        <strong>Followers:</strong> Community recognition and
                        influence
                      </div>
                      <div>
                        <strong>Stars:</strong> Project popularity and impact
                      </div>
                      <div>
                        <strong>Issues Closed:</strong> Problem-solving
                        contribution
                      </div>
                      <div>
                        <strong>Language Breadth:</strong> Technical versatility
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">
                      Score Ranges
                    </h4>
                    <div className="space-y-1">
                      <div>
                        🔥 <strong>Legendary:</strong> 90-100
                      </div>
                      <div>
                        ⚡ <strong>Elite:</strong> 75-89
                      </div>
                      <div>
                        🧙 <strong>Hacker:</strong> 60-74
                      </div>
                      <div>
                        ⚔️ <strong>Cracked:</strong> 40-59
                      </div>
                      <div>
                        🌱 <strong>Noob:</strong> 20-39
                      </div>
                      <div>
                        🧭 <strong>Basic:</strong> 0-19
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mathematical Formulation */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">
                    Mathematical Formulation
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <strong>Recency decay:</strong> m̂ = Σ 2^(−Δtᵢ T_half⁻¹)
                      for commits, merged PRs, and stars
                    </div>
                    <div>
                      <strong>Smoothed PR acceptance:</strong> (merged +
                      priorSuccess) ÷ (total + priorTotal). Defaults 5 and 25
                    </div>
                    <div>
                      <strong>Percentile transform:</strong> via empirical CDF
                    </div>
                    <div>
                      <strong>Weighted sum:</strong> with weights that sum to 1.
                      Score is 100 × s
                    </div>
                    <div>
                      <strong>Optional confidence:</strong> on PR acceptance
                      based on total PRs
                    </div>
                    <div>
                      <strong>Batch helpers:</strong> to build population arrays
                      and rank users
                    </div>
                  </div>
                </div>

                {/* Tuning Parameters */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">
                    Tuning Parameters
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <strong>Half lives:</strong> commits 90 days, merged PRs
                      120, stars 180
                    </div>
                    <div>
                      <strong>PR prior:</strong> 5 of 25
                    </div>
                    <div>
                      <strong>Weights:</strong> commits .12, active repos .10,
                      followers .10, merged PRs .18, PR acceptance .13, stars
                      .12, issues closed .10, language breadth .15
                    </div>
                  </div>
                </div>

                {/* Code Implementation */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-3 text-gray-900">
                    Core Algorithm Implementation
                  </h4>
                  <div className="bg-gray-900 p-2 sm:p-4 rounded text-xs font-mono overflow-x-auto">
                    <pre>
                      <span className="text-gray-400">
                        // ===== Core algorithm =====
                      </span>
                      {"\n\n"}
                      <span className="text-gray-400">
                        // Recency decayed metric
                      </span>
                      {"\n"}
                      <span className="text-gray-400">
                        // m̂ = Σ 2^( -Δt_i / T_half )
                      </span>
                      {"\n"}
                      <span className="text-blue-400">export</span>{" "}
                      <span className="text-blue-400">function</span>{" "}
                      <span className="text-yellow-300">decayedCount</span>(
                      {"\n"}
                      {"  "}timestamps:{" "}
                      <span className="text-blue-400">number</span>[],
                      {"\n"}
                      {"  "}halfLifeDays:{" "}
                      <span className="text-blue-400">number</span>,{"\n"}
                      {"  "}now = <span className="text-green-400">Date</span>.
                      <span className="text-yellow-300">now</span>()
                      {"\n"}
                      ): <span className="text-blue-400">number</span> {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">const</span> ln2 ={" "}
                      <span className="text-green-400">Math</span>.
                      <span className="text-yellow-300">log</span>(
                      <span className="text-green-300">2</span>);
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">const</span> msPerDay ={" "}
                      <span className="text-green-300">24</span> *{" "}
                      <span className="text-green-300">60</span> *{" "}
                      <span className="text-green-300">60</span> *{" "}
                      <span className="text-green-300">1000</span>;{"\n"}
                      {"  "}
                      <span className="text-blue-400">return</span> timestamps.
                      <span className="text-yellow-300">reduce</span>((sum, ts)
                      =&gt; {"{"}
                      {"\n"}
                      {"    "}
                      <span className="text-blue-400">const</span> ageDays =
                      (now - ts) / msPerDay;
                      {"\n"}
                      {"    "}
                      <span className="text-blue-400">return</span> sum +{" "}
                      <span className="text-green-400">Math</span>.
                      <span className="text-yellow-300">exp</span>(-ln2 *
                      (ageDays / halfLifeDays));
                      {"\n"}
                      {"  }"}, <span className="text-green-300">0</span>);
                      {"\n"}
                      {"}"}
                      {"\n\n"}
                      <span className="text-gray-400">
                        // Smoothed PR acceptance
                      </span>
                      {"\n"}
                      <span className="text-gray-400">
                        // p̂_R = (merged + priorSuccess) / (total + priorTotal)
                      </span>
                      {"\n"}
                      <span className="text-blue-400">export</span>{" "}
                      <span className="text-blue-400">function</span>{" "}
                      <span className="text-yellow-300">smoothedRate</span>(
                      {"\n"}
                      {"  "}merged:{" "}
                      <span className="text-blue-400">number</span>,{"\n"}
                      {"  "}total: <span className="text-blue-400">number</span>
                      ,{"\n"}
                      {"  "}priorSuccess ={" "}
                      <span className="text-green-300">5</span>,{"\n"}
                      {"  "}priorTotal ={" "}
                      <span className="text-green-300">25</span>
                      {"\n"}
                      ): <span className="text-blue-400">number</span> {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">return</span> (merged +
                      priorSuccess) /{" "}
                      <span className="text-green-400">Math</span>.
                      <span className="text-yellow-300">max</span>(
                      <span className="text-green-300">1</span>, total +
                      priorTotal);
                      {"\n"}
                      {"}"}
                      {"\n\n"}
                      <span className="text-gray-400">
                        // Empirical percentile (CDF)
                      </span>
                      {"\n"}
                      <span className="text-gray-400">
                        // p_m = (1/N) Σ 1(M_j ≤ v)
                      </span>
                      {"\n"}
                      <span className="text-blue-400">export</span>{" "}
                      <span className="text-blue-400">function</span>{" "}
                      <span className="text-yellow-300">
                        empiricalPercentile
                      </span>
                      (value: <span className="text-blue-400">number</span>,
                      population: <span className="text-blue-400">number</span>
                      []): <span className="text-blue-400">number</span> {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">if</span>{" "}
                      (!population.length){" "}
                      <span className="text-blue-400">return</span>{" "}
                      <span className="text-green-300">0.5</span>;{"\n"}
                      {"  "}
                      <span className="text-blue-400">const</span> arr =
                      population.<span className="text-yellow-300">slice</span>
                      ().<span className="text-yellow-300">sort</span>((a, b)
                      =&gt; a - b);
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">let</span> lo ={" "}
                      <span className="text-green-300">0</span>, hi =
                      arr.length;
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">while</span> (lo &lt; hi){" "}
                      {"{"}
                      {"\n"}
                      {"    "}
                      <span className="text-blue-400">const</span> mid = (lo +
                      hi) &gt;&gt; <span className="text-green-300">1</span>;
                      {"\n"}
                      {"    "}
                      <span className="text-blue-400">if</span> (arr[mid] &lt;=
                      value) lo = mid +{" "}
                      <span className="text-green-300">1</span>;{" "}
                      <span className="text-blue-400">else</span> hi = mid;
                      {"\n"}
                      {"  "}
                      {"}"}
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">return</span> lo /
                      arr.length;
                      {"\n"}
                      {"}"}
                      {"\n\n"}
                      <span className="text-gray-400">// Weighted score</span>
                      {"\n"}
                      <span className="text-gray-400">
                        // s = Σ w_k * p_k, Score = 100 * s
                      </span>
                      {"\n"}
                      <span className="text-blue-400">export</span>{" "}
                      <span className="text-blue-400">function</span>{" "}
                      <span className="text-yellow-300">weightedScore</span>(
                      {"\n"}
                      {"  "}percentiles:{" "}
                      <span className="text-blue-400">Record</span>&lt;
                      <span className="text-blue-400">string</span>,{" "}
                      <span className="text-blue-400">number</span>&gt;,
                      {"\n"}
                      {"  "}weights:{" "}
                      <span className="text-blue-400">Record</span>&lt;
                      <span className="text-blue-400">string</span>,{" "}
                      <span className="text-blue-400">number</span>&gt;
                      {"\n"}
                      ): <span className="text-blue-400">number</span> {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">let</span> s ={" "}
                      <span className="text-green-300">0</span>;{"\n"}
                      {"  "}
                      <span className="text-blue-400">for</span> (
                      <span className="text-blue-400">const</span> k{" "}
                      <span className="text-blue-400">in</span> weights) s +=
                      (weights[k] ?? <span className="text-green-300">0</span>)
                      * (percentiles[k] ??{" "}
                      <span className="text-green-300">0</span>);
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">return</span>{" "}
                      <span className="text-green-300">100</span> * s;
                      {"\n"}
                      {"}"}
                      {"\n\n"}
                      <span className="text-gray-400">
                        // ===== Defaults from your note =====
                      </span>
                      {"\n\n"}
                      <span className="text-blue-400">export</span>{" "}
                      <span className="text-blue-400">const</span>{" "}
                      <span className="text-yellow-300">DEFAULT_WEIGHTS</span> ={" "}
                      {"{"}
                      {"\n"}
                      {"  "}P_C: <span className="text-green-300">0.12</span>,{" "}
                      <span className="text-gray-400">// commits decayed</span>
                      {"\n"}
                      {"  "}P_R: <span className="text-green-300">0.10</span>,{" "}
                      <span className="text-gray-400">// active repos</span>
                      {"\n"}
                      {"  "}P_F: <span className="text-green-300">0.10</span>,{" "}
                      <span className="text-gray-400">// followers</span>
                      {"\n"}
                      {"  "}P_PM: <span className="text-green-300">0.18</span>,{" "}
                      <span className="text-gray-400">
                        // merged PRs decayed
                      </span>
                      {"\n"}
                      {"  "}P_PA: <span className="text-green-300">0.13</span>,{" "}
                      <span className="text-gray-400">
                        // PR acceptance smoothed
                      </span>
                      {"\n"}
                      {"  "}P_S: <span className="text-green-300">0.12</span>,{" "}
                      <span className="text-gray-400">// stars decayed</span>
                      {"\n"}
                      {"  "}P_IC: <span className="text-green-300">0.10</span>,{" "}
                      <span className="text-gray-400">// issues closed</span>
                      {"\n"}
                      {"  "}P_L: <span className="text-green-300">0.15</span>,{" "}
                      <span className="text-gray-400">// language breadth</span>
                      {"\n"}
                      {"}"} <span className="text-blue-400">as</span>{" "}
                      <span className="text-blue-400">const</span>;{"\n\n"}
                      <span className="text-blue-400">export</span>{" "}
                      <span className="text-blue-400">const</span>{" "}
                      <span className="text-yellow-300">DEFAULT_HALFLIVES</span>{" "}
                      = {"{"}
                      {"\n"}
                      {"  "}commits: <span className="text-green-300">90</span>,
                      {"\n"}
                      {"  "}mergedPrs:{" "}
                      <span className="text-green-300">120</span>,{"\n"}
                      {"  "}stars: <span className="text-green-300">180</span>,
                      {"\n"}
                      {"}"} <span className="text-blue-400">as</span>{" "}
                      <span className="text-blue-400">const</span>;{"\n\n"}
                      <span className="text-gray-400">
                        // Optional confidence multiplier for rate metrics
                      </span>
                      {"\n"}
                      <span className="text-blue-400">export</span>{" "}
                      <span className="text-blue-400">function</span>{" "}
                      <span className="text-yellow-300">
                        confidenceFromEvidence
                      </span>
                      (evidence: <span className="text-blue-400">number</span>,
                      k = <span className="text-green-300">20</span>):{" "}
                      <span className="text-blue-400">number</span> {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">return</span>{" "}
                      <span className="text-green-300">1</span> -{" "}
                      <span className="text-green-400">Math</span>.
                      <span className="text-yellow-300">exp</span>(-(evidence /{" "}
                      <span className="text-green-400">Math</span>.
                      <span className="text-yellow-300">max</span>(
                      <span className="text-green-300">1</span>, k)));
                      {"\n"}
                      {"}"}
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center text-med text-gray-500">
            <p className="mb-4">
              Database powered by{" "}
              <a
                href="https://convex.link/C9EptlP"
                className="inline-flex items-center"
              >
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
                className="text-gray-400 hover:text-[#222222] transition-colors"
              >
                <Cloud size={20} />
              </a>
              <a
                href="https://twitter.com/convex_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#222222] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://discord.gg/XcRXcWPJGG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#222222] transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://github.com/waynesutton/commitrank"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#222222] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://commitrank.ai/llms.txt  "
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#222222] transition-colors"
              >
                <Notebook size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Disclaimer: This site is not affiliated with or endorsed by
              GitHub. All trademarks belong to their respective owners.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
