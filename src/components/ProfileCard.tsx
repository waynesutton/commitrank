import { useState } from "react";
import {
  Twitter,
  Github,
  Globe,
  MapPin,
  Share,
  ChevronDown,
  ChevronUp,
  Loader2,
  Info,
  X,
} from "lucide-react";
import { Doc } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

type Profile = Doc<"profiles">;
interface ProfileCardProps {
  profile: Profile;
}

interface LoadingProfileCardProps {
  username: string;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [isTaleExpanded, setIsTaleExpanded] = useState(false);
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);
  const generateStory = useMutation(api.profiles.generateStory);

  const getRank = (score: number | null | undefined): string => {
    if (score === null || score === undefined) return "Basic";
    if (score >= 90) return "Legendary";
    if (score >= 75) return "Elite";
    if (score >= 60) return "Hacker";
    if (score >= 40) return "Cracked";
    if (score >= 20) return "Noob";
    return "Basic";
  };

  const copyShareLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${profile.login}`;
    navigator.clipboard.writeText(url);
    setShowCopyModal(true);
    setTimeout(() => setShowCopyModal(false), 2000);
  };

  const handleToggleTale = () => {
    setIsTaleExpanded(!isTaleExpanded);
    if (
      !profile.story &&
      profile.score !== null &&
      profile.score !== undefined
    ) {
      generateStory({ profileId: profile._id });
    }
  };

  return (
    <div
      id={profile.login}
      className={`relative rounded-lg shadow-xl p-4 sm:p-6 w-full max-w-[400px] mx-auto bg-white text-gray-900 transition-all duration-300 pb-16`}
    >
      <div className="flex justify-between items-start mb-4">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="w-24 h-24 rounded-full border-4 border-[#222222]"
        />
        <div className="flex gap-2">
          <button
            onClick={() => copyShareLink()}
            className="p-2 rounded-full hover:bg-gray-200 relative"
            title="Copy share link"
          >
            <Share size={20} />
            {showCopyModal && (
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded whitespace-nowrap">
                URL copied to clipboard!
              </div>
            )}
          </button>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold mt-4 break-words">
        {profile.name}
      </h2>
      <p className="text-gray-600 break-words">@{profile.login}</p>

      <p className="mt-4 break-words">{profile.bio}</p>

      <div className="mt-6 space-y-2">
        <div
          className="flex items-center gap-2 font-semibold relative"
          onMouseEnter={() => setIsScoreModalOpen(true)}
          onMouseLeave={() => setIsScoreModalOpen(false)}
        >
          <Github size={20} className="text-slate-600" />
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-1.5 cursor-pointer">
              Developer Impact Score:
              <Info size={16} className="text-gray-500" />
              <span className="text-2xl font-bold flex items-center gap-2">
                {profile.error ? (
                  "Error"
                ) : profile.score ? (
                  profile.score.toFixed(2)
                ) : (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Calculating...
                  </>
                )}
              </span>
            </span>
            <span className="text-sm text-gray-600">
              GitHub Commits (this year): {profile.commits || 0}
            </span>
          </div>
          {isScoreModalOpen && profile.score && (
            <div className="absolute top-full mt-2 left-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10 text-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-base">Score Breakdown</h3>
                <button
                  onClick={() => setIsScoreModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-200"
                >
                  <X size={16} />
                </button>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li className="flex justify-between">
                  <span>Recency-decayed Commits:</span>
                  <span className="font-semibold">
                    {profile.commitTimestamps?.length ?? 0}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Active Repositories:</span>
                  <span className="font-semibold">{profile.public_repos}</span>
                </li>
                <li className="flex justify-between">
                  <span>Followers:</span>
                  <span className="font-semibold">{profile.followers}</span>
                </li>
                <li className="flex justify-between">
                  <span>Recency-decayed Merged PRs:</span>
                  <span className="font-semibold">
                    {profile.mergedPrTimestamps?.length ?? 0}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>PR Acceptance Rate:</span>
                  <span className="font-semibold">
                    {profile.prTotal
                      ? `${(
                          ((profile.prMerged ?? 0) / profile.prTotal) *
                          100
                        ).toFixed(1)}%`
                      : "N/A"}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Recency-decayed Stars:</span>
                  <span className="font-semibold">
                    {profile.starTimestamps?.length ?? 0}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Issues Closed:</span>
                  <span className="font-semibold">
                    {profile.issuesClosed ?? 0}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Language Breadth:</span>
                  <span className="font-semibold">
                    {profile.languageBreadth ?? 0}
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                This is a summary of raw metrics. For the full formula, see the{" "}
                <a
                  href="#algorithm-breakdown"
                  className="text-blue-500 hover:underline"
                  onClick={() => setIsScoreModalOpen(false)}
                >
                  Developer Impact Score Algorithm
                </a>{" "}
                in the footer.
              </p>
            </div>
          )}
        </div>
        {profile.error && (
          <div className="text-red-500 text-sm mt-2">
            <strong>Could not rank profile:</strong> {profile.error}
          </div>
        )}
      </div>

      <div className="mt-4">
        <button
          onClick={handleToggleTale}
          className="flex items-center justify-between w-full text-left font-semibold bg-[#E6E9EE] text-black p-2 rounded"
        >
          <span className="break-words pr-2">The Tale of {profile.name}</span>
          <div className="flex-shrink-0">
            {isTaleExpanded ? <ChevronUp /> : <ChevronDown />}
          </div>
        </button>
        {isTaleExpanded && (
          <div className="mt-2 text-gray-600 break-words">
            {profile.story ? (
              <div className="whitespace-pre-wrap">{profile.story}</div>
            ) : profile.score ? (
              <div className="flex items-center gap-2 animate-pulse">
                <Loader2 size={16} className="animate-spin" />
                The bard is composing a tale...
              </div>
            ) : (
              "The tale awaits the hero's score..."
            )}
          </div>
        )}
      </div>

      <div className="mt-6 space-y-2 mb-5">
        {profile.location && (
          <div className="flex items-center gap-2">
            <MapPin size={16} className="flex-shrink-0" />
            <span className="break-words">{profile.location}</span>
          </div>
        )}
        {profile.blog && (
          <div className="flex items-center gap-2">
            <Globe size={16} className="flex-shrink-0" />
            <a
              href={
                profile.blog.startsWith("http")
                  ? profile.blog
                  : `https://${profile.blog}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline break-words"
            >
              {profile.blog}
            </a>
          </div>
        )}
        {profile.twitter_username && (
          <div className="flex items-center gap-2">
            <Twitter size={16} className="flex-shrink-0" />
            <a
              href={`https://twitter.com/${profile.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline break-words"
            >
              @{profile.twitter_username}
            </a>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Github size={16} className="flex-shrink-0" />
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline break-words"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      {/* Category Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#323232] text-white text-center py-2 rounded-b-lg">
        <span className="font-semibold text-sm">{getRank(profile.score)}</span>
      </div>
    </div>
  );
}

export function LoadingProfileCard({ username }: LoadingProfileCardProps) {
  return (
    <div
      className={`relative rounded-lg shadow-xl p-4 sm:p-6 w-full max-w-[400px] mx-auto bg-white text-gray-900 transition-all duration-300 animate-pulse pb-16`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-24 h-24 rounded-full border-4 border-[#222222] bg-gray-200"></div>
        <div className="flex gap-2">
          <div className="p-2 rounded-full bg-gray-200 w-10 h-10"></div>
        </div>
      </div>

      <div className="w-32 h-6 bg-gray-200 rounded mt-4"></div>
      <div className="w-24 h-4 bg-gray-200 rounded mt-2"></div>

      <div className="w-full h-4 bg-gray-200 rounded mt-4"></div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center gap-2 font-semibold">
          <Github size={20} className="text-slate-600" />
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-2">
              Developer Impact Score:{" "}
              <span className="text-2xl font-bold flex items-center gap-2">
                <Loader2 size={20} className="animate-spin" />
                Loading @{username}...
              </span>
            </span>
            <span className="text-sm text-gray-600">
              GitHub Commits (this year):{" "}
              <Loader2 size={12} className="animate-spin inline" />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between w-full text-left font-semibold">
          <span>The Tale of {username}</span>
          <ChevronDown className="text-gray-400" />
        </div>
        <div className="mt-2 text-gray-600 flex items-center gap-2">
          <Loader2 size={16} className="animate-spin" />
          Fetching GitHub data...
        </div>
      </div>

      <div className="mt-6space-y-2">
        <div className="flex items-center gap-2">
          <Github size={16} />
          <span className="text-blue-500">https://github.com/{username}</span>
        </div>
      </div>

      {/* Category Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#323232] text-white text-center py-2 rounded-b-lg">
        <span className="font-semibold text-sm">Loading...</span>
      </div>
    </div>
  );
}
