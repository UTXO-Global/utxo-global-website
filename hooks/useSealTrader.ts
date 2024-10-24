import { UTXOSWAP_API_URL } from "@/configs/common";
import usePagination from "@/hooks/usePagination";
import { useAppSelector } from "@/redux/hook";
import { SealTraderResType, SealTraderType } from "@/types/bonus-reward";
import api from "@/utils/api";
import React, { useEffect } from "react";

export default function useSealTrader() {
  const [ranking, setRanking] = React.useState<number | undefined>(0);
  const { addressLogged } = useAppSelector((state) => state.storage);
  const { data, queryConfig, totalData, handleSetData, handlePagination } = usePagination<SealTraderType>({ limit: 5, inititalData: [] });

  // Get SEAL traders
  const getSEALTraders = async () => {
    try {
      const { data } = await api.get<SealTraderResType>("", {
        params: {
          queryType: 0,
        },
        baseURL: UTXOSWAP_API_URL,
      });
      const ranking = data.data.list.find((item) => item.address === addressLogged)?.top;
      setRanking(ranking);
      handleSetData(data.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSEALTraders();
  }, []);

  return { data, ranking, queryConfig, totalData, handlePagination };
}
