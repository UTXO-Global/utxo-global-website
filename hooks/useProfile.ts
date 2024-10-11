import { selectStorage } from "@/redux/features/storage/reducer";
import { useAppSelector } from "@/redux/hook";
import { ProfileType } from "@/types/profile";
import api from "@/utils/api";
import React, { useEffect } from "react";

export default function useProfile() {
  const [profile, setProfile] = React.useState<ProfileType>({
    user_address: "",
    email: "",
    username: "",
    twitter_url: "",
    ref_code: "",
    points: 0,
  });
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
    if (token && addressLogged) {
      getProfile();
    }
  }, [token, addressLogged]);

  return { profile };
}
