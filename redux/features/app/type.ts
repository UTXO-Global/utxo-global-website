import { DEFAULT_NETWORK } from "@/configs/common";
import {
  INetworkConfig,
  MAINNET_CONFIG,
  TESTNET_CONFIG,
} from "@/configs/network";

export type AppReducerType = {
  ckbPrice: number;
  config: INetworkConfig;
};

export const defaultAppReducer: AppReducerType = {
  ckbPrice: 0,
  config:
    DEFAULT_NETWORK === "nervos_testnet"
      ? { ...TESTNET_CONFIG }
      : { ...MAINNET_CONFIG },
};
