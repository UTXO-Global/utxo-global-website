import { PaginationType } from "@/types/common";

export type LeaderboardType = {
  rank: number;
  user_address: string;
  points: number;
  email: string | null;
  username: string | null;
};

export type LeaderboardResType = {
  data: {
    ranking: number | null;
    leaderboard: LeaderboardType[];
  };
  pagination: PaginationType;
};
