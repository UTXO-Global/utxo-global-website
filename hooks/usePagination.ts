import { useState } from "react";

export default function usePagination<DataType>({ limit = 4, inititalData = [] }: { limit?: number; inititalData?: DataType[] }) {
  const [data, setData] = useState(inititalData.slice(0, limit));
  const [queryConfig, setQueryConfig] = useState({
    page: 1,
    limit: limit,
  });
  const [totalData, setTotalData] = useState(inititalData.length);

  const handlePagination = (page: number, limit: number) => {
    setQueryConfig({ page, limit });
    const start = (page - 1) * limit;
    const end = page * limit;
    setData(inititalData.slice(start, end));
  };

  const handleSetData = (data: DataType[]) => {
    setData(data.slice(0, queryConfig.limit));
  };

  return { data, queryConfig, handlePagination, totalData, handleSetData, setTotalData };
}
