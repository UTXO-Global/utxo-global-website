"use client";
import Image from "next/image";
import React from "react";
import bountyContestBanner from "@/public/images/bounty-contest-banner.png";
import Button from "@/components/Common/Button";
import Link from "next/link";
import { BOUNTY_CONTEST_ACTIVE, BUG_REPORT_LINK, BUG_REPORT_RESULT_LINK, CHROME_EXTENSION_LINK, CKBCCC_DEMO_LINK } from "@/configs/common";
import BountyResult from "@/components/BountyContest/BountyResult";
import LeaderBoard from "@/components/BountyContest/LeaderBoard";
import { useTranslation } from "next-export-i18n";

export default function BountyPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mt-16 text-center px-4">
        <Image src={bountyContestBanner} alt="banner" width={530} height={125} className="mx-auto" />
        {BOUNTY_CONTEST_ACTIVE ? (
          <>
            <p className="text-xl font-medium mt-8 text-grey-200">{t("bountyContest.description")}</p>
            <p className="text-orange-100 text-xl font-medium mt-3">{t("bountyContest.description01")}</p>
            <Link href={BUG_REPORT_LINK} target="_blank">
              <Button kind="primary" className="min-w-[225px] mt-8">
                {t("bountyContest.submitBug")}
              </Button>
            </Link>
          </>
        ) : (
          <>
            <p className="text-xl mt-8 text-grey-200">{t("bountyContest.bountyResult.description")}</p>
            <p className="text-orange-100 text-xl mt-3">
              <span className="text-grey-200">{t("bountyContest.bountyResult.bugReport")}: </span>
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
                  <h2 className="text-dark-100 text-2xl font-bold uppercase">{t("bountyContest.instruction.title")}</h2>
                </div>
                <div className="p-6 bg-lightGrey-100">
                  <div className="size-10 bg-dark-100 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <h5 className="text-xl font-bold mt-6">{t("bountyContest.instruction.step_01_title")}</h5>
                  <p className="mt-4 text-grey-200">{t("bountyContest.instruction.step_01_description")}:</p>
                  <Link href={CHROME_EXTENSION_LINK} className="text-orange-100" target="_blank">
                    {CHROME_EXTENSION_LINK}
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <div className="p-6 bg-lightGrey-100 ">
                  <div className="size-10 bg-dark-100 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <h5 className="text-xl font-bold mt-6">{t("bountyContest.instruction.step_02_title")}</h5>
                  <p className="my-4 text-grey-200">{t("bountyContest.instruction.step_02_description")}:</p>
                  <div className="space-y-2">
                    <h6 className="font-medium">{t("bountyContest.instruction.step_02_content_01")}</h6>
                    <p className="text-grey-200">
                      {t("bountyContest.instruction.step_02_content_02")} <br />
                      {t("bountyContest.instruction.step_02_content_03")} <br />
                      {t("bountyContest.instruction.step_02_content_04")}
                    </p>
                  </div>
                  <div className="space-y-2 mt-3">
                    <h6 className="font-medium">{t("bountyContest.instruction.step_02_content_05")}</h6>
                    <p className="text-grey-200">{t("bountyContest.instruction.step_02_content_06")}</p>
                  </div>
                  <div className="space-y-2 mt-3">
                    <h6 className="font-medium">{t("bountyContest.instruction.step_02_content_07")}</h6>
                    <p className="text-grey-200">{t("bountyContest.instruction.step_02_content_08")}</p>
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
                  <h5 className="text-xl font-bold mt-6">{t("bountyContest.instruction.step_03_title")}</h5>
                  <p className="mt-4 text-grey-200">
                    {t("bountyContest.instruction.step_03_description")}: <br />
                    <Link href={BUG_REPORT_LINK} className="text-orange-100" target="_blank">
                      {BUG_REPORT_LINK}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <LeaderBoard />
            </div>
          </div>
        </div>
      )}
      {!BOUNTY_CONTEST_ACTIVE && <BountyResult />}
    </div>
  );
}
