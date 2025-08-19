import React from "react";
import { StarknetConfig } from "@starknet-react/core";
import { chains, connectors, provider } from "../lib/constants";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  return (
    <StarknetConfig
      chains={chains}
      provider={provider}
      connectors={connectors}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
