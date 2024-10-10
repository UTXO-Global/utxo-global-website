export const NETWORK_NAME: { [key: string]: string } = {
  nervos_testnet: "Pudge Testnet",
  nervos: "Mirana Mainnet",
};

export const SHORT_NETWORK_NAME: { [key: string]: string } = {
  nervos_testnet: "Pud",
  nervos: "Mir",
};

export interface INetworkConfig {
  network: string;
  apiURL: string;
  explorer: string;
  explorerAPI: string;
  ckbRPC: string;
  isTestnet?: boolean;
}

export const TESTNET_CONFIG: INetworkConfig = {
  network: "nervos_testnet",
  apiURL: "https://staging-apix-720a.utxo.global/",
  explorer: "https://pudge.explorer.nervos.org/en",
  explorerAPI: "https://testnet-api.explorer.nervos.org",
  ckbRPC: "https://testnet.ckb.dev/rpc",
  isTestnet: true,
};

export const MAINNET_CONFIG: INetworkConfig = {
  network: "nervos",
  apiURL: "https://apix.utxo.global/",
  explorer: "https://explorer.nervos.org/en",
  explorerAPI: "https://mainnet-api.explorer.nervos.org",
  ckbRPC: "https://mainnet.ckb.dev/rpc",
};
