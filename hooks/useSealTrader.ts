import { UTXOSWAP_API_URL } from "@/configs/common";
import { useAppSelector } from "@/redux/hook";
import { SealTraderResType, SealTraderType } from "@/types/bonus-reward";
import api from "@/utils/api";
import React, { useEffect, useRef, useState } from "react";

export default function useSealTrader() {
  const [ranking, setRanking] = React.useState<number | undefined>(0);
  const [isFetching, setIsFetching] = React.useState(false);
  const { addressLogged } = useAppSelector((state) => state.storage);
  const initData = useRef<SealTraderType[]>([]);
  const [data, setData] = useState<SealTraderType[]>([]);
  const [queryConfig, setQueryConfig] = useState({
    page: 1,
    limit: 5,
  });
  const [totalData, setTotalData] = useState(0);

  const handlePagination = (page: number, limit: number) => {
    setQueryConfig({ page, limit });
    const start = (page - 1) * limit;
    const end = page * limit;
    setData(initData.current.slice(start, end));
  };

  // Get SEAL traders
  const getSEALTraders = async () => {
    setIsFetching(true);
    try {
      const { data } = await api.get<SealTraderResType>("", {
        params: {
          queryType: 0,
        },
        baseURL: UTXOSWAP_API_URL,
      });
      const ranking = data.data.list.find((item) => item.address === addressLogged)?.top;
      setRanking(ranking);

      // Filter data with netSealBuying > 0
      const dataFilter = data.data.list.filter((item) => parseFloat(item.netSealBuying) > 0);
      initData.current = dataFilter;
      setData(dataFilter.slice(0, queryConfig.limit));

      setTotalData(dataFilter.length);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    // getSEALTraders();
  }, []);

  return { data, ranking, queryConfig, totalData, handlePagination, isFetching };
}
