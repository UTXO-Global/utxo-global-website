"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { injectStore } from "@/utils/api";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  injectStore(store);
  return <Provider store={store}>{children}</Provider>;
}
