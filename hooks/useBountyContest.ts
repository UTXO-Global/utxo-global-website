import { leaderboardData } from "@/configs/bug-report";
import { useState } from "react";

export default function useBountyContest({ limit = 4 }: { limit?: number }) {
  const [data, setData] = useState(leaderboardData.slice(0, limit));
  const [queryConfig, setQueryConfig] = useState({
    page: 1,
    limit: limit,
  });
  const totalData = leaderboardData.length;

  const handlePagination = (page: number, limit: number) => {
    setQueryConfig({ page, limit });
    const start = (page - 1) * limit;
    const end = page * limit;
    setData(leaderboardData.slice(start, end));
  };

  return { data, queryConfig, handlePagination, totalData };
}
