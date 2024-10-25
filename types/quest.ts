export type QuestType = {
  user_quest_id: number;
  quest_id: string;
  user_address: string;
  process: number;
  is_claimed: boolean;
  completed_at: string;
};

export type QuestItemComponentType = {
  quest_id: string;
  quest_name: string;
  quest_description: string;
  reward_points: number;
  guideLink: string;
  is_claimed: boolean;
  quest_number: number;
};