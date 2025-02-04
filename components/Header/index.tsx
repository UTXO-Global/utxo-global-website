/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Popover } from "antd";
import { useTranslation } from "next-export-i18n";
import cn from "@/utils/cn";
import { NAVIGATIONS, CHROME_EXTENSION_LINK, BOUNTY_CONTEST_STAGE, pathWithoutHeader } from "@/configs/common";
import IcnAlignLeft from "@/public/icons/icn-align-left.svg";
import IcnTwitter from "@/public/icons/icn-twitter.svg";
import IcnFire from "@/public/icons/icn-fire.svg";
import Button from "../Common/Button";
import LangSwitcher from "../LangSwitcher";
import useHashChange from "@/hooks/useHashChange";
import { UTXO_GLOBAL_TWITTER_LINK } from "@/configs/social";
import { BountyContestStage } from "@/types/common";
import { usePathname } from "next/navigation";

const MenuMobile = ({ localHash }: { localHash: string }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
            "text-dark-100":
              localHash === z.href ||
              (z.href === "/#about-us" ? localHash === "/" && pathname === "/" : false) ||
              (z.href === "/bounty-contest" && pathname === "/bounty-contest/"),
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
  const pathname = usePathname();
  const [showBanner, setShowBanner] = useState(true);

  if (pathWithoutHeader.includes(pathname)) return null;
  return (
    <>
      {showBanner && BOUNTY_CONTEST_STAGE !== BountyContestStage.Ended && (
        <div className="relative">
          <img src="/images/bounty-contest-banner.svg" alt="Bounty Contest" className="w-full h-full" />

          <div className="absolute top-[50%] right-[6%] -translate-y-1/2 text-center">
            {BOUNTY_CONTEST_STAGE === BountyContestStage.Prepare ? (
              <Link
                href={UTXO_GLOBAL_TWITTER_LINK}
                target="_blank"
                className="text-xs rounded-md sm:rounded-lg flex items-center justify-center gap-1 sm:gap-2 sm:text-base border-none font-bold py-[2px] sm:py-[5px] lg:py-[11px] bg-gradient-to-br w-[60px] sm:w-[100px] lg:w-[150px] xl:w-[200px] from-light-yellow-200 via-light-yellow-300 to-light-yellow-100"
              >
                Follow
                <IcnTwitter className="size-3 sm:size-4 fill-black" />
              </Link>
            ) : (
              <Link
                href="/bounty-contest"
                className="text-xs rounded-md sm:rounded-lg flex items-center justify-center gap-1 sm:gap-2 sm:text-base border-none font-bold py-[2px] sm:py-[5px] lg:py-[11px] bg-gradient-to-br w-[60px] sm:w-[100px] lg:w-[150px] xl:w-[200px] from-light-yellow-200 via-light-yellow-300 to-light-yellow-100"
              >
                <span className="hidden lg:block">{t("bountyContest.joinNow")}</span>
                <span className="block lg:hidden">{t("bountyContest.join")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className="size-3 sm:size-6">
                  <path
                    d="M8.82125 3.71456C8.72502 3.62749 8.59858 3.58145 8.4689 3.58628C8.33921 3.59111 8.21654 3.64642 8.12705 3.7404C8.03757 3.83439 7.98834 3.95962 7.98988 4.08939C7.99141 4.21916 8.04359 4.34319 8.13528 4.43503L12.2823 8.38502L2.50751 8.38502C2.37554 8.38502 2.24899 8.43744 2.15568 8.53075C2.06237 8.62406 2.00994 8.75062 2.00994 8.88258C2.00994 9.01454 2.06237 9.1411 2.15568 9.23441C2.24899 9.32772 2.37554 9.38014 2.50751 9.38014L12.2823 9.38014L8.13528 13.3308C8.08793 13.3758 8.04991 13.4298 8.0234 13.4895C7.99689 13.5492 7.98241 13.6136 7.98078 13.6789C7.97914 13.7443 7.99039 13.8093 8.01389 13.8703C8.03738 13.9312 8.07265 13.987 8.1177 14.0343C8.16274 14.0817 8.21666 14.1197 8.2764 14.1462C8.33613 14.1727 8.4005 14.1872 8.46583 14.1888C8.53116 14.1905 8.59618 14.1792 8.65716 14.1557C8.71814 14.1322 8.7739 14.097 8.82125 14.0519L13.7438 9.36356C13.8513 9.26118 13.9214 9.1257 13.9428 8.97878C13.9543 8.91514 13.9541 8.84994 13.9422 8.78639C13.9205 8.63994 13.8504 8.50496 13.7431 8.40293L8.82125 3.71456Z"
                    fill="#0D0D0D"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      )}
      {/* <Link href="https://app.galxe.com/quest/UtxEtJGgUQixJcUxCrSWPA/GCN6btouy1" target="_blank" className="relative">
        <img src="/images/paw-print-banner.png" alt="xmas" className="w-full h-full" />
      </Link> */}
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
                className={cn(`text-grey-400 text-base transition-all hover:text-dark-100 flex gap-1 items-center font-medium`, {
                  "text-dark-100":
                    localHash === z.href ||
                    (z.href === "/#about-us" ? localHash === "/" && pathname === "/" : false) ||
                    (z.href === "/bounty-contest" && pathname === "/bounty-contest/"),
                  "text-orange-100 hover:text-orange-100/50": ["/point-system", "/persona"].includes(z.href),
                })}
              >
                {["/point-system", "/persona"].includes(z.href) && <IcnFire className="size-6" />}
                {t(z.label)}
              </Link>
            ))}
          </div>
          <Link href="/" className="w-[100px] md:w-[120px] lg:w-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="/logo.png" alt="UTXO Global" />
          </Link>

          <div className="flex items-center gap-2">
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
