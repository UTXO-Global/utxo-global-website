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
