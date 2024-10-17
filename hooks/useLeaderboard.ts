import { selectStorage } from "@/redux/features/storage/reducer";
import { useAppSelector } from "@/redux/hook";
import { PaginationType } from "@/types/common";
import { LeaderboardResType, LeaderboardType } from "@/types/leaderboard";
import api from "@/utils/api";
import React, { useCallback, useEffect } from "react";

export default function useLeaderboard() {
  const [leaderboard, setLeaderboard] = React.useState<LeaderboardType[]>([]);
  const [ranking, setRanking] = React.useState<number | null>(null);
  const { token, addressLogged } = useAppSelector(selectStorage);
  const [isFetching, setIsFetching] = React.useState(false);
  const [pagination, setPagination] = React.useState<PaginationType>({
    page: 1,
    limit: 10,
    total_page: 1,
    total_records: 0,
  });

  const getLeaderboard = async (page: number) => {
    try {
      setIsFetching(true);
      const { data } = await api.get<LeaderboardResType>(`/users/leaderboard?page=${page}`);
      setLeaderboard(data.data.leaderboard);
      setRanking(data.data.ranking);
      setPagination(data.pagination);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleChangePage = useCallback(
    (page: number) => {
      setPagination({ ...pagination, page });
      getLeaderboard(page);
    },
    [pagination]
  );

  useEffect(() => {
    if (token && addressLogged) {
      getLeaderboard(pagination.page);
    }
  }, [token, addressLogged]);

  return { leaderboard, ranking, handleChangePage, pagination, isFetching };
}
