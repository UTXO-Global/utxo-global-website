"use client"

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import IcnTwitter from "@/public/icons/icn-twitter.svg";
import IcnTelegram from "@/public/icons/icn-telegram.svg";

import { TELEGRAM_LINK, TWITTER_LINK } from "@/configs/social";
import { comingSoonMsg } from "@/utils/helpers";

const Footer = () => {
  return (
    <footer className="pt-[40px] md:pt-[60px] lg:pt-[120px]">
      <div className="utxo-global-container py-10 flex md:flex-row flex-col-reverse justify-between items-center md:items-start relative gap-10 md:gap-0">
        <div className="md:max-w-[240px] lg:max-w-[370px] xl:max-w-[441px]">
          <p className="text-[18px] leading-[24px] md:text-[20px] md:leading-[28px] text-grey-300 font-medium text-center md:text-left">
            <span className="font-bold text-dark-100">UTXO Global</span> is a
            revolutionary wallet for the CKB ecosystem. It delivers the robust
            security guarantees of the UTXO model while addressing its
            limitations in scalability and interoperability.
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
          </div>
        </div>
        <img
          src="/icon.png"
          alt="utxo global"
          className="md:absolute w-[100px] lg:w-[150px] md:left-1/2 md:-translate-x-1/2 md:top-10"
        />
        <div className="flex flex-row md:flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="grid gap-4 text-[18px] leading-[24px] md:text-[20px] md:leading-[28px] font-medium items-start justify-items-start md:justify-items-end lg:justify-items-start">
            <p className=" text-dark-100">Support</p>
            <Link href="/privacy-policy" className="text-grey-200">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-grey-200">
              Terms and Conditions
            </Link>
            <Link href="" className="text-grey-200">
              Meida Kit
            </Link>
          </div>

          <div className="grid gap-4 text-[18px] leading-[24px] md:text-[20px] md:leading-[28px] font-medium items-start justify-items-start md:justify-items-end lg:justify-items-start">
            <p className=" text-dark-100">Link</p>
            {/* TODO: docs link */}
            <Link href="" className="text-grey-200">
              Docs
            </Link>
            <Link href="https://www.nervos.org/" target="_blank" className="text-grey-200">
              Nervos
            </Link>
            <p className="text-grey-200 cursor-pointer" onClick={comingSoonMsg}>
              Download
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
