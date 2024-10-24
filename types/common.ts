export enum BountyContestStage {
  Prepare = 1,
  InProgress = 2,
  Ended = 3,
}

export type BountyContestLeaderboardItemType = {
  rank: number;
  name: string;
  email: string;
  points: number;
};

export type PaginationType = {
  page: number;
  limit: number;
  total_records: number;
  total_page: number;
};

export enum CkbNetwork {
  PudgeTestnet = "nervos_testnet",
  MiranaMainnet = "nervos",
}

export enum PointSystemTab {
  Quest = "quest",
  LeaderBoard = "leaderboard",
}

export type SuccessResponse<T> = {
  message: string;
  data: T;
};
