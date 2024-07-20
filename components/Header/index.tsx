/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Popover } from "antd";

import cn from "@/utils/cn";
import { NAVIGATIONS } from "@/configs/common";
import IcnAlignLeft from "@/public/icons/icn-align-left.svg";
import Button from "../Common/Button";

import useHashChange from "@/hooks/useHashChange";

const MenuMobile = ({ localHash }: { localHash: string }) => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const content = (
    <div className="grid gap-3 px-4">
      {NAVIGATIONS.map((z, i) => (
        <Link
          key={i}
          href={z.href === "/#about-us" ? "/" : z.href}
          className={cn(
            `text-grey-400 text-base transition-all hover:text-dark-100 font-medium`,
            {
              "text-dark-100": localHash === z.href,
            }
          )}
        >
          {z.label}
        </Link>
      ))}
    </div>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      placement="bottomLeft"
      arrow={false}
    >
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
  const localHash = useHashChange();

  return (
    <header className="bg-light-100 py-3 md:py-6 sticky top-0 z-[9999]">
      <div className="utxo-global-container flex justify-between items-center relative">
        <div className="flex gap-4 md:hidden items-center">
          <MenuMobile localHash={localHash} />
        </div>
        <div className="hidden md:flex items-center gap-4 lg:gap-10">
          {NAVIGATIONS.map((z, i) => (
            <Link
              key={i}
              href={z.href === "/#about-us" ? "/" : z.href}
              className={cn(
                `text-grey-400 text-base transition-all hover:text-dark-100 font-medium`,
                {
                  "text-dark-100": localHash === z.href,
                }
              )}
            >
              {z.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="w-[100px] md:w-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img src="/logo.png" alt="UTXO Global" />
        </Link>

        <div className="flex items-center gap-2">
          {/* <Button kind="secondary">Launch Multi-Sig Wallet</Button> */}
          <Button className="hidden lg:flex">
            <div className="flex gap-2 items-center">
              <img src="/images/chrome.png" alt="chrome" className="w-[24px]" />
              <span>Download for Chrome</span>
            </div>
          </Button>
          <Button className="flex lg:hidden !px-1 sm:px-3" size="small">
            <div className="flex gap-2 items-center">
              <img src="/images/chrome.png" alt="chrome" className="w-[24px]" />
              <span className="hidden sm:block">Download for Chrome</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
