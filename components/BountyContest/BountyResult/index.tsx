/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import IcnMedalGold from "@/public/icons/icn-medal-gold.svg";
import IcnMedalSilver from "@/public/icons/icn-medal-silver.svg";
import IcnMedalBronze from "@/public/icons/icn-medal-bronze.svg";
import { Modal, Pagination } from "antd";
import { formatNumber } from "@/utils/helpers";
import Button from "@/components/Common/Button";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const { data, queryConfig, handlePagination, totalData } = useBountyContest({ limit: 10 });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          <div className="w-[40%] text-start">{t("bountyContest.leaderboard.field_01")}</div>
          <div className="w-[40%] text-end">{t("bountyContest.leaderboard.field_02")}</div>
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
                <span className="mt-1 text-sm font-normal text-grey-200">{user.email}</span>
              </div>
              <div className="w-[30%] text-xl text-end">{formatNumber(user.points)}</div>
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
        <div className="absolute top-[60%] right-[8%] sm:right-[12%] -translate-y-1/2 text-center">
          <h2 className="text-sm sm:text-base md:text-2xl font-medium text-white">
            {t("bountyContest.claimRewardTitle")}?
          </h2>
          <Button
            kind="light"
            size="small"
            className="!text-sm sm:!text-base border-none !font-bold md:px-6 md:py-[11px] bg-gradient-to-br md:w-[200px] from-light-yellow-200 mt-4 via-light-yellow-300 to-light-yellow-100"
            onClick={() => showModal()}
          >
            {t("bountyContest.watchNow")}
          </Button>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        destroyOnClose
        footer={false}
        className="bg-transparent p-0"
        zIndex={9999}
      >
        <div className="text-center">
          <h2 className="text-xl font-bold text-center">How To Claim Reward</h2>
          <div className="mt-8">
            <div className="relative w-full max-w-[353px] mx-auto flex-grow h-[400px] overflow-hidden pt-[56.25%]">
              <iframe
                src=""
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                width="353"
                height="600"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <Button kind="primary" className="min-w-[225px] mt-4" onClick={() => handleCancel()}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
