import Button from "@/components/Common/Button";
import React from "react";
import { ccc } from "@ckb-ccc/connector-react";

interface ConnectButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ConnectButton({ children = "Connect Wallet", className }: ConnectButtonProps) {
  const { open } = ccc.useCcc();

  return (
    <Button onClick={open} className={className}>
      {children}
    </Button>
  );
}
