import useAuthenticate from "@/hooks/useAuthenticate";
import useProfile from "@/hooks/useProfile";
import { SuccessResponse } from "@/types/common";
import { QuestType } from "@/types/quest";
import api from "@/utils/api";
import { sleep } from "@/utils/helpers";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function useQuest() {
  const [userQuests, setUserQuests] = React.useState<QuestType[]>([]);
  const { isLoggedIn } = useAuthenticate();
  const [claimingQuestId, setClaimingQuestId] = React.useState<string | null>(null);
  const { getProfile } = useProfile({
    enable: false,
  });

  const getQuests = async () => {
    try {
      const res = await api.get<SuccessResponse<QuestType[]>>("/quests");
      setUserQuests(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const claimQuest = async (questId: string, delay?: number) => {
    setClaimingQuestId(questId);
    try {
      delay && (await sleep(delay));
      const res = await api.post<{ data: any; message: string }>(`/quests/claim/${questId}`);
      toast.success(res.data.message);
      setClaimingQuestId(null);
      getQuests();
      getProfile();
    } catch (error) {
      console.log(error);
      setClaimingQuestId(null);
      toast.error((error as any).response.data.message);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setUserQuests([]);
      return;
    }
    getQuests();
  }, [isLoggedIn]);

  return { userQuests, claimQuest, claimingQuestId };
}
