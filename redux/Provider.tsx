"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { injectStore, setBaseAPIURL } from "@/utils/api";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  injectStore(store);
  setBaseAPIURL(store.getState().app.config.apiURL);
  return <Provider store={store}>{children}</Provider>;
}
