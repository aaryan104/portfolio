import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export interface GitHubStatsData {
  contributions: number;
  repos: number;
  followers: number;
  topLanguage: string;
}

export interface LeetCodeStatsData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  acceptanceRate: number;
}

export const useGitHubStats = () => {
  return useQuery<GitHubStatsData>({
    queryKey: ['githubStats'],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/api/stats/github`);
      if (!res.ok) throw new Error('Failed to fetch GitHub stats');
      return res.json();
    },
    placeholderData: {
      contributions: 320,
      repos: 18,
      followers: 12,
      topLanguage: 'TypeScript',
    }
  });
};

export const useLeetCodeStats = () => {
  return useQuery<LeetCodeStatsData>({
    queryKey: ['leetcodeStats'],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/api/stats/leetcode`);
      if (!res.ok) throw new Error('Failed to fetch LeetCode stats');
      return res.json();
    },
    placeholderData: {
      totalSolved: 145,
      easySolved: 50,
      mediumSolved: 75,
      hardSolved: 20,
      ranking: 120000,
      acceptanceRate: 64.5,
    }
  });
};
