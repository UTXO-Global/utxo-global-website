import React, { useCallback, useContext, useState } from "react";
import { formatNumber, shortAddress } from "@/utils/helpers";
import { Pagination } from "antd";
import { lastRewardData } from "@/configs/point-system";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useTranslation } from "next-export-i18n";
import ConnectButton from "@/components/ConnectButton";
import useAuthenticate from "@/hooks/useAuthenticate";
import useLeaderboard from "@/hooks/useLeaderboard";
import { useAppSelector } from "@/redux/hook";
import { AppContext } from "@/providers/app-provider";

export default function Leaderboard() {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const { profile } = useContext(AppContext);
  const [slideChange, setSwiperChange] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const { t } = useTranslation();
  const { isLoggedIn } = useAuthenticate();
  const { addressLogged } = useAppSelector((state) => state.storage);
  const { leaderboard, ranking, handleChangePage, pagination, isFetching } = useLeaderboard();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div>
      {isLoggedIn ? (
        <div className="relative">
          <div className="[&>*:nth-child(even)]:bg-[#FCFCFC] bg-[#F5F5F5] mx-auto text-base rounded-lg overflow-hidden">
            <div className="text-base sm:text-xl bg-gradient-to-b from-[#D3D1CE] relative via-[#E0DFDE] to-[#EFEFEF] font-bold py-4 px-4 sm:pr-10 lg:pr-16 sm:pt-10 flex items-center gap-4 sm:gap-6">
              <div className="w-[20%] text-center">{t("pointSystem.rank")}</div>
              <div className="w-full text-start">{t("pointSystem.address")}</div>
              <div className="w-[20%] text-end">{t("pointSystem.point")}</div>
            </div>
            {isFetching ? (
              <div className="bg-[#F5F5F5] flex items-center justify-center h-[200px] md:h-[400px]">
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
                <div className="px-4 sm:pr-10 lg:pr-16 text-base !bg-orange-100 text-white sm:text-xl sm:leading-9 py-4 flex items-center text-start gap-4 sm:gap-6">
                  <div className="w-[20%] text-center font-medium">{ranking}</div>
                  <div className="w-full truncate block md:hidden">{shortAddress(addressLogged, 10)}</div>
                  <div className="w-full truncate hidden md:block lg:hidden">{shortAddress(addressLogged, 15)}</div>
                  <div className="w-full truncate hidden lg:block">{shortAddress(addressLogged, 20)}</div>
                  <div className="w-[20%] text-end font-medium">{formatNumber(profile.points)}</div>
                </div>
                {leaderboard.map((user) => {
                  if (user.user_address === addressLogged) return null;
                  return (
                    <div
                      className="px-4 sm:pr-10 lg:pr-16 text-base sm:text-xl sm:leading-9 py-4 flex items-center text-start gap-4 sm:gap-6"
                      key={user.user_address}
                    >
                      <div className="w-[20%] text-center font-medium">{user.rank}</div>
                      <div className="w-full truncate block md:hidden">{shortAddress(user.user_address, 10)}</div>
                      <div className="w-full truncate hidden md:block lg:hidden">{shortAddress(user.user_address, 15)}</div>
                      <div className="w-full truncate hidden lg:block">{shortAddress(user.user_address, 20)}</div>
                      <div className="w-[20%] text-end font-medium">{formatNumber(user.points)}</div>
                    </div>
                  );
                })}
                <Pagination
                  responsive={true}
                  current={pagination.page}
                  defaultCurrent={pagination.page}
                  total={pagination.total_records}
                  pageSize={pagination.limit}
                  showSizeChanger={false}
                  onChange={(page) => handleChangePage(page)}
                  align="center"
                  className="py-6 bg-[#FCFCFC]"
                />
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-[#FAFAFA] text-center py-14 sm:py-20 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold">My Ranking</h2>
          <p className="text-lg sm:text-2xl font-medium mt-4 sm:mt-6 mb-10">Connect wallet to check out Your Ranking !</p>
          <ConnectButton />
        </div>
      )}

      {/* Last Reward */}
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
                          <img src={lastReward.iconReward} alt="last_reward_icon" className="size-7 sm:size-8" />
                          <img src={lastReward.iconBonusReward} alt="last_reward_icon_bonus" className="size-7 sm:size-8" />
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
