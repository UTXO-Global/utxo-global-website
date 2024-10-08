"use client";

import Button from "@/components/Common/Button";
import React from "react";
import Footer from "@/components/Footer";
import Quest from "@/components/PointSystem/Quest";
import Leaderboard from "@/components/PointSystem/Leaderboard";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

export default function PointSystem() {
  const [isQuestTab, setIsQuestTab] = React.useState(false);
  const { t } = useTranslation();

  return (
    <main>
      <div className="utxo-global-container">
        <div className="py-4 bg-transparent justify-between flex items-center">
          <div className="flex gap-4 sm:gap-10 items-center">
            <Link href="/">
              <div className="w-12 md:w-16">
                <img src="/icon.png" alt="logo-point-system" />
              </div>
            </Link>
            <Link href="#" className="font-bold">
              {t("pointSystem.point_system")}
            </Link>
          </div>
          <Button className="!py-2 md:!py-3">Connect Wallet</Button>
        </div>
      </div>
      <div className="relative">
        <div className="min-h-[230px]">
          <img
            src="/images/point-system-banner.png"
            alt="point-system-banner"
            className="lg:relative absolute w-full h-full object-cover"
          />
        </div>
        <div className="font-bold uppercase text-3xl text-center w-full sm:text-[40px] sm:leading-[48px] xl:text-[58px] xl:leading-[68px] absolute top-[30%] -translate-y-1/2 left-1/2 -translate-x-1/2 right-0 mx-0">
          <div>{t("pointSystem.title_01")}</div>
          <div className="text-orange-100">{t("pointSystem.title_02")}</div>
        </div>
        <div className="bg-dark-100 absolute bottom-[10%] left-0 right-0 rounded-2xl w-fit mx-auto px-5 xl:px-10 py-2 xl:py-5 flex items-center gap-6">
          <div className="flex items-center text-white gap-4">
            <div className="xl:size-10 size-8">
              <img src="/icons/icn-rank.png" alt="icn-rank" className="w-full h-full" />
            </div>
            <svg width="25" height="5" viewBox="0 0 25 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.0279454 4.184V0.728H10.3319V4.184H0.0279454ZM14.2779 4.184V0.728H24.5819V4.184H14.2779Z" fill="white" />
            </svg>
            {/* <span className="font-bold text-3xl">50</span> */}
          </div>
          <div className="flex items-center text-white gap-4">
            <div className="xl:size-10 size-8">
              <img src="/icons/utxo-point.png" alt="icn-rank" className="w-full h-full" />
            </div>
            <svg width="25" height="5" viewBox="0 0 25 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.0279454 4.184V0.728H10.3319V4.184H0.0279454ZM14.2779 4.184V0.728H24.5819V4.184H14.2779Z" fill="white" />
            </svg>
            {/* <span className="font-bold text-3xl">50</span> */}
          </div>
        </div>
      </div>
      <section className="utxo-global-container">
        <div className="flex items-center gap-6 mt-6">
          <Button
            kind="light"
            className={`!bg-grey-100 hover:!bg-grey-200/20 ${!isQuestTab && "!text-grey-200"}`}
            onClick={() => setIsQuestTab(true)}
          >
            {t("pointSystem.quest")}
          </Button>
          <Button
            kind="light"
            className={`!bg-grey-100 hover:!bg-grey-200/20 ${isQuestTab && "!text-grey-200"}`}
            onClick={() => setIsQuestTab(false)}
          >
            {t("pointSystem.leaderboard")}
          </Button>
        </div>
        <div className="mt-6">{isQuestTab ? <Quest /> : <Leaderboard />}</div>
      </section>
    </main>
  );
}
