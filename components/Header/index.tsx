/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Popover } from "antd";
import { useTranslation } from "next-export-i18n";
import cn from "@/utils/cn";
import { NAVIGATIONS, CHROME_EXTENSION_LINK, MULTI_SIG_LINK } from "@/configs/common";
import IcnAlignLeft from "@/public/icons/icn-align-left.svg";
import IcnMultiSig from "@/public/icons/icn-multi-sig.svg";
import IcnTwitter from "@/public/icons/icn-twitter.svg";
import Button from "../Common/Button";
import LangSwitcher from "../LangSwitcher";
import bountyContestBanner from "@/public/images/bounty-contest-banner-02.png";
import useHashChange from "@/hooks/useHashChange";
import Image from "next/image";

const MenuMobile = ({ localHash }: { localHash: string }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const content = (
    <div className="grid gap-3 px-4 p-3 z-[9999]">
      {NAVIGATIONS.map((z, i) => (
        <Link
          key={i}
          href={z.href === "/#about-us" ? "/" : z.href}
          target={z.isExternal ? "_blank" : "_self"}
          className={cn(`text-grey-400 text-base transition-all hover:text-dark-100 font-medium`, {
            "text-dark-100": localHash === z.href || (z.href === "/#about-us" ? localHash === "/" : false),
          })}
        >
          {t(z.label)}
        </Link>
      ))}
    </div>
  );

  return (
    <Popover content={content} trigger="click" open={open} onOpenChange={handleOpenChange} placement="bottomLeft" arrow={false}>
      <div
        className={cn(
          `w-6 h-6 cursor-pointer group rounded-[4px] border border-dark-100 hover:bg-dark-100 transition-all flex justify-center items-center`
        )}
      >
        <IcnAlignLeft className="w-4 fill-dark-100 transition-all group-hover:fill-light-100" />
      </div>
    </Popover>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const localHash = useHashChange();
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <div className="relative">
          <div className="h-[100px] relative">
            <Image
              src={bountyContestBanner}
              alt="Bounty Contest"
              width={1400}
              height={100}
              className="w-full h-full absolute object-cover"
            />
          </div>
          <button className="absolute top-[6%] right-2" onClick={() => setShowBanner(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" width={24} height={24}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute top-[50%] right-[12%] sm:right-[8%] lg:right-[6%] -translate-y-1/2 text-center">
            <button className="text-sm px-4 rounded-lg flex items-center justify-center gap-2 sm:text-base border-none font-bold py-[11px] bg-gradient-to-br lg:w-[200px] from-lightYellow-200 via-lightYellow-300 to-lightYellow-100">
              Follow
              <IcnTwitter className="size-4 fill-black" />
            </button>
          </div>
        </div>
      )}
      <header className="bg-light-100 py-3 md:py-6 sticky top-0 z-[1000]">
        <div className="utxo-global-container flex justify-between items-center relative">
          <div className="flex gap-4 xl:hidden items-center">
            <MenuMobile localHash={localHash} />

            <LangSwitcher />
          </div>
          <div className="hidden xl:flex items-center gap-4 lg:gap-10">
            {NAVIGATIONS.map((z, i) => (
              <Link
                key={i}
                href={z.href === "/#about-us" ? "/" : z.href}
                target={z.isExternal ? "_blank" : "_self"}
                className={cn(`text-grey-400 text-base transition-all hover:text-dark-100 font-medium`, {
                  "text-dark-100": localHash === z.href || (z.href === "/#about-us" ? localHash === "/" : false),
                })}
              >
                {t(z.label)}
              </Link>
            ))}
          </div>
          <Link href="/" className="w-[100px] md:w-[120px] lg:w-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="/logo.png" alt="UTXO Global" />
          </Link>

          <div className="flex items-center gap-2">
            <Link href={MULTI_SIG_LINK} target="_blank" className="hidden xl:flex">
              <Button kind="secondary" size="small">
                {t("header.multiSig")}
              </Button>
            </Link>
            <Link href={MULTI_SIG_LINK} target="_blank" className="flex xl:hidden">
              <Button kind="secondary" className="!px-2 sm:px-3" size="small">
                <IcnMultiSig className="w-6" />
              </Button>
            </Link>

            <Link href={CHROME_EXTENSION_LINK} target="_blank" className="hidden xl:flex">
              <Button size="small">
                <div className="flex gap-2 items-center">
                  <img src="/images/chrome.png" alt="chrome" className="w-[20px]" />
                  <span>{t("header.chromeStore")}</span>
                </div>
              </Button>
            </Link>

            <Link href={CHROME_EXTENSION_LINK} target="_blank" className="flex xl:hidden ">
              <Button className="!px-2 sm:px-3" size="small">
                <div className="flex gap-2 items-center">
                  <img src="/images/chrome.png" alt="chrome" className="w-[24px]" />
                </div>
              </Button>
            </Link>
            <div className="ml-4 hidden xl:block">
              <LangSwitcher />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
