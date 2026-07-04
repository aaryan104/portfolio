import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export interface GitHubStatsData {
  contributions: number;
  repos: number;
  followers: number;
  topLanguage: string;
}

export const useGitHubStats = () => {
  return useQuery<GitHubStatsData>({
    queryKey: ['githubStats'],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/api/stats/github`);
      if (!res.ok) throw new Error('Failed to fetch GitHub stats');
      return res.json();
    },
    retry: 1, // Don't retry endlessly if the API is offline
    staleTime: 600000 // Cache locally in React Query for 10 minutes
  });
};
