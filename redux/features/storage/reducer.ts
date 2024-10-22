import { createReducer } from "@reduxjs/toolkit";

import { RootState } from "@/redux/store";

import { reset, setAddressLogged, setToken, setTokenExpired } from "./action";
import { defaultStorageReducer } from "./type";

const storageReducer = createReducer(defaultStorageReducer, (builder) => {
  builder
    .addCase(setToken, (state, action) => {
      state.token = action.payload;
    })
    .addCase(setAddressLogged, (state, action) => {
      state.addressLogged = action.payload;
    })
    .addCase(setTokenExpired, (state, action) => {
      state.tokenExpired = action.payload;
    })
    .addCase(reset, (state) => {
      state.token = "";
      state.addressLogged = "";
    });
});

export const selectStorage = (state: RootState) => state.storage;

export default storageReducer;
