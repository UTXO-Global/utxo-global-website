"use client";

import Image from "next/image";
import React from "react";
import bountyContestBanner from "@/public/images/bounty-contest-banner.png";
import bountyContestBanner01 from "@/public/images/bounty-contest-banner-01.png";
import bountyContestBanner3 from "@/public/images/bounty-contest-banner-03.png";
import bountyResult from "@/public/images/bounty-result.png";
import IcnReward from "@/public/icons/icn-reward.svg";
import Button from "@/components/Common/Button";
import Link from "next/link";
import { BOUNTY_CONTEST_ACTIVE, BUG_REPORT_LINK, BUG_REPORT_RESULT_LINK, CHROME_EXTENSION_LINK, CKBCCC_DEMO_LINK } from "@/configs/common";
import { Pagination } from "antd";
import { formatNumber } from "@/utils/helpers";
import IcnMedalGold from "@/public/icons/icn-medal-gold.svg";
import IcnMedalSilver from "@/public/icons/icn-medal-silver.svg";
import IcnMedalBronze from "@/public/icons/icn-medal-bronze.svg";

const Medals = [
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

const Leaderboard = () => {
  return (
    <div className="grid gap-6">
      <div className="rounded-t-lg overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-b text-center from-[#D3D1CE] via-[#E0DFDE] to-[#EFEFEF]">
          <div className="flex justify-center gap-2">
            <IcnReward className="h-8 w-[25px]" />
            <h2 className="text-dark-100 text-2xl text-center font-bold uppercase">LEADERBOARD</h2>
            <IcnReward className="h-8 w-[25px]" />
          </div>
          <p className="mt-2">Data is updated every 24 hours</p>
        </div>
        {/* <div className="p-6 bg-[#FCFCFC] min-h-[200px] flex items-center">
          <p className="text-grey-200 mx-auto">Data has not been updated.</p>
        </div> */}
        <div className="[&>*:nth-child(even)]:bg-[#FCFCFC] bg-[#F5F5F5]">
          <div className="text-lg sm:text-xl font-bold p-6 flex items-center">
            <div className="w-[20%]">#</div>
            <div className="w-[40%] text-start">Name / Email</div>
            <div className="w-[40%] text-end">Total Points</div>
          </div>
          {Array(4)
            .fill(0)
            .map((_, i) => {
              return (
                <div className="px-6 py-4 flex items-center font-medium text-start" key={i}>
                  <span className="w-[20%] text-grey-200">1</span>
                  <div className="w-[50%] truncate">
                    <span className="text-xl block">John</span>
                    <span className="mt-1 text-sm font-normal text-grey-200">jo******@gmail.com</span>
                  </div>
                  <div className="w-[30%] text-xl text-end">{formatNumber(1200)}</div>
                </div>
              );
            })}
          <Pagination
            responsive={true}
            current={1}
            defaultCurrent={1}
            total={35}
            size="default"
            showSizeChanger={false}
            onChange={() => {}}
            defaultPageSize={4}
            align="center"
            className="py-6"
          />
        </div>
      </div>
      <Image src={bountyContestBanner01} alt="banner" width={490} height={370} className="mx-auto w-auto" />
    </div>
  );
};

export default function BountyPage() {
  return (
    <div>
      <div className="mt-16 text-center px-4">
        <Image src={bountyContestBanner} alt="banner" width={530} height={125} className="mx-auto" />
        {BOUNTY_CONTEST_ACTIVE ? (
          <>
            <p className="text-xl font-medium mt-8 text-grey-200">
              Hunt for vulnerabilities, earn rewards, & help us build a more secure future.
            </p>
            <p className="text-orange-100 text-xl font-medium mt-3">
              Period: August 20, 2024 10:00:00 AM (UTC) - Sep 03, 2024 10:00:00 AM (UTC)
            </p>
            <Link href={BUG_REPORT_LINK} target="_blank">
              <Button kind="primary" className="min-w-[225px] mt-8">
                Submit Bug
              </Button>
            </Link>
          </>
        ) : (
          <>
            <p className="text-xl mt-8 text-grey-200">
              Check out the leaderboard to see who&apos;s leading the charge in making our platform more secure
            </p>
            <p className="text-orange-100 text-xl mt-3">
              <span className="text-grey-200">Bug Report: </span>
              <Link href={BUG_REPORT_RESULT_LINK} target="_blank" className="font-medium">
                {BUG_REPORT_RESULT_LINK}
              </Link>
            </p>
          </>
        )}
      </div>
      {BOUNTY_CONTEST_ACTIVE && (
        <div className="utxo-global-container mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="col-span-1 lg:col-span-3 grid gap-6">
              <div className="rounded-lg overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-b from-[#D3D1CE] via-[#E0DFDE] to-[#EFEFEF]">
                  <h2 className="text-dark-100 text-2xl font-bold uppercase">How to participate</h2>
                </div>
                <div className="p-6 bg-lightGrey-100">
                  <div className="size-10 bg-dark-100 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <h5 className="text-xl font-bold mt-6">Download UTXO Global Wallet</h5>
                  <p className="mt-4 text-grey-200">Participants download the wallet from Chrome Store:</p>
                  <Link href={CHROME_EXTENSION_LINK} className="text-orange-100" target="_blank">
                    {CHROME_EXTENSION_LINK}
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <div className="p-6 bg-lightGrey-100 ">
                  <div className="size-10 bg-dark-100 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <h5 className="text-xl font-bold mt-6">Test Wallet in Testing Zone</h5>
                  <p className="my-4 text-grey-200">Users test the wallet within the testing zone in UTXO Wallet Extension (dApp):</p>
                  <div className="space-y-2">
                    <h6 className="font-medium">Wallet Management</h6>
                    <p className="text-grey-200">
                      Create / import / export a wallet from recovery phase and private key. <br />
                      Create and manage multiple wallets. <br />
                      Create and manage multiple accounts within a single wallet.
                    </p>
                  </div>
                  <div className="space-y-2 mt-3">
                    <h6 className="font-medium">CKB Native Coin Management</h6>
                    <p className="text-grey-200">Send and receive CKB to and from different addresses</p>
                  </div>
                  <div className="space-y-2 mt-3">
                    <h6 className="font-medium">Sign Message + Transaction</h6>
                    <p className="text-grey-200">
                      Use the CKB CCC demo to test. The valid testing zone: Sign, Transfer, Transfer with Lumos, Transfer xUDT, Transfer
                      xUDT (SUS), and Issue xUDT
                    </p>
                    <div className="text-grey-200">
                      <div className="size-[10px] mr-4 bg-[#EBECEC] inline-block"></div>
                      CCC:{" "}
                      <Link href={CKBCCC_DEMO_LINK} className="text-orange-100" target="_blank">
                        {CKBCCC_DEMO_LINK}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <div className="p-6 bg-lightGrey-100">
                  <div className="size-10 bg-dark-100 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <h5 className="text-xl font-bold mt-6">Submit Bug Report</h5>
                  <p className="mt-4 text-grey-200">
                    If a bug is found, the participant submits a report detailing the issue via: <br />
                    <Link href={BUG_REPORT_LINK} className="text-orange-100" target="_blank">
                      {BUG_REPORT_LINK}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <Leaderboard />
            </div>
          </div>
        </div>
      )}
      {!BOUNTY_CONTEST_ACTIVE && (
        <div className="utxo-global-container mt-14">
          <div className="[&>*:nth-child(even)]:bg-[#FCFCFC] bg-[#F5F5F5] max-w-[836px] mx-auto rounded-lg">
            <div className="text-lg sm:text-xl bg-gradient-to-b from-[#D3D1CE] relative via-[#E0DFDE] to-[#EFEFEF] font-bold py-6 px-6 sm:px-16 pt-10 flex items-center">
              <Image
                src={bountyResult}
                alt="banner"
                width={300}
                height={53}
                className="absolute w-auto -translate-y-[100%] right-0 left-0 mx-auto"
              />
              <div className="w-[20%]">#</div>
              <div className="w-[40%] text-start">Name / Email</div>
              <div className="w-[40%] text-end">Total Points</div>
            </div>
            {Array(6)
              .fill(0)
              .map((_, i) => {
                return (
                  <div className="px-6 sm:px-16 py-4 flex items-center font-medium text-start" key={i}>
                    {i < 3 ? <div className="w-[20%]">{Medals[i].icon}</div> : <span className="w-[20%] text-grey-200 ml-2">{i + 1}</span>}
                    <div className="w-[50%] truncate">
                      <span className="text-xl block">John</span>
                      <span className="mt-1 text-sm font-normal text-grey-200">jo******@gmail.com</span>
                    </div>
                    <div className="w-[30%] text-xl text-end">{formatNumber(1200)}</div>
                  </div>
                );
              })}
            <Pagination
              responsive={true}
              current={1}
              defaultCurrent={1}
              total={35}
              size="default"
              showSizeChanger={false}
              onChange={() => {}}
              defaultPageSize={4}
              align="center"
              className="py-6"
            />
          </div>
          <Image src={bountyContestBanner3} alt="banner" width={836} height={410} className="mx-auto mt-8" />
        </div>
      )}
    </div>
  );
}
