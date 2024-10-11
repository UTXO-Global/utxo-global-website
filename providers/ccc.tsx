"use client";

import { ccc } from "@ckb-ccc/connector-react";

const CCCProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ccc.Provider
      signerFilter={async (signerInfo, wallet) => {
        return ["UTXO Global Wallet"].includes(wallet.name) && signerInfo.name === "CKB";
      }}
    >
      {children}
    </ccc.Provider>
  );
};

export default CCCProvider;
