import { sepolia } from "@starknet-react/chains";
import { publicProvider, InjectedConnector } from "@starknet-react/core";

export const chains = [sepolia];
export const provider = publicProvider();
export const connectors = [
    new InjectedConnector({ options: {id: "braavos", name: "Braavos"}}),
    new InjectedConnector({ options: {id: "argentX", name: "Argent X"}}),
];
