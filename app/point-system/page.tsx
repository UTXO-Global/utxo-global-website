"use client";

import Button from "@/components/Common/Button";
import React from "react";
import Footer from "@/components/Footer";
import Quest from "@/components/PointSystem/Quest";
import Leaderboard from "@/components/PointSystem/Leaderboard";

export default function PointSystem() {
  const [isQuestTab, setIsQuestTab] = React.useState(false);

  return (
    <div>
      <div className="utxo-global-container">
        <div className="py-4 bg-transparent justify-between flex items-center">
          <div className="flex gap-4 items-center">
            <div className="w-16">
              <img src="/icon.png" alt="logo-point-system" />
            </div>
            <Button kind="light">Point System</Button>
          </div>
          <Button>Connect Wallet</Button>
        </div>
      </div>
      <div className="relative">
        <img src="/images/point-system-banner.png" alt="point-system-banner" />
        <div className="bg-dark-100 absolute bottom-[8%] left-0 right-0 rounded-2xl w-fit mx-auto px-10 py-5 flex items-center gap-6">
          <div className="flex items-center text-white gap-4">
            <div className="w-9 h-10">
              <img src="/icons/icn-rank.png" alt="icn-rank" className="w-full h-full" />
            </div>
            {/* <svg width="25" height="5" viewBox="0 0 25 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.0279454 4.184V0.728H10.3319V4.184H0.0279454ZM14.2779 4.184V0.728H24.5819V4.184H14.2779Z" fill="white" />
            </svg> */}
            <span className="font-bold text-3xl">50</span>
          </div>
          <div className="flex items-center text-white gap-4">
            <div className="w-9">
              <img src="/icons/utxo-point.png" alt="icn-rank" className="w-full h-full" />
            </div>
            {/* <svg width="25" height="5" viewBox="0 0 25 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.0279454 4.184V0.728H10.3319V4.184H0.0279454ZM14.2779 4.184V0.728H24.5819V4.184H14.2779Z" fill="white" />
            </svg> */}
            <span className="font-bold text-3xl">50</span>
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
            Quest
          </Button>
          <Button
            kind="light"
            className={`!bg-grey-100 hover:!bg-grey-200/20 ${isQuestTab && "!text-grey-200"}`}
            onClick={() => setIsQuestTab(false)}
          >
            Leaderboard
          </Button>
        </div>
        <div className="mt-6">{isQuestTab ? <Quest /> : <Leaderboard />}</div>
      </section>
      <Footer />
    </div>
  );
}
