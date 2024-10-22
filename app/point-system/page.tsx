"use client";

import Button from "@/components/Common/Button";
import React from "react";
import Quest from "@/components/PointSystem/Quest";
import Leaderboard from "@/components/PointSystem/Leaderboard";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import useLogin from "@/hooks/useLogin";
import AccountModal from "@/components/AccountModal";
import useAuthenticate from "@/hooks/useAuthenticate";
import useProfile from "@/hooks/useProfile";
import ConnectButton from "@/components/ConnectButton";
import { PointSystemTab } from "@/types/common";
import { pointSystemTabs } from "@/configs/point-system";
import cn from "@/utils/cn";

export default function PointSystem() {
  const [tab, setTab] = React.useState(PointSystemTab.LeaderBoard);
  const { t } = useTranslation();
  useLogin();
  const { profile } = useProfile();
  const { isLoggedIn } = useAuthenticate();

  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white">
        <div className="utxo-global-container">
          <div className="py-3 bg-transparent justify-between flex items-center">
            <div className="flex gap-4 sm:gap-10 items-center">
              <div className="w-12 md:w-16">
                <img src="/icon.png" alt="logo-point-system" />
              </div>
              <Link href="#" className="font-bold">
                {t("pointSystem.point_system")}
              </Link>
            </div>
            {isLoggedIn ? <AccountModal /> : <ConnectButton />}
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="relative">
        <div className="sm:min-h-[230px]">
          <img src="/images/point-system-banner-mobile.png" alt="point-system-banner" className="block sm:hidden" />
          <img
            src="/images/point-system-banner.png"
            alt="point-system-banner"
            className="hidden sm:block lg:relative absolute w-full h-full object-cover"
          />
        </div>
        <div className="font-bold capitalize text-3xl text-center w-full sm:text-[42px] sm:leading-[48px] lg:text-[48px] xl:text-[58px] xl:leading-[68px] absolute top-[35%] md:top-[30%] -translate-y-1/2 left-1/2 -translate-x-1/2 right-0 mx-0">
          <div>{t("pointSystem.title_01")}</div>
          <div className="text-orange-100">{t("pointSystem.title_02")}</div>
        </div>
        <div className="bg-dark-100 absolute bottom-[15%] lg:bottom-[14%] xl:bottom-[15%] left-0 right-0 rounded-2xl md:rounded-2xl w-fit mx-auto flex items-center gap-4">
          <div className="flex items-center text-white gap-2 sm:gap-3 px-3 xl:px-10 py-2 md:px-6 md:py-3 xl:py-4">
            <span className="text-lg md:text-2xl xl:text-[32px] xl:leading-[24px] font-bold">{t("pointSystem.my_points")}:</span>
            <div className="xl:size-10 size-6 md:size-8">
              <img src="/icons/utxo-point.png" alt="icn-rank" className="w-full h-full" />
            </div>
            {isLoggedIn ? (
              <span className="font-bold text-3xl md:text-4xl xl:text-[2.875rem]">{profile.points}</span>
            ) : (
              <svg width="25" height="5" viewBox="0 0 25 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0279454 4.184V0.728H10.3319V4.184H0.0279454ZM14.2779 4.184V0.728H24.5819V4.184H14.2779Z" fill="white" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Quests and Leaderboard */}
      <section className="utxo-global-container">
        <div className="flex items-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          {pointSystemTabs.map((item) => (
            <div className="relative" key={item.label}>
              <Button
                kind="light"
                className={cn("!bg-grey-100 text-base sm:!text-2xl !p-2 !text-grey-200 sm:!py-3 sm:!px-4", {
                  "!text-dark-100": tab === item.key,
                  "cursor-not-allowed": item.isCommingSoon,
                })}
                disabled={item.isCommingSoon}
                onClick={() => setTab(item.key)}
              >
                {t(item.label)}
              </Button>
              {item.isCommingSoon && (
                <div className="bg-dark-100 text-white text-[6px] sm:text-xs font-medium p-1 rounded-md absolute -top-2 sm:-top-3 -right-[10px] sm:-right-[16px]">
                  Coming soon
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 sm:mt-6">
          {tab === PointSystemTab.Quest && <Quest />}
          {tab === PointSystemTab.LeaderBoard && <Leaderboard />}
        </div>
      </section>
    </main>
  );
}
