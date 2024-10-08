/* eslint-disable @next/next/no-img-element */
"use client";

import { CONTACT_MAIL } from "@/configs/common";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <main className="py-[60px] relative overflow-hidden">
      <img
        src="/images/utxo.png"
        alt="utxo global"
        className="w-[400px] max-w-[unset] md:w-[60%] rotate-[35deg] absolute bottom-[200px] -left-[50px] md:left-0"
      />
      <div className="utxo-global-container text-base relative">
        <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-dark-100 font-medium text-center">
          {t(`privacyPolicy.title`)}
        </h3>
        <div className="mt-10 grid gap-4">
          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              {t(`privacyPolicy.introduction.title`)}
            </h6>
            <p className="mt-3">
              <span>{t(`privacyPolicy.introduction.content01`)}</span>
              <Link href="/" className="text-orange-100 underline font-medium">
                utxo.global
              </Link>{" "}
              <span>{t(`privacyPolicy.introduction.content02`)}</span>
            </p>
          </div>
          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              {t(`privacyPolicy.information.title`)}
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">{t(`privacyPolicy.information.content01_01`)}:</span>{" "}
                  {t(`privacyPolicy.information.content01_02`)}
                </li>
                <li>
                  <span className="font-medium">{t(`privacyPolicy.information.content02_01`)}:</span>{" "}
                  {t(`privacyPolicy.information.content02_02`)}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              {t(`privacyPolicy.howWeUse.title`)}
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">{t(`privacyPolicy.howWeUse.content01_01`)}:</span>{" "}
                  {t(`privacyPolicy.howWeUse.content01_02`)}
                </li>
                <li>
                  <span className="font-medium">{t(`privacyPolicy.howWeUse.content02_01`)}:</span>{" "}
                  {t(`privacyPolicy.howWeUse.content02_02`)}
                </li>
                <li>
                  <span className="font-medium">{t(`privacyPolicy.howWeUse.content03_01`)}:</span>{" "}
                  {t(`privacyPolicy.howWeUse.content03_02`)}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              {t(`privacyPolicy.sharing.title`)}
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">{t(`privacyPolicy.sharing.content01_01`)}:</span> {t(`privacyPolicy.sharing.content01_02`)}
                </li>
                <li>
                  <span className="font-medium">{t(`privacyPolicy.sharing.content02_01`)}:</span> {t(`privacyPolicy.sharing.content02_02`)}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              {t(`privacyPolicy.security.title`)}
            </h6>
            <div className="mt-3">
              <p>{t(`privacyPolicy.security.content`)}</p>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              {t(`privacyPolicy.yourChoices.title`)}
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">{t(`privacyPolicy.yourChoices.content01_01`)}:</span>{" "}
                  {t(`privacyPolicy.yourChoices.content01_02`)}
                </li>
                <li>
                  <span className="font-medium">{t(`privacyPolicy.yourChoices.content02_01`)}:</span>{" "}
                  {t(`privacyPolicy.yourChoices.content02_02`)}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              {t(`privacyPolicy.changesToThis.title`)}
            </h6>
            <div className="mt-3">
              <p>{t(`privacyPolicy.changesToThis.content`)}</p>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              {t(`privacyPolicy.contactUs.title`)}
            </h6>
            <div className="mt-3">
              <p>
                {t(`privacyPolicy.contactUs.content01`)}{" "}
                <a href={`mailto:${CONTACT_MAIL}`} className="text-orange-100 font-medium underline">
                  {CONTACT_MAIL}
                </a>{" "}
                {t(`privacyPolicy.contactUs.content02`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
