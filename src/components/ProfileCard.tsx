import React, { useState } from "react";
import {
  Twitter,
  Github,
  Globe,
  MapPin,
  Sun,
  Moon,
  Share2,
  Zap,
  Code2,
  Wand2,
  Sword,
  Sprout,
  Compass,
  Database,
} from "lucide-react";
import { GitHubProfile } from "../types";
import ChatBox from "./ChatBox";

interface ProfileCardProps {
  profile: GitHubProfile;
  commits: number;
  usesConvex: boolean;
}

export default function ProfileCard({ profile, commits, usesConvex }: ProfileCardProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const shareOnTwitter = () => {
    const rankLabel = getRankInfo().label;
    const text = `🎮 Just discovered ${profile.name} is a ${rankLabel} on Commit Rank with ${commits.toLocaleString()} commits! ${usesConvex ? "⚡ Convex Developer!" : ""} Check out their journey at https://commitrank.ai#${profile.login}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
  };

  const cardClass = isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900";

  const getRankInfo = () => {
    if (commits >= 100000) return { icon: Zap, label: "Overload", color: "text-purple-500" };
    if (commits >= 10000) return { icon: Code2, label: "Hacker", color: "text-red-500" };
    if (commits >= 5000) return { icon: Wand2, label: "Wizard", color: "text-blue-500" };
    if (commits >= 1000) return { icon: Sword, label: "Samurai", color: "text-indigo-500" };
    if (commits >= 10) return { icon: Sprout, label: "Noob", color: "text-green-500" };
    return { icon: Compass, label: "Explorer", color: "text-yellow-500" };
  };

  const generateStory = () => {
    if (commits >= 100000) {
      const stories = [
        `In the digital realm, ${profile.name} stands as a legendary Overload, their ${commits.toLocaleString()} commits crackling with raw coding energy. Like a power plant of pure innovation, they've generated enough code to light up entire tech ecosystems. Their GitHub history reads like a saga of digital transformation, each commit a bolt of brilliance in the vast storm of development.`,
        `Legends speak of ${profile.name}, the Overload whose keyboard never cools. With ${commits.toLocaleString()} commits, they've transcended normal development patterns, becoming one with the code itself. Their repository is a testament to their mastery, a beacon of light in the darkness of unsolved problems.`,
      ];
      return stories[Math.floor(Math.random() * stories.length)];
    }

    if (commits >= 10000) {
      const stories = [
        `Deep in the matrix of code, ${profile.name} moves like a digital phantom, their ${commits.toLocaleString()} commits telling tales of countless systems conquered and algorithms mastered. This Hacker's repository is a masterclass in digital craftsmanship, each commit a piece of the puzzle in their grand scheme of innovation.`,
        `With fingers dancing across the keyboard, ${profile.name} has carved their name into the bedrock of GitHub with ${commits.toLocaleString()} precise commits. This Hacker's code flows like poetry, each pull request a verse in their epic saga of development.`,
      ];
      return stories[Math.floor(Math.random() * stories.length)];
    }

    if (commits >= 5000) {
      const stories = [
        `In the grand library of code, ${profile.name} stands as a true Wizard, their ${commits.toLocaleString()} commits forming spells of pure logic and innovation. Their repository is their spellbook, each commit a carefully crafted incantation that brings digital dreams to life.`,
        `${profile.name}, the Code Wizard, has woven ${commits.toLocaleString()} commits into a tapestry of technical excellence. Their mastery of the digital arts is evident in every line of code, each commit a step in their journey to programming enlightenment.`,
      ];
      return stories[Math.floor(Math.random() * stories.length)];
    }

    if (commits >= 1000) {
      const stories = [
        `In the digital dojo of ${profile.name}, each commit is a stroke of the keyboard-katana. With ${commits.toLocaleString()} precise cuts through the codebase, this noble developer has earned their place among the Samurai of Silicon Valley. Their git log tells tales of epic bug battles and feature quests that will be remembered in the scrolls of GitHub for generations to come.`,
        `Legend speaks of ${profile.name}, the Code Samurai, whose ${commits.toLocaleString()} commits are like cherry blossoms in the wind - beautiful, purposeful, and ever-growing. Through countless pull requests and merge conflicts, they have maintained their honor, following the way of Clean Code with unwavering dedication.`,
      ];
      return stories[Math.floor(Math.random() * stories.length)];
    }

    if (commits >= 10) {
      const stories = [
        `Every journey begins with a single commit, and ${profile.name} has already taken ${commits.toLocaleString()} steps on their path to coding mastery. Like a sprout reaching for the sun, their potential grows with each new line of code, each commit a leaf in their growing garden of development.`,
        `In the vast forest of code, ${profile.name} is a promising sapling, their ${commits.toLocaleString()} commits marking the beginning of what promises to be a mighty development journey. Watch as they grow, one commit at a time, into a towering presence in the tech ecosystem.`,
      ];
      return stories[Math.floor(Math.random() * stories.length)];
    }

    // Explorer (less than 10 commits)
    const stories = [
      `Standing at the threshold of the coding universe, ${profile.name} takes their first brave steps with ${commits.toLocaleString()} commits. Like an explorer charting unknown territories, they venture forth into the vast expanse of development, each commit a new discovery in their programming journey.`,
      `${profile.name} is an intrepid explorer in the world of code, their ${commits.toLocaleString()} commits marking the beginning of an exciting adventure. With curiosity as their compass, they're setting out to discover the endless possibilities that await in the realm of development.`,
    ];
    return stories[Math.floor(Math.random() * stories.length)];
  };

  const rank = getRankInfo();
  const RankIcon = rank.icon;

  return (
    <div
      id={profile.login}
      className={`rounded-lg shadow-xl p-6 w-[450px] mx-auto ${cardClass} transition-colors duration-300`}>
      <div className="flex justify-between items-start mb-4">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="w-24 h-24 rounded-full border-4 border-[#222222]"
        />
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <h2 className="text-2xl font-bold mt-4">{profile.name}</h2>
      <p className="text-gray-600 dark:text-gray-400">@{profile.login}</p>

      <p className="mt-4">{profile.bio}</p>

      <div className="mt-6 space-y-2">
        <p className="text-xl font-bold">{commits.toLocaleString()} Total Commits</p>
        <div className={`flex items-center gap-2 ${rank.color} font-semibold`}>
          <RankIcon size={20} />
          <span>{rank.label}</span>
        </div>
        {usesConvex && (
          <div className="flex items-center gap-2 text-orange-500 font-semibold">
            <Database size={20} />
            <span>Convex Developer</span>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-[#F5F5F5] dark:bg-gray-800 rounded-lg">
        <h3 className={`flex items-center gap-2 text-lg font-semibold ${rank.color} mb-2`}>
          <RankIcon size={16} />
          The Tale of a {rank.label}
        </h3>
        <p className="text-sm italic text-gray-800 dark:text-gray-200">{generateStory()}</p>
      </div>

      <div className="mt-6 space-y-2">
        {profile.location && (
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{profile.location}</span>
          </div>
        )}
        {profile.blog && (
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <a
              href={profile.blog.startsWith("http") ? profile.blog : `https://${profile.blog}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              {profile.blog}
            </a>
          </div>
        )}
        {profile.twitter_username && (
          <div className="flex items-center gap-2">
            <Twitter size={16} />
            <a
              href={`https://twitter.com/${profile.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              @{profile.twitter_username}
            </a>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Github size={16} />
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            GitHub Profile
          </a>
        </div>
      </div>

      <button
        onClick={shareOnTwitter}
        className="mt-6 w-full flex items-center justify-center gap-2 bg-[#222222] text-white py-2 px-4 rounded-lg hover:bg-[#333333] transition-colors">
        <Twitter size={20} />
        Share on X
      </button>

      <ChatBox profile={profile} commits={commits} usesConvex={usesConvex} />
    </div>
  );
}
