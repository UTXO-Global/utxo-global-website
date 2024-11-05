"use client";

import Button from "@/components/Common/Button";
import { Collapse } from "antd";
import Link from "next/link";
import React from "react";
import IcnArrowUpRight from "@/public/icons/icn-arrow-up-right.svg";
import IcnLongArrow from "@/public/icons/icn-long-arrow.svg";
import { TELEGRAM_LINK } from "@/configs/social";
import { DOC_LINK, INDEXER_COIN_API_LINK, INDEXER_NFT_API_LINK, REQUEST_API_ACCESS_LINK } from "@/configs/common";
import { useTranslation } from "next-export-i18n";

export default function IndexerPage() {
  const { t } = useTranslation();

  return (
    <section>
      {/* Banner */}
      <div className="relative">
        <div>
          <img src="/images/indexer-banner.png" alt="banner" className="absolute h-full w-full object-cover" />
        </div>
        <div className="relative z-10 utxo-global-container">
          <div className="py-4">
            <img src="/icon.png" alt="logo" className="size-10 md:size-14" />
          </div>
          <div className="text-center pt-4 pb-8 md:pt-20 md:pb-32 relative">
            <h1 className="uppercase text-3xl md:text-5xl font-bold text-center">{t("indexer.title")}</h1>
            <p className="text-orange-100 text-xl md:text-2xl mt-4 mb-6 font-medium capitalize">
              {t("indexer.description")}
            </p>
            <Link href={REQUEST_API_ACCESS_LINK} target="_blank" rel="noreferrer">
              <Button className="border-none rounded-full !py-2 md:!py-3">
                <div className="flex items-center">
                  {t("indexer.btn_label")}
                  <IcnArrowUpRight className="size-7 -mr-2"></IcnArrowUpRight>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-10 md:py-16">
        {/* Main */}
        <div className="utxo-global-container">
          <h2 className="text-3xl md:text-[40px] font-medium text-center">{t("indexer.title_01")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-16">
            <div className="p-4 md:p-6 hover:border-gray-200 border border-[#F5F5F5] bg-[#F5F5F5] rounded-2xl font-medium h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl md:text-2xl">{t("indexer.card_01_title")}</h3>
                <p className="text-lg md:text-xl mt-4">{t("indexer.card_01_description")}</p>
              </div>
              <Link href={INDEXER_COIN_API_LINK} className="text-orange-100 mt-4 md:mt-6 flex items-center gap-1">
                {t("indexer.card_link")}
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1569 12.7116L4.49994 18.3686L3.08594 16.9546L8.03594 12.0046L3.08594 7.05463L4.49994 5.64062L10.1569 11.2976C10.3444 11.4852 10.4497 11.7395 10.4497 12.0046C10.4497 12.2698 10.3444 12.5241 10.1569 12.7116Z"
                    fill="#FF7201"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-4 md:p-6 hover:border-gray-200 border border-[#F5F5F5] bg-[#F5F5F5] rounded-2xl font-medium h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl md:text-2xl">{t("indexer.card_02_title")}</h3>
                <p className="text-lg md:text-xl mt-4">{t("indexer.card_02_description")}</p>
              </div>
              <Link href={INDEXER_NFT_API_LINK} className="text-orange-100 mt-4 md:mt-6 flex items-center gap-1">
                {t("indexer.card_link")}
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1569 12.7116L4.49994 18.3686L3.08594 16.9546L8.03594 12.0046L3.08594 7.05463L4.49994 5.64062L10.1569 11.2976C10.3444 11.4852 10.4497 11.7395 10.4497 12.0046C10.4497 12.2698 10.3444 12.5241 10.1569 12.7116Z"
                    fill="#FF7201"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="py-6">
            <IcnLongArrow className="w-[6px] mx-auto" />
          </div>
          <div className="mx-auto w-fit">
            <Link href={`${DOC_LINK}/developer-tools/ckb-advanced-indexer-api`} target="_blank" rel="noreferrer">
              <Button className="!bg-orange-100 hover:!bg-[#FF9D4E] !text-xl md:!text-2xl border-none rounded-full">
                <div className="flex items-center">
                  {t("indexer.btn_label_check_doc")}
                  <IcnArrowUpRight className="size-7 -mr-2"></IcnArrowUpRight>
                </div>
              </Button>
            </Link>
          </div>
          <h3 className="py-10 text-4xl font-medium">{t("indexer.faq")}</h3>
        </div>

        {/* FAQ */}
        <div className="relative">
          <div className="utxo-global-container">
            <div className="lg:pr-[400px] xl:pr-[350px]">
              <Collapse
                bordered={false}
                size="large"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #d9d9d9",
                }}
                items={[
                  {
                    key: "1",
                    label: (
                      <div className="md:py-2 font-medium text-lg md:text-xl">{t("indexer.question.question_01")}</div>
                    ),
                    children: (
                      <div className="p-4 !pt-0 !pl-12 md:p-6 font-medium text-lg md:text-xl">
                        <p>{t("indexer.answer.answer_01_content_01")}</p>
                        <code className="inline-flex bg-grey-100 text-base rounded-lg p-2 border border-grey-50 my-4 whitespace-pre-line">
                          {`curl --location 'https://testnet-ckb-720a.utxo.global' 
                      --header 'Content-Type: application/json' 
                      --data '{ "id": 42, "jsonrpc": "2.0", "method": "get_indexer_tip", "params": [] }'`}
                        </code>
                        <p>
                          {t("indexer.answer.answer_01_content_02")}{" "}
                          <Link
                            href={TELEGRAM_LINK}
                            className="text-orange-100 underline hover:underline hover:text-orange-100/60"
                          >
                            Telegram group
                          </Link>{" "}
                          {t("indexer.answer.answer_01_content_03")}
                        </p>
                      </div>
                    ),
                  },
                  {
                    key: "2",
                    label: (
                      <div className="md:py-2 font-medium text-lg md:text-xl">{t("indexer.question.question_02")}</div>
                    ),
                    children: (
                      <div className="p-4 !pt-0 !pl-12 md:p-6 font-medium text-lg md:text-xl">
                        {t("indexer.answer.answer_02_content_01")}{" "}
                        <code className="inline-flex px-1 bg-grey-100 text-base md:text-lg !leading-5 py-[1px] justify-center items-center rounded-md border border-grey-50 break-all">
                          INDEXER_API
                        </code>{" "}
                        {t("indexer.answer.answer_02_content_02")}{" "}
                        <code className="inline-flex px-1 bg-grey-100 text-base md:text-lg !leading-5 py-[1px] justify-center items-center rounded-md border border-grey-50 break-all">
                          https://ckb-testnet-indexer.utxo.global
                        </code>{" "}
                        , {t("indexer.answer.answer_02_content_03")}{" "}
                        <code className="inline-flex px-1 bg-grey-100 text-base md:text-lg !leading-5 py-[1px] justify-center items-center rounded-md border border-grey-50 break-all">
                          https://ckb-indexer.utxo.global.
                        </code>
                      </div>
                    ),
                  },
                  {
                    key: "3",
                    label: (
                      <div className="md:py-2 font-medium text-lg md:text-xl">{t("indexer.question.question_03")}</div>
                    ),
                    children: (
                      <div className="p-4 !pt-0 !pl-12 md:p-6 font-medium text-lg md:text-xl">
                        {t("indexer.answer.answer_03_content_01")}{" "}
                        <span className="font-bold"> {t("indexer.answer.answer_03_content_02")}</span>{" "}
                        {t("indexer.answer.answer_03_content_03")}{" "}
                        <span className="font-bold"> {t("indexer.answer.answer_03_content_04")}</span>{" "}
                        {t("indexer.answer.answer_03_content_05")}
                      </div>
                    ),
                  },
                  {
                    key: "4",
                    label: (
                      <div className="md:py-2 font-medium text-lg md:text-xl">{t("indexer.question.question_04")}</div>
                    ),
                    children: (
                      <div className="p-4 !pt-0 !pl-12 md:p-6 font-medium text-lg md:text-xl">
                        {t("indexer.answer.answer_04_content_01")}{" "}
                        <Link
                          href={REQUEST_API_ACCESS_LINK}
                          className="text-orange-100 underline hover:underline hover:text-orange-100/60"
                        >
                          Google Form
                        </Link>{" "}
                        {t("indexer.answer.answer_04_content_02")}
                      </div>
                    ),
                  },
                  {
                    key: "5",
                    label: (
                      <div className="md:py-2 font-medium text-lg md:text-xl">{t("indexer.question.question_05")}</div>
                    ),
                    children: (
                      <div className="p-4 !pt-0 !pl-12 md:p-6 font-medium text-lg md:text-xl">
                        {t("indexer.answer.answer_05")}{" "}
                        <Link
                          href={TELEGRAM_LINK}
                          className="text-orange-100 underline hover:underline hover:text-orange-100/60"
                        >
                          Telegram.
                        </Link>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
          <div className="lg:block hidden absolute right-0 top-0">
            <img src="/images/indexer-image-faq.png" alt="imageRight" className="w-[400px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
