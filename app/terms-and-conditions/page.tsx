/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslation } from "next-export-i18n";

import { CONTACT_MAIL } from "@/configs/common";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="py-[60px] relative overflow-hidden">
        <img
          src="/images/utxo.png"
          alt="utxo global"
          className="w-[400px] max-w-[unset] md:w-[60%] rotate-[35deg] absolute bottom-[200px] -left-[50px] md:left-0"
        />
        <div className="utxo-global-container text-base relative">
          <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-dark-100 font-medium text-center">
            {t("terms.title")}
          </h3>
          <div className="mt-10 grid gap-4">
            <div>
              <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
                {t("terms.introduction.title")}
              </h6>
              <p className="mt-3">
                <span>{t("terms.introduction.content01")}</span>
                <Link href="/" className="text-orange-100 underline font-medium">
                  utxo.global
                </Link>{" "}
                <span>{t("terms.introduction.content02")}</span>
              </p>
            </div>
            <div>
              <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
                {t("terms.useOfOur.title")}
              </h6>
              <div className="mt-3">
                <ul className="list-decimal grid gap-2 ml-5">
                  <li>
                    <span className="font-medium">{t("terms.useOfOur.content01_01")}:</span> {t("terms.useOfOur.content01_02")}
                  </li>
                  <li>
                    <span className="font-medium">{t("terms.useOfOur.content02_01")}:</span> {t("terms.useOfOur.content02_02")}
                  </li>
                  <li>
                    <span className="font-medium">{t("terms.useOfOur.content03_01")}:</span> {t("terms.useOfOur.content03_02")}
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
                {t("terms.userConduct.title")}
              </h6>
              <div className="mt-3">
                <ul className="list-decimal grid gap-2 ml-5">
                  <li>
                    <span className="font-medium">{t("terms.userConduct.content01_01")}:</span> {t("terms.userConduct.content01_02")}
                  </li>
                  <li>
                    <span className="font-medium">{t("terms.userConduct.content02_01")}:</span> {t("terms.userConduct.content02_02")}
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
                {t("terms.intellectualProperty.title")}
              </h6>
              <div className="mt-3">
                <ul className="list-decimal grid gap-2 ml-5">
                  <li>
                    <span className="font-medium">{t("terms.intellectualProperty.content01_01")}:</span>{" "}
                    {t("terms.intellectualProperty.content01_02")}
                  </li>
                  <li>
                    <span className="font-medium">{t("terms.intellectualProperty.content02_01")}:</span>{" "}
                    {t("terms.intellectualProperty.content02_02")}
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
                {t("terms.disclaimers.title")}
              </h6>
              <div className="mt-3">
                <ul className="list-decimal grid gap-2 ml-5">
                  <li>
                    <span className="font-medium">{t("terms.disclaimers.content01_01")}:</span> {t("terms.disclaimers.content01_02")}
                  </li>
                  <li>
                    <span className="font-medium">{t("terms.disclaimers.content02_01")}:</span> {t("terms.disclaimers.content02_02")}
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
                {t("terms.termination.title")}
              </h6>
              <div className="mt-3">
                <p>{t("terms.termination.content")}</p>
              </div>
            </div>

            <div>
              <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
                {t("terms.governingLaw.title")}
              </h6>
              <div className="mt-3">
                <p>{t("terms.governingLaw.content")}</p>
              </div>
            </div>

            <div>
              <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
                {t("terms.changesToThese.title")}
              </h6>
              <div className="mt-3">
                <p>{t("terms.changesToThese.content")}</p>
              </div>
            </div>

            <div>
              <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
                {t("terms.contactUs.title")}
              </h6>
              <div className="mt-3">
                <p>
                  {t("terms.contactUs.content01")}{" "}
                  <a href={`mailto:${CONTACT_MAIL}`} className="text-orange-100 font-medium underline">
                    {CONTACT_MAIL}
                  </a>
                  {t("terms.contactUs.content02")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
