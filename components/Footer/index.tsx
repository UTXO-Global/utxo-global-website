"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

import IcnTwitter from "@/public/icons/icn-twitter.svg";
import IcnTelegram from "@/public/icons/icn-telegram.svg";
import IcnGithub from "@/public/icons/icn-github.svg";

import { CHROME_EXTENSION_LINK, DOC_LINK, EXTENTSION_GITHUB, MEDIA_KIT_GITHUB, NERVOS_LINK, pathWithoutFooter } from "@/configs/common";
import { TELEGRAM_LINK, TWITTER_LINK } from "@/configs/social";
import { usePathname } from "next/navigation";

const Footer = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  if (pathWithoutFooter.includes(pathname)) return null;
  return (
    <footer className="pt-[40px] md:pt-[60px] lg:pt-[120px]">
      <div className="utxo-global-container py-10 flex md:flex-row flex-col-reverse justify-between items-center md:items-start relative gap-10 md:gap-0">
        <div className="md:max-w-[240px] lg:max-w-[370px] xl:max-w-[441px]">
          <p className="text-[18px] leading-[24px] md:text-[20px] md:leading-[28px] text-grey-300 font-normal text-center md:text-left">
            <span className="font-bold text-dark-100">{t("footer.utxoGlobal")}</span> {t("footer.description")}
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link href={TWITTER_LINK} target="_blank">
              <div className="rounded-full w-[48px] h-[48px] flex justify-center items-center bg-dark-100 transition-all hover:bg-dark-200">
                <IcnTwitter className="w-6" />
              </div>
            </Link>
            <Link href={TELEGRAM_LINK} target="_blank">
              <div className="rounded-full w-[48px] h-[48px] flex justify-center items-center bg-dark-100 transition-all hover:bg-dark-200">
                <IcnTelegram className="w-6" />
              </div>
            </Link>
            <Link href={EXTENTSION_GITHUB} target="_blank">
              <div className="rounded-full w-[48px] h-[48px] flex justify-center items-center bg-dark-100 transition-all hover:bg-dark-200">
                <IcnGithub className="w-10" />
              </div>
            </Link>
          </div>
        </div>
        <img src="/icon.png" alt="utxo global" className="md:absolute w-[100px] lg:w-[150px] md:left-1/2 md:-translate-x-1/2 md:top-10" />
        <div className="flex flex-row md:flex-col lg:flex-row gap-10 lg:gap-20 w-full justify-between md:justify-center md:w-[unset]">
          <div className="grid gap-4 text-[18px] leading-[24px] md:text-[20px] md:leading-[28px] font-medium items-start justify-items-start md:justify-items-end lg:justify-items-start">
            <p className=" text-dark-100"> {t("footer.support")}</p>
            <Link href="/privacy-policy" className="text-grey-200 transition-colors hover:text-dark-100">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href="/terms-and-conditions" className="text-grey-200 transition-colors hover:text-dark-100">
              {t("footer.terms")}
            </Link>
            <Link href={MEDIA_KIT_GITHUB} target="_blank" className="text-grey-200 transition-colors hover:text-dark-100">
              {t("footer.mediaKit")}
            </Link>
          </div>

          <div className="grid gap-4 text-[18px] leading-[24px] md:text-[20px] md:leading-[28px] font-medium items-start justify-items-start md:justify-items-end lg:justify-items-start">
            <p className=" text-dark-100">{t("footer.link")}</p>
            <Link href={DOC_LINK} target="_blank" className="text-grey-200 transition-colors hover:text-dark-100">
              {t("footer.docs")}
            </Link>
            <Link href={NERVOS_LINK} target="_blank" className="text-grey-200 transition-colors hover:text-dark-100">
              {t("footer.nervos")}
            </Link>
            <Link href={CHROME_EXTENSION_LINK} target="_blank" className="text-grey-200 transition-colors hover:text-dark-100">
              {t("footer.download")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
