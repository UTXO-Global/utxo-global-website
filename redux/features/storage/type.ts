import { DEFAULT_NETWORK } from "@/configs/common";
import { CkbNetwork } from "@/types/common";

export type StorageReducerType = {
  token: string;
  addressLogged: string;
  tokenExpired: number;
  network: CkbNetwork;
};

export const defaultStorageReducer: StorageReducerType = {
  addressLogged: "",
  token: "",
  tokenExpired: 0,
  network: DEFAULT_NETWORK === "nervos" ? CkbNetwork.MiranaMainnet : CkbNetwork.PudgeTestnet,
};
