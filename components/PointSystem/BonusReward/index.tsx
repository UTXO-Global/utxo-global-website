/* eslint-disable @next/next/no-img-element */
import { Modal, Pagination } from "antd";
import React from "react";
import IcnShieldFirst from "@/public/icons/icn-shield-first.svg";
import IcnShieldSecond from "@/public/icons/icn-shield-second.svg";
import IcnShieldThird from "@/public/icons/icn-shield-third.svg";
import { formatNumber, shortAddress } from "@/utils/helpers";
import { useTranslation } from "next-export-i18n";
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
  questId?: string;
}

export default function BonusReward({
  isModalOpen,
  handleOk,
  handleCancel,
  questId,
}: BonusRewardProps) {
  const { t } = useTranslation();
  const {
    data: sealTraders,
    ranking,
    queryConfig,
    totalData,
    handlePagination,
    isFetching,
  } = useSealTrader();

  return (
    <Modal
      open={isModalOpen}
      centered
      footer={false}
      width={1000}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {!["ckcon-quest", "did-galxe-quest"].includes(questId!) && (
        <div className="md:pt-5 md:px-4">
          <div className="grid gap-4 text-center">
            <div className="text-3xl font-bold">
              {t("pointSystem.exclusive_rewards")}
            </div>
            <div>
              <p className="text-orange-100 text-base items-center sm:text-lg flex gap-1 flex-wrap justify-center font-medium mb-2">
                {t("pointSystem.duration")}: <span>Oct 30, 7:00PM UTC+8</span> -{" "}
                <span>Nov 4, 7:00PM UTC+8</span>
              </p>
              <p className="text-grey-200 text-base sm:text-xl font-medium">
                {t("pointSystem.bonus_reward_description")}
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {IconShields.map((shield, i) => (
                <div
                  key={i}
                  className="bg-[#EFEFEF] py-2 md:py-3 gap-1 flex items-center text-sm sm:text-base font-medium px-2 rounded-lg"
                >
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
                  {t("pointSystem.my_ranking")}:
                  {ranking ? (
                    <span className="ml-2">{ranking}</span>
                  ) : (
                    <span className="ml-2">--</span>
                  )}
                </div>
              </div>
            </div>
            <div className="[&>*:nth-child(even)]:bg-[#FCFCFC] w-full mt-6 md:mt-8 bg-[#F5F5F5] mx-auto text-base rounded-lg overflow-hidden">
              <div className="text-base sm:text-xl bg-gradient-to-b from-[#D3D1CE] relative via-[#E0DFDE] to-[#EFEFEF] font-medium px-4 py-4 sm:pr-6 sm:pl-2 lg:pl-0 flex items-center gap-4">
                <div className="w-[20%] text-center">
                  {t("pointSystem.rank")}
                </div>
                <div className="w-full text-start">
                  {t("pointSystem.address")}
                </div>
                <div className="w-[45%] whitespace-nowrap text-end">
                  {t("pointSystem.amount")} ($SEAL)
                </div>
              </div>
              {isFetching ? (
                <div className="bg-[#F5F5F5] flex items-center justify-center h-[200px]">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-dark-100"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <>
                  {sealTraders.length > 0 ? (
                    sealTraders.map((user) => {
                      return (
                        <div
                          className="text-sm sm:text-xl px-4 py-2 sm:pr-6 sm:pl-2 lg:pl-0 flex items-center text-start gap-4"
                          key={user.address}
                        >
                          {user.top <= 3 ? (
                            <div className="w-[20%] font-medium min-h-8 flex items-center justify-center">
                              {IconShields[user.top - 1].icon}
                            </div>
                          ) : (
                            <div className="w-[20%] font-medium h-8 flex items-center justify-center">
                              {user.top}
                            </div>
                          )}
                          <div className="w-full truncate hidden sm:block">
                            {shortAddress(user.address, 15)}
                          </div>
                          <div className="w-full truncate block sm:hidden">
                            {shortAddress(user.address, 5)}
                          </div>
                          <div className="w-[45%] whitespace-nowrap text-end font-medium">
                            {formatNumber(Number(user.netSealBuying), 0, 5)}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="font-medium text-lg h-[150px] flex items-center justify-center !bg-[#FCFCFC]">
                      No data available!
                    </div>
                  )}
                </>
              )}

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
      )}
      {questId === "did-galxe-quest" && (
        <div className="md:pt-5 md:px-4">
          <div className="grid gap-4">
            <div className="text-3xl font-bold">
              {t("pointSystem.exclusive_rewards")} 🎉
            </div>
            <p className="text-grey-200 text-[16px] sm:text-xl font-medium">
              <div className="flex flex-col gap-1">
                <span>{t("pointSystem.did_galxe_quest_step_1")}</span>
                <span>{t("pointSystem.did_galxe_quest_step_2")}</span>
                <span>{t("pointSystem.did_galxe_quest_step_3")}</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("pointSystem.did_galxe_quest_step_4"),
                  }}
                />
              </div>
            </p>
            <div className="">
              <img src="/images/did-galaxy-bonus-gems.png" alt="bonusReward" />
            </div>
          </div>
        </div>
      )}
      {questId === "ckcon-quest" && (
        <div className="md:pt-5 md:px-4">
          <div className="grid gap-4">
            <div className="text-3xl font-bold">
              {t("pointSystem.exclusive_rewards_ckcon")} 🎉
            </div>
            <p className="text-grey-200 text-[16px] sm:text-xl font-medium">
              <span className="font-bold text-dark-100">
                {t("pointSystem.how_to_enter_title")}
              </span>
              <br />
              <span>{t("pointSystem.how_to_enter_step_1")}</span>
              <br />
              <span>{t("pointSystem.how_to_enter_step_2")}</span>
            </p>
            <div className="">
              <img src="/images/ckcon-bonus-gems.png" alt="bonusReward" />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
