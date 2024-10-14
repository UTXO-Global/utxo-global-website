import React, { useCallback, useState } from "react";
import { formatNumber, shortAddress } from "@/utils/helpers";
import { Pagination } from "antd";
import { lastRewardData, pointSystemLeaderboardData } from "@/configs/point-system";
import usePagination from "@/hooks/usePagination";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useTranslation } from "next-export-i18n";
import IcnRankGold from "@/public/icons/icn-first-rank.svg";
import IcnRankSilver from "@/public/icons/icn-second-rank.svg";
import IcnRankBronze from "@/public/icons/icn-third-rank.svg";
import IcnSeal from "@/public/icons/icn-seal.svg";

const ranks = [
  {
    icon: <IcnRankGold className="size-7 sm:size-8" />,
  },
  {
    icon: <IcnRankSilver className="size-7 sm:size-8" />,
  },
  {
    icon: <IcnRankBronze className="size-7 sm:size-8" />,
  },
];

export default function Leaderboard() {
  const { data, queryConfig, handlePagination, totalData } = usePagination({ limit: 10, inititalData: pointSystemLeaderboardData });
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [slideChange, setSwiperChange] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const { t } = useTranslation();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div>
      <div className="relative">
        <div className="absolute z-10 hidden lg:block -translate-x-1/2 left-1/2 -top-3">
          <div
            className="relative px-24 py-4 flex items-center justify-center"
            style={{
              backgroundImage: "url('/images/leaderboard-top.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="z-20 relative font-bold text-2xl">
              My Ranking:
              <span className="ml-2">--</span>
            </div>
          </div>
        </div>
        <div className="[&>*:nth-child(even)]:bg-[#FCFCFC] bg-[#F5F5F5] mx-auto text-base rounded-lg overflow-hidden">
          <div className="text-base sm:text-xl bg-gradient-to-b from-[#D3D1CE] relative via-[#E0DFDE] to-[#EFEFEF] font-bold py-4 px-4 sm:px-16 sm:pt-10 flex items-center gap-4">
            <div className="w-[15%]">{t("pointSystem.rank")}</div>
            <div className="w-[65%] text-start">{t("pointSystem.address")}</div>
            <div className="w-[20%] text-end">{t("pointSystem.point")}</div>
          </div>
          {data.map((user) => {
            return (
              <div className="px-4 sm:px-16 text-base sm:text-xl py-4 flex items-center text-start gap-4" key={user.rank}>
                <span className="w-[15%] font-medium pl-3">{user.rank}</span>
                <div className="w-[65%] truncate block sm:hidden">{shortAddress(user.address, 10)}</div>
                <div className="w-[65%] truncate hidden sm:block">{shortAddress(user.address, 20)}</div>
                <div className="w-[20%] text-end font-medium">{formatNumber(user.points)}</div>
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
      <div className="mt-4 sm:mt-6 bg-[#FAFAFA] rounded-lg p-4 md:p-10">
        <h2 className="text-2xl lg:text-3xl font-bold">{t("pointSystem.last_reward")}</h2>
        <div className="mt-4 sm:mt-6 relative">
          <Swiper
            onSwiper={setSwiperRef}
            onSlideChange={(swiper) => {
              setSwiperChange({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd,
              });
            }}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              900: {
                slidesPerView: 2,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
            direction="horizontal"
            modules={[Navigation]}
          >
            {lastRewardData.map((lastReward, i) => (
              <SwiperSlide key={lastReward.address}>
                <div className="flex flex-col flex-1 h-full flex-grow">
                  <div className="p-4 bg-white rounded-lg flex items-start gap-4">
                    <div className="rounded-full bg-grey-100 p-2">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 4.25C11.0054 4.25 10.0516 4.64509 9.34835 5.34835C8.64509 6.05161 8.25 7.00544 8.25 8C8.25 8.99456 8.64509 9.94839 9.34835 10.6517C10.0516 11.3549 11.0054 11.75 12 11.75C12.9946 11.75 13.9484 11.3549 14.6517 10.6517C15.3549 9.94839 15.75 8.99456 15.75 8C15.75 7.00544 15.3549 6.05161 14.6517 5.34835C13.9484 4.64509 12.9946 4.25 12 4.25ZM8 13.75C7.00544 13.75 6.05161 14.1451 5.34835 14.8483C4.64509 15.5516 4.25 16.5054 4.25 17.5V18.688C4.25 19.442 4.796 20.084 5.54 20.205C9.818 20.904 14.182 20.904 18.46 20.205C18.8198 20.1458 19.147 19.9608 19.3832 19.6831C19.6194 19.4053 19.7494 19.0527 19.75 18.688V17.5C19.75 16.5054 19.3549 15.5516 18.6517 14.8483C17.9484 14.1451 16.9946 13.75 16 13.75H15.66C15.4733 13.7507 15.292 13.7793 15.116 13.836L14.25 14.119C12.788 14.5963 11.212 14.5963 9.75 14.119L8.884 13.836C8.70847 13.7797 8.52534 13.7507 8.341 13.75H8Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h3 className="text-base font-medium truncate">{shortAddress(lastReward.address, 10)}</h3>
                      <p className="text-grey-200 text-sm">{lastReward.date}</p>
                      <div className="flex flex-wrap items-center mt-1 justify-between gap-1">
                        <span>{t("pointSystem.received_rewards")}:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{formatNumber(lastReward.rewards)}</span>
                          <img src="/icons/icn-nervos.svg" alt="utxo-nervos" className="size-7 sm:size-8" />
                          {lastReward.rank <= 3 ? ranks[lastReward.rank - 1].icon : <IcnSeal className="size-7 sm:size-8" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {!slideChange?.isBeginning && (
            <button
              onClick={handlePrevious}
              className="ds absolute top-1/2 z-20 -translate-y-[50%] -left-5 bg-white shadow-lg rounded-full p-2 after:content-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}
          {!slideChange?.isEnd && (
            <button
              onClick={handleNext}
              className="fs absolute top-1/2 z-10 -translate-y-[50%] -right-5 bg-white shadow-lg rounded-full p-2 after:content-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
