export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  twitter_username?: string;
  blog?: string;
  location?: string;
}

export interface ProfileData {
  profile: GitHubProfile;
  score?: number;
}
