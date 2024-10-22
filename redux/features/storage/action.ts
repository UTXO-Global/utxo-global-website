import { createAction } from "@reduxjs/toolkit";

export const setToken = createAction<string>("storage/set-token");

export const setAddressLogged = createAction<string>("storage/set-address-logged");

export const setTokenExpired = createAction<number>("storage/set-token-expired");

export const reset = createAction("storage/reset");
