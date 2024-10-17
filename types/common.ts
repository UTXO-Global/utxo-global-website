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

export enum CkbNetwork {
  PudgeTestnet = "nervos_testnet",
  MiranaMainnet = "nervos",
}

export enum AddressPrefix {
  "Pudge Testnet" = "ckt",
  "Mirana Mainnet" = "ckb",
}

export type PaginationType = {
  page: number;
  limit: number;
  total_records: number;
  total_page: number;
};
