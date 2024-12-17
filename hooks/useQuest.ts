import useAuthenticate from "@/hooks/useAuthenticate";
import useProfile from "@/hooks/useProfile";
import { SuccessResponse } from "@/types/common";
import { QuestType } from "@/types/quest";
import api from "@/utils/api";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function useQuest() {
  const [userQuests, setUserQuests] = React.useState<QuestType[]>([]);
  const { isLoggedIn } = useAuthenticate();
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

  const claimQuest = async (questId: string) => {
    try {
      const res = await api.post<{ data: any; message: string }>(
        `/quests/claim/${questId}`
      );
      toast.success(res.data.message);
      getQuests();
      getProfile();
    } catch (error) {
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

  return { userQuests, claimQuest };
}
