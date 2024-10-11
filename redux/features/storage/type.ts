import { CkbNetwork } from "@/types/common";

export type StorageReducerType = {
  token: string;
  addressLogged: string;
  tokenExpired: number;
  network: CkbNetwork;
  isDontShowAgainTestnetPopup: boolean;
};

export const defaultStorageReducer: StorageReducerType = {
  addressLogged: "",
  token: "",
  tokenExpired: 0,
  network: CkbNetwork.PudgeTestnet,
  isDontShowAgainTestnetPopup: false,
};
