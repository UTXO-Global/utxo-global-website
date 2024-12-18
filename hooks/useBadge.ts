import { selectStorage } from "@/redux/features/storage/reducer";
import { useAppSelector } from "@/redux/hook";
import { UserBadge, UserBadgeRes } from "@/types/badge";
import api from "@/utils/api";
import { useEffect, useState } from "react";

export default function useBadge() {
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  const { token, addressLogged } = useAppSelector(selectStorage);

  const getUserBadges = async () => {
    try {
      const res = await api.get<UserBadgeRes>("/badges/achieved");
      setUserBadges(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token && addressLogged) {
      getUserBadges();
    } else {
      setUserBadges([]);
    }
  }, [token, addressLogged]);

  return { userBadges };
}
