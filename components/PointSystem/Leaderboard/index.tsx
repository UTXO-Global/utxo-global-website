import React, { useState } from "react";
import { formatNumber } from "@/utils/helpers";
import { Pagination } from "antd";
import { pointSystemLeaderboardData } from "@/configs/point-system";
import usePagination from "@/hooks/usePagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Leaderboard() {
  const { data, queryConfig, handlePagination, totalData } = usePagination({ limit: 10, inititalData: pointSystemLeaderboardData });
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  return (
    <div>
      <div className="[&>*:nth-child(even)]:bg-[#FCFCFC] bg-[#F5F5F5] mx-auto rounded-lg overflow-hidden">
        <div className="text-lg sm:text-xl bg-gradient-to-b from-[#D3D1CE] relative via-[#E0DFDE] to-[#EFEFEF] font-bold py-6 px-6 sm:px-16 pt-10 flex items-center">
          <div className="w-[20%]">Rank</div>
          <div className="w-[60%] text-start">Address</div>
          <div className="w-[20%] text-end">Point</div>
        </div>
        {data.map((user, i) => {
          return (
            <div className="px-6 sm:px-16 py-4 flex items-center text-start" key={user.rank}>
              <span className="w-[20%] font-medium pl-4">{user.rank}</span>
              <div className="w-[60%] truncate">{user.address}</div>
              <div className="w-[20%] text-xl text-end font-medium">{formatNumber(user.points)}</div>
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
      <div className="mt-10 bg-[#FAFAFA] rounded-lg p-4 sm:p-10">
        <h2 className="text-3xl font-bold">Last rewards</h2>
        <div className="mt-6 relative">
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            direction="horizontal"
            navigation={{
              nextEl: ".swiper-custom-button-next",
              prevEl: ".swiper-custom-button-prev",
            }}
            modules={[Navigation]}
            onReachEnd={() => setShowNext(false)}
            onReachBeginning={() => setShowPrev(false)}
            onSlideChange={(swiper) => {
              setShowPrev(!swiper.isBeginning);
              setShowNext(!swiper.isEnd);
            }}
          >
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="p-4  w-full bg-white rounded-lg flex items-start gap-4">
                    <div className="rounded-full bg-grey-100 p-2">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 4.25C11.0054 4.25 10.0516 4.64509 9.34835 5.34835C8.64509 6.05161 8.25 7.00544 8.25 8C8.25 8.99456 8.64509 9.94839 9.34835 10.6517C10.0516 11.3549 11.0054 11.75 12 11.75C12.9946 11.75 13.9484 11.3549 14.6517 10.6517C15.3549 9.94839 15.75 8.99456 15.75 8C15.75 7.00544 15.3549 6.05161 14.6517 5.34835C13.9484 4.64509 12.9946 4.25 12 4.25ZM8 13.75C7.00544 13.75 6.05161 14.1451 5.34835 14.8483C4.64509 15.5516 4.25 16.5054 4.25 17.5V18.688C4.25 19.442 4.796 20.084 5.54 20.205C9.818 20.904 14.182 20.904 18.46 20.205C18.8198 20.1458 19.147 19.9608 19.3832 19.6831C19.6194 19.4053 19.7494 19.0527 19.75 18.688V17.5C19.75 16.5054 19.3549 15.5516 18.6517 14.8483C17.9484 14.1451 16.9946 13.75 16 13.75H15.66C15.4733 13.7507 15.292 13.7793 15.116 13.836L14.25 14.119C12.788 14.5963 11.212 14.5963 9.75 14.119L8.884 13.836C8.70847 13.7797 8.52534 13.7507 8.341 13.75H8Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h3 className="text-base font-medium truncate">ckb1qzda0cr08..hjebdf</h3>
                      <p className="text-grey-200 text-sm">Sep 11, 2024</p>
                      <div className="flex items-center mt-1 justify-between gap-2">
                        <span>Received Rewards:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">4,000</span>
                          <img src="/icons/icn-nervos.svg" alt="utxo-nervos" className="size-8" />
                          <img src="/icons/icn-first-rank.svg" alt="utxo-rank" className="size-8" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          {showPrev && (
            <button className="swiper-custom-button-prev absolute top-1/2 z-10 -translate-y-[50%] -left-5 bg-white shadow-md rounded-full p-2 after:content-none">
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
          {showNext && (
            <button className="swiper-custom-button-next absolute top-1/2 z-10 -translate-y-[50%] -right-5 bg-white shadow-md rounded-full p-2 after:content-none">
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
