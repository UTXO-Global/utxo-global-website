import { createAction } from "@reduxjs/toolkit";
import { CkbNetwork } from "@/types/common";

export const setToken = createAction<string>("storage/set-token");
export const setAddressLogged = createAction<string>(
  "storage/set-address-logged"
);

export const setTokenExpired = createAction<number>(
  "storage/set-token-expired"
);

export const setNetwork = createAction<CkbNetwork>("storage/set-network");

export const setIsDontShowAgainTestnetPopup = createAction<boolean>(
  "storage/set-is-dont-show-again-testnet-popup"
);

export const reset = createAction("storage/reset");
