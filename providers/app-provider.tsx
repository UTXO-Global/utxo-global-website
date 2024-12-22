"use client";

import React, { createContext, useState, useEffect, useCallback } from "react";
import { ccc } from "@ckb-ccc/connector-react";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectStorage } from "@/redux/features/storage/reducer";
import { isAddressEqual } from "@/utils/helpers";
import { reset } from "@/redux/features/storage/action";
import { DEFAULT_NETWORK } from "@/configs/common";
import { CkbNetwork } from "@/types/common";
import { ProfileType } from "@/types/profile";

type AppContextType = {
  address: string;
  profile: ProfileType;
  setProfile: React.Dispatch<React.SetStateAction<ProfileType>>;
};

const defaultValue = {
  address: "",
  profile: {
    user_address: "",
    email: "",
    username: "",
    twitter_url: "",
    ref_code: "",
    points: 0,
  },
  setProfile: () => null,
};

const AppContext = createContext<AppContextType>(defaultValue);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<string>(defaultValue.address);
  const [profile, setProfile] = React.useState<ProfileType>(defaultValue.profile);

  const signer = ccc.useSigner();
  const { setClient } = ccc.useCcc();
  const { addressLogged } = useAppSelector(selectStorage);
  const dispatch = useAppDispatch();

  const checkIsLoggedIn = useCallback(async () => {
    const _getAddress = async () => {
      try {
        const [address] = await (window as any).utxoGlobal.ckbSigner.getAccount();
        return address;
      } catch (e) {
        return "";
      }
    };

    const _address = await _getAddress();
    setAddress(_address);
  }, [signer]);

  useEffect(() => {
    checkIsLoggedIn();
  }, [checkIsLoggedIn]);

  useEffect(() => {
    if (!address && !!addressLogged) {
      setAddress(addressLogged);
      return;
    }
    if (isAddressEqual(address, addressLogged)) return;
    dispatch(reset());
  }, [address, addressLogged, dispatch]);

  useEffect(() => {
    setClient(DEFAULT_NETWORK === CkbNetwork.MiranaMainnet ? new ccc.ClientPublicMainnet() : new ccc.ClientPublicTestnet());
  }, [setClient]);

  return <AppContext.Provider value={{ address, profile, setProfile }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
