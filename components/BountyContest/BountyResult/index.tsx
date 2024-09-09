/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import IcnMedalGold from "@/public/icons/icn-medal-gold.svg";
import IcnMedalSilver from "@/public/icons/icn-medal-silver.svg";
import IcnMedalBronze from "@/public/icons/icn-medal-bronze.svg";
import { Pagination } from "antd";
import { formatNumber } from "@/utils/helpers";
import { useTranslation } from "next-export-i18n";
import useBountyContest from "@/hooks/useBountyContest";

const medals = [
  {
    icon: <IcnMedalGold className="w-[27px] h-[34px]" />,
  },
  {
    icon: <IcnMedalSilver className="w-[27px] h-[34px]" />,
  },
  {
    icon: <IcnMedalBronze className="w-[27px] h-[34px]" />,
  },
];

export default function BountyResult() {
  const { t } = useTranslation();
  const { data, queryConfig, handlePagination, totalData } = useBountyContest({
    limit: 10,
  });

  return (
    <div className="utxo-global-container mt-14">
      <div className="[&>*:nth-child(even)]:bg-[#FCFCFC] bg-[#F5F5F5] max-w-[836px] mx-auto rounded-lg">
        <div className="text-lg sm:text-xl bg-gradient-to-b from-[#D3D1CE] relative via-[#E0DFDE] to-[#EFEFEF] font-bold py-6 px-6 sm:px-16 pt-10 flex items-center">
          <img
            src="/images/bounty-contest-result-badge.svg"
            alt="result badge"
            className="absolute w-auto -translate-y-[100%]  right-0 left-0 mx-auto"
          />
          <div className="w-[20%]">#</div>
          <div className="w-[40%] text-start">
            {t("bountyContest.leaderboard.field_01")}
          </div>
          <div className="w-[40%] text-end">
            {t("bountyContest.leaderboard.field_02")}
          </div>
        </div>
        {data.map((user, i) => {
          return (
            <div
              className="px-6 sm:px-16 py-4 flex items-center font-medium text-start"
              key={user.email}
            >
              {user.rank <= 3 ? (
                <div className="w-[20%]">{medals[user.rank - 1].icon}</div>
              ) : (
                <span className="w-[20%] text-grey-200 pl-2">{user.rank}</span>
              )}
              <div className="w-[50%] truncate">
                <span className="text-xl block">{user.name}</span>
                <span className="mt-1 text-sm font-normal text-grey-200">
                  {user.email}
                </span>
              </div>
              <div className="w-[30%] text-xl text-end">
                {formatNumber(user.points)}
              </div>
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
      <div className="relative mx-auto w-fit max-w-[836px] mt-8">
        <img src="/images/bounty-contest-final.png" alt="final" />
      </div>
    </div>
  );
}
