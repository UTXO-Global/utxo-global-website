export type SealTraderType = {
  address: string;
  netSealBuying: string;
  top: number;
};

export type SealTraderResType = {
  data: {
    list: SealTraderType[];
    total: number;
  };
  message: string;
};
