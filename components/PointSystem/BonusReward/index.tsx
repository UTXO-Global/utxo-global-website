import { Modal, Pagination } from "antd";
import React from "react";
import IcnShieldFirst from "@/public/icons/icn-shield-first.svg";
import IcnShieldSecond from "@/public/icons/icn-shield-second.svg";
import IcnShieldThird from "@/public/icons/icn-shield-third.svg";
import { formatNumber, shortAddress } from "@/utils/helpers";
import { useTranslation } from "next-export-i18n";
import usePagination from "@/hooks/usePagination";
import { pointSystemLeaderboardData } from "@/configs/point-system";

const IconShields = [
  {
    icon: <IcnShieldFirst className="size-6 sm:size-8" />,
    seals: formatNumber(300),
  },
  {
    icon: <IcnShieldSecond className="size-6 sm:size-8" />,
    seals: formatNumber(150),
  },
  {
    icon: <IcnShieldThird className="size-6 sm:size-8" />,
    seals: formatNumber(50),
  },
];

interface BonusRewardProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export default function BonusReward({ isModalOpen, handleOk, handleCancel }: BonusRewardProps) {
  const { t } = useTranslation();
  const { data, queryConfig, handlePagination, totalData } = usePagination({
    limit: 5,
    inititalData: pointSystemLeaderboardData,
  });

  return (
    <Modal open={isModalOpen} centered footer={false} width={1000} onOk={handleOk} onCancel={handleCancel}>
      <div className="md:pt-5 md:px-4">
        <div className="grid gap-4 text-center">
          <div className="text-3xl font-bold">{t("pointSystem.exclusive_rewards")}</div>
          <div>
            <p className="text-orange-100 text-base sm:text-lg font-medium mb-2">{t("pointSystem.duration")}: Oct 21 - Oct 28, 2024</p>
            <p className="text-grey-200 text-base sm:text-xl font-medium">{t("pointSystem.bonus_reward_description")}</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {IconShields.map((shield, i) => (
              <div key={i} className="bg-[#EFEFEF] py-2 md:py-3 gap-1 flex items-center text-sm sm:text-base font-medium px-2 rounded-lg">
                {shield.icon}
                {shield.seals} $SEAL
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-10 hidden md:block -translate-x-1/2 left-1/2 -top-3">
            <div
              className="relative px-10 py-1 min-w-[220px] flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/leaderboard-top.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="z-20 relative font-bold text-xl">
                {t("pointSystem.my_ranking")}:<span className="ml-2">--</span>
              </div>
            </div>
          </div>
          <div className="[&>*:nth-child(even)]:bg-[#FCFCFC] w-full mt-8 bg-[#F5F5F5] mx-auto text-base rounded-lg overflow-hidden">
            <div className="text-base sm:text-xl bg-gradient-to-b from-[#D3D1CE] relative via-[#E0DFDE] to-[#EFEFEF] font-medium px-4 py-4 sm:px-6 flex items-center gap-4">
              <div className="w-[15%]">{t("pointSystem.rank")}</div>
              <div className="sm:w-[65%] w-[55%] text-start">{t("pointSystem.address")}</div>
              <div className="w-[35%] sm:w-[20%] text-end">{t("pointSystem.amount")}</div>
            </div>
            {data.map((user) => {
              return (
                <div className="text-base sm:text-xl px-4 py-2 sm:px-6 flex items-center text-start gap-4" key={user.rank}>
                  {user.rank <= 3 ? (
                    <span className="w-[15%] font-medium pl-1">{IconShields[user.rank - 1].icon}</span>
                  ) : (
                    <span className="w-[15%] font-medium pl-2 sm:pl-3 h-8 flex items-center">{user.rank}</span>
                  )}
                  <div className="w-[65%] truncate hidden sm:block">{shortAddress(user.address, 15)}</div>
                  <div className="w-[50%] truncate block sm:hidden">{shortAddress(user.address, 8)}</div>
                  <div className="w-[35%] sm:w-[20%] text-end font-medium">
                    300
                    <span className="text-grey-200 ml-2">$SEAL</span>
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
              showSizeChanger={false}
              onChange={(page) => handlePagination(page, queryConfig.limit)}
              align="center"
              className="py-6 bg-[#FCFCFC]"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
