"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { ccc } from "@ckb-ccc/connector-react";

import useAuthenticate from "./useAuthenticate";
import api from "@/utils/api";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setAddressLogged, setToken, setTokenExpired } from "@/redux/features/storage/action";
import { selectApp } from "@/redux/features/app/reducer";
import { toast } from "react-toastify";
import { AppContext } from "@/providers/app-provider";

const useLogin = () => {
  const [mounted, setMounted] = useState(false);
  const { isLoggedIn } = useAuthenticate();
  const signer = ccc.useSigner();
  const { disconnect } = ccc.useCcc();
  const { config } = useAppSelector(selectApp);
  const { address } = useContext(AppContext);

  const dispatch = useAppDispatch();

  const _getNonce = useCallback(async (address: string) => {
    try {
      const { data } = await api.get(`/users/nonce/${address}`);
      return data.nonce as string;
    } catch (e) {
      disconnect();
      toast.error("Unable to connect to the wallet. Please try again");
    }
    return undefined;
  }, []);

  const _signMessage = useCallback(
    async (nonce: string) => {
      try {
        const sig = await signer?.signMessage(`utxo.global login ${nonce}`);
        return sig?.signature;
      } catch (e) {
        console.error(e);
      }
    },
    [signer]
  );

  const _login = useCallback(
    async (signature: string, address: string) => {
      try {
        const { data } = await api.post("/users/login", {
          signature: signature.replace("0x", ""),
          address,
        });
        dispatch(setToken(data.token));
        dispatch(setTokenExpired(data.expired));
        dispatch(setAddressLogged(address));
      } catch (e) {
        console.error(e);
      }
    },
    [dispatch]
  );

  const login = useCallback(async () => {
    const currentNetwork = await (window as any).utxoGlobal.ckbSigner.getNetwork();
    const isNetworkEqual = currentNetwork === config.network;

    if (!isNetworkEqual) {
      await (window as any).utxoGlobal.ckbSigner.switchNetwork(config.network);
      return login();
    }
    const address = (await signer?.getInternalAddress()) as string;
    if (isLoggedIn) return;

    const nonce = await _getNonce(address);
    if (!nonce) return;

    const signature = (await _signMessage(nonce)) as string;
    if (signature) {
      await _login(signature, address);
    }

    return;
  }, [signer, isLoggedIn, _getNonce, _signMessage, _login]);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (signer && !!signer.getInternalAddress() && mounted) {
      login();
    }
  }, [login, signer, signer?.getInternalAddress, mounted]);
};

export default useLogin;
