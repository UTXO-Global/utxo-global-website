export type QuestType = {
  user_quest_id: number;
  quest_id: string;
  user_address: string;
  process: number;
  is_claimed: boolean;
  completed_at: string;
};

export enum QuestKind {
  LINK = "LINK",
  CLAIM = "CLAIM",
  COMBINATION = "COMBINATION",
}

export type QuestItemComponentType = {
  quest_id: string;
  quest_name: string;
  quest_description: string;
  quest_note: string | null;
  quest_duration: string | null;
  quest_guide_link: string | null;
  is_claimed: boolean;
  reward_points: number | null;
  expired_at: number | null;
  bonus_reward: boolean;
  disabled: boolean;
  quest_link: string | null;
  quest_kind: QuestKind;
};
