import { AppContext } from "@/providers/app-provider";
import { selectStorage } from "@/redux/features/storage/reducer";
import { useAppSelector } from "@/redux/hook";
import { ProfileType } from "@/types/profile";
import api from "@/utils/api";
import { useContext, useEffect } from "react";

interface UseProfileProps {
  enable: boolean;
}

export default function useProfile(props?: UseProfileProps) {
  const enable = props?.enable ?? true;
  const { setProfile } = useContext(AppContext);
  const { token, addressLogged } = useAppSelector(selectStorage);

  const getProfile = async () => {
    try {
      const { data } = await api.get<ProfileType>(`/users/profile`);
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token && addressLogged && enable) {
      getProfile();
    }
  }, [token, addressLogged]);

  return { getProfile };
}
