import Button from "@/components/Common/Button";
import React from "react";
import { ccc } from "@ckb-ccc/connector-react";

export default function ConnectButton() {
  const { open } = ccc.useCcc();

  return (
    <Button onClick={open} className="!py-2 md:!py-3">
      Connect Wallet
    </Button>
  );
}
