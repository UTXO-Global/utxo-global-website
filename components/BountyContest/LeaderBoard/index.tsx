/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import IcnReward from "@/public/icons/icn-reward.svg";
import { Pagination } from "antd";
import { formatNumber } from "@/utils/helpers";
import { useTranslation } from "next-export-i18n";
import useBountyContest from "@/hooks/useBountyContest";

export default function LeaderBoard() {
  const { t } = useTranslation();
  const { data, queryConfig, handlePagination, totalData } = useBountyContest({ limit: 4 });

  return (
    <div className="grid gap-6">
      <div className="rounded-t-lg overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-b text-center from-[#D3D1CE] via-[#E0DFDE] to-[#EFEFEF]">
          <div className="flex justify-center gap-2">
            <IcnReward className="h-8 w-[25px]" />
            <h2 className="text-dark-100 text-2xl text-center font-bold uppercase">
              {t("bountyContest.leaderboard.title")}
            </h2>
            <IcnReward className="h-8 w-[25px]" />
          </div>
          <p className="mt-2">{t("bountyContest.leaderboard.description")}</p>
        </div>
        {/* <div className="p-6 bg-[#FCFCFC] min-h-[200px] flex items-center">
          <p className="text-grey-200 mx-auto">{t("bountyContest.leaderboard.no_data")}</p>
        </div> */}
        <div className="[&>*:nth-child(even)]:bg-[#FCFCFC] bg-[#F5F5F5]">
          <div className="text-lg sm:text-xl font-bold p-6 flex items-center">
            <div className="w-[10%]">#</div>
            <div className="w-[50%] text-start">{t("bountyContest.leaderboard.field_01")}</div>
            <div className="w-[40%] text-end">{t("bountyContest.leaderboard.field_02")}</div>
          </div>
          {data.map((user, i) => {
            return (
              <div className="px-6 py-4 flex items-center font-medium text-start" key={i}>
                <span className="w-[10%] text-grey-200">{user.rank}</span>
                <div className="w-[50%] truncate">
                  <span className="text-xl block">{user.name}</span>
                  <span className="mt-1 text-sm font-normal text-grey-200">{user.email}</span>
                </div>
                <div className="w-[40%] text-xl text-end">{formatNumber(user.points)}</div>
              </div>
            );
          })}
          <Pagination
            responsive={true}
            current={queryConfig.page}
            defaultCurrent={queryConfig.page}
            total={totalData}
            pageSize={queryConfig.limit}
            size="default"
            showSizeChanger={false}
            onChange={(page) => handlePagination(page, queryConfig.limit)}
            align="center"
            className="py-6"
          />
        </div>
      </div>
      <img src="/images/bounty-contest-reward.png" alt="reward" className="mx-auto w-auto" />
    </div>
  );
}
