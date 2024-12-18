import { SuccessResponse } from "@/types/common";

export type UserBadge = {
  user_address: string;
  badge_id: string;
  badge_name: string;
  badge_type: string;
  badge_icon: string;
  achieved_at: string;
};

export type UserBadgeRes = SuccessResponse<UserBadge[]>;
