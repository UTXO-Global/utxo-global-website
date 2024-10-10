import { CkbNetwork } from "@/types/common";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { time } from "console";

const getPriceFromCachhe = () => {
  try {
    const priceCache = localStorage.getItem("CKB_PRICE");
    if (!!priceCache) {
      const price = JSON.parse(priceCache);
      const expired = Number(price.expired) || 0;
      if (expired < new Date().getTime()) {
        return Number(price.priceUsd);
      }
    }
  } catch (e) {
    return undefined;
  }

  return undefined;
};
export const loadCkbPrice = createAsyncThunk("app/load-ckb-price", async () => {
  try {
    const priceFromCache = getPriceFromCachhe();
    if (!!priceFromCache) {
      return priceFromCache;
    }

    const res = await fetch(`https://api.coincap.io/v2/assets/nervos-network`);
    const data = await res.json();
    localStorage.setItem(
      "CKB_PRICE",
      JSON.stringify({
        expired: new Date().getTime() + 60000,
        priceUsd: data.data.priceUsd,
      })
    );
    return data.data.priceUsd;
  } catch (e) {
    console.error(e);
    return 0;
  }
});

export const setNetworkConfig = createAction<CkbNetwork>(
  "app/set-network-config"
);
