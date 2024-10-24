import { Modal, Pagination } from "antd";
import React from "react";
import IcnShieldFirst from "@/public/icons/icn-shield-first.svg";
import IcnShieldSecond from "@/public/icons/icn-shield-second.svg";
import IcnShieldThird from "@/public/icons/icn-shield-third.svg";
import { formatNumber, shortAddress } from "@/utils/helpers";
import { useTranslation } from "next-export-i18n";
import usePagination from "@/hooks/usePagination";
import { pointSystemLeaderboardData } from "@/configs/point-system";
import useSealTrader from "@/hooks/useSealTrader";

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
  const { data: sealTraders, ranking, queryConfig, totalData, handlePagination } = useSealTrader();

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
                {t("pointSystem.my_ranking")}:{ranking ? <span className="ml-2">{ranking}</span> : <span className="ml-2">--</span>}
              </div>
            </div>
          </div>
          <div className="[&>*:nth-child(even)]:bg-[#FCFCFC] w-full mt-6 md:mt-8 bg-[#F5F5F5] mx-auto text-base rounded-lg overflow-hidden">
            <div className="text-base sm:text-xl bg-gradient-to-b from-[#D3D1CE] relative via-[#E0DFDE] to-[#EFEFEF] font-medium px-4 py-4 sm:pr-6 sm:pl-2 lg:pl-0 flex items-center gap-4">
              <div className="w-[20%] text-center">{t("pointSystem.rank")}</div>
              <div className="w-full text-start">{t("pointSystem.address")}</div>
              <div className="w-[45%] whitespace-nowrap text-end">{t("pointSystem.amount")} ($SEAL)</div>
            </div>
            {sealTraders.map((user) => {
              return (
                <div className="text-sm sm:text-xl px-4 py-2 sm:pr-6 sm:pl-2 lg:pl-0 flex items-center text-start gap-4" key={user.address}>
                  {user.top <= 3 ? (
                    <div className="w-[20%] font-medium min-h-8 flex items-center justify-center">{IconShields[user.top - 1].icon}</div>
                  ) : (
                    <div className="w-[20%] font-medium h-8 flex items-center justify-center">{user.top}</div>
                  )}
                  <div className="w-full truncate hidden sm:block">{shortAddress(user.address, 15)}</div>
                  <div className="w-full truncate block sm:hidden">{shortAddress(user.address, 5)}</div>
                  <div className="w-[45%] whitespace-nowrap text-end font-medium">
                    {formatNumber(Number(user.netSealBuying), 0, 5)}
                    {/* <span className="text-grey-200 ml-2">$SEAL</span> */}
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
