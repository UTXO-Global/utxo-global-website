"use client";

import React, { createContext, useState, useEffect, useCallback } from "react";
import { ccc } from "@ckb-ccc/connector-react";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectStorage } from "@/redux/features/storage/reducer";

import { isAddressEqual } from "@/utils/helpers";
import { reset, setNetwork } from "@/redux/features/storage/action";
import { setNetworkConfig } from "@/redux/features/app/action";
import { DEFAULT_NETWORK } from "@/configs/common";
import { CkbNetwork } from "@/types/common";

const defaultValue = {
  address: "",
};

const AppContext = createContext(defaultValue);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<string>("");

  const signer = ccc.useSigner();
  const { setClient } = ccc.useCcc();
  const { addressLogged, network } = useAppSelector(selectStorage);
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
    let _network = network;
    if (!network) {
      _network = DEFAULT_NETWORK === CkbNetwork.MiranaMainnet ? CkbNetwork.MiranaMainnet : CkbNetwork.PudgeTestnet;
    }

    dispatch(setNetwork(_network));
    dispatch(setNetworkConfig(_network));

    setClient(_network === CkbNetwork.MiranaMainnet ? new ccc.ClientPublicMainnet() : new ccc.ClientPublicTestnet());
  }, [network, setClient]);

  return <AppContext.Provider value={{ address }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
