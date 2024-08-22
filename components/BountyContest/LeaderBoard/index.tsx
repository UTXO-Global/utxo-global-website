"use client";

import React, { useState } from "react";
import bountyContestBanner01 from "@/public/images/bounty-contest-banner-01.png";
import IcnReward from "@/public/icons/icn-reward.svg";
import { Pagination } from "antd";
import { formatNumber } from "@/utils/helpers";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

export default function LeaderBoard() {
  const [currentPage, setCurrentPage] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="grid gap-6">
      <div className="rounded-t-lg overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-b text-center from-[#D3D1CE] via-[#E0DFDE] to-[#EFEFEF]">
          <div className="flex justify-center gap-2">
            <IcnReward className="h-8 w-[25px]" />
            <h2 className="text-dark-100 text-2xl text-center font-bold uppercase">{t("bountyContest.leaderboard.title")}</h2>
            <IcnReward className="h-8 w-[25px]" />
          </div>
          <p className="mt-2">{t("bountyContest.leaderboard.description")}</p>
        </div>
        {/* <div className="p-6 bg-[#FCFCFC] min-h-[200px] flex items-center">
            <p className="text-grey-200 mx-auto">Data has not been updated.</p>
        </div> */}
        <div className="[&>*:nth-child(even)]:bg-[#FCFCFC] bg-[#F5F5F5]">
          <div className="text-lg sm:text-xl font-bold p-6 flex items-center">
            <div className="w-[20%]">#</div>
            <div className="w-[40%] text-start">{t("bountyContest.leaderboard.field_01")}</div>
            <div className="w-[40%] text-end">{t("bountyContest.leaderboard.field_02")}</div>
          </div>
          {Array(4)
            .fill(0)
            .map((_, i) => {
              return (
                <div className="px-6 py-4 flex items-center font-medium text-start" key={i}>
                  <span className="w-[20%] text-grey-200">{i + 1}</span>
                  <div className="w-[50%] truncate">
                    <span className="text-xl block">John</span>
                    <span className="mt-1 text-sm font-normal text-grey-200">jo******@gmail.com</span>
                  </div>
                  <div className="w-[30%] text-xl text-end">{formatNumber(1200)}</div>
                </div>
              );
            })}
          <Pagination
            responsive={true}
            current={currentPage + 1}
            defaultCurrent={1}
            total={35}
            size="default"
            showSizeChanger={false}
            onChange={(page) => setCurrentPage(page - 1)}
            defaultPageSize={4}
            align="center"
            className="py-6"
          />
        </div>
      </div>
      <Image src={bountyContestBanner01} alt="banner" width={1080} height={1080} className="mx-auto w-[490px]" />
    </div>
  );
}
