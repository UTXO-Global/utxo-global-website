export type QuestType = {
  can_repeat: boolean;
  end_at: string | null;
  is_active: boolean;
  is_claimed: boolean;
  milestone: number;
  process: number;
  quest_description: string;
  quest_id: string;
  quest_name: string;
  reward_points: number;
  start_at: string | null;
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
