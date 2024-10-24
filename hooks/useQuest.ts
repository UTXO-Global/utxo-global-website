import useAuthenticate from "@/hooks/useAuthenticate";
import { SuccessResponse } from "@/types/common";
import { QuestType } from "@/types/quest";
import api from "@/utils/api";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function useQuest() {
  const [quests, setQuests] = React.useState<QuestType[]>([]);
  const { isLoggedIn } = useAuthenticate();
  const router = useRouter();

  const getQuests = async () => {
    try {
      const res = await api.get<SuccessResponse<QuestType[]>>("/quests");
      setQuests(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const claimQuest = async (questId: string) => {
    try {
      const res = await api.post<{ data: any; message: string }>(`/quests/${questId}`);
      toast.success(res.data.message);
      router.refresh();
    } catch (error) {
      toast.error((error as any).response.data.message);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setQuests([]);
      return;
    }
    getQuests();
  }, [isLoggedIn]);

  return { quests, claimQuest };
}
