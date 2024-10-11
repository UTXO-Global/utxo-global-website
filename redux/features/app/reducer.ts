import { createReducer } from "@reduxjs/toolkit";

import { RootState } from "@/redux/store";

import { loadCkbPrice, setNetworkConfig } from "./action";
import { defaultAppReducer } from "./type";
import { MAINNET_CONFIG, TESTNET_CONFIG } from "@/configs/network";
import { CkbNetwork } from "@/types/common";
import { setBaseAPIURL } from "@/utils/api";

const appReducer = createReducer(defaultAppReducer, (builder) => {
  builder
    // load ckb price
    .addCase(loadCkbPrice.fulfilled, (state, action) => {
      state.ckbPrice = action.payload;
    })
    .addCase(setNetworkConfig, (state, action) => {
      const cnf = action.payload === CkbNetwork.MiranaMainnet ? MAINNET_CONFIG : TESTNET_CONFIG;
      state.config = cnf;
      setBaseAPIURL(cnf.apiURL);
    });
});

export const selectApp = (state: RootState) => state.app;

export default appReducer;
