/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

import IcnTwitter from "@/public/icons/icn-twitter.svg";
import IcnTelegram from "@/public/icons/icn-telegram.svg";

import { TELEGRAM_LINK, UTXO_GLOBAL_TWITTER_LINK } from "@/configs/social";

const Community = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-[20px] pt-[100px] overflow-hidden" id="contact">
      <div className="utxo-global-container">
        <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-dark-100 font-medium text-center">
          {t("community.title")}
        </h3>
        <p className="text-[18px] leading-[24px] md:text-[20px] md:leading-[28px] font-medium text-grey-200 text-center max-w-[522px] mx-auto mt-2 md:mt-6">
          {t("community.description01")} <span className="font-bold text-dark-100">{t("community.description02")}</span>{" "}
          {t("community.description03")}
        </p>
      </div>
      <div className="mt-10 md:mt-[64px] flex gap-10 justify-center relative">
        <img src="/images/utxo.png" alt="utxo" className="w-full top-0 left-0 hidden lg:block" />
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center lg:absolute w-full lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 utxo-global-container">
          <Link href={UTXO_GLOBAL_TWITTER_LINK} target="_blank" className="z-[1] w-[300px] xl:w-[374px]" data-aos="slide-right">
            <div
              className="rounded-[24px] bg-light-100 border border-[#F5F5F5] p-[20px] grid gap-4 justify-center"
              style={{
                boxShadow: `0px 4px 20px 0px rgba(0, 0, 0, 0.08)`,
              }}
            >
              <p className="text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-medium text-dark-100 text-center">
                {t("community.twitter")}
              </p>
              <div className="w-[60px] h-[60px] lg:w-20 lg:h-20 rounded-full bg-[#EBECEC] flex justify-center items-center mx-auto">
                <IcnTwitter className="w-7 lg:w-10 fill-dark-100" />
              </div>
              <p className="text-base md:text-[18px] md:leading-[28px] text-grey-200 font-medium text-center">
                {t("community.followTwitter")}
              </p>
            </div>
          </Link>

          <Link href={TELEGRAM_LINK} target="_blank" className="z-[1] w-[300px] xl:w-[374px]" data-aos="slide-left">
            <div
              className="rounded-[24px] bg-light-100 border border-[#F5F5F5] p-[20px] grid gap-4 justify-center"
              style={{
                boxShadow: `0px 4px 20px 0px rgba(0, 0, 0, 0.08)`,
              }}
            >
              <p className="text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-medium text-dark-100 text-center">
                {t("community.telegram")}
              </p>
              <div className="w-[60px] h-[60px] lg:w-20 lg:h-20 rounded-full bg-[#EBECEC] flex justify-center items-center mx-auto">
                <IcnTelegram className="w-7 lg:w-10 fill-dark-100" />
              </div>
              <p className="text-base md:text-[18px] md:leading-[28px] text-grey-200 font-medium text-center">
                {t("community.joinTelegram")}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Community;
