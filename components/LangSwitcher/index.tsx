"use client";

import React, { useEffect, useState } from "react";
import { Popover } from "antd";
import { LanguageSwitcher } from "next-export-i18n";

import cn from "@/utils/cn";

const LangSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<string>("");

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    setCurrentLang(localStorage.getItem("next-export-i18n-lang") as any);
  }, []);

  const content = (
    <div className="grid py-[10px] text-[14px] leading-[18px] w-[110px] mt-2">
      <LanguageSwitcher lang="en">
        <div
          className={cn(
            `text-[#787575] text-base transition-colors hover:text-dark-100 px-4 py-2 hover:bg-[#F5F5F5] cursor-pointer`,
            {
              "text-dark-100": currentLang === "en",
            }
          )}
          onClick={() => {
            hide();
            setCurrentLang("en");
          }}
        >
          English
        </div>
      </LanguageSwitcher>
      <LanguageSwitcher lang="ch">
        <div
          className={cn(
            `text-[#787575] text-base transition-colors hover:text-dark-100 px-4 py-2 hover:bg-[#F5F5F5] cursor-pointer`,
            {
              "text-dark-100": currentLang === "ch",
            }
          )}
          onClick={() => {
            hide();
            setCurrentLang("ch");
          }}
        >
          中文
        </div>
      </LanguageSwitcher>
    </div>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      zIndex={10000}
      arrow={false}
      placement="bottomRight"
      className="lang-switcher"
    >
      <div className="flex gap-1 items-center cursor-pointer">
        <div className="uppercase text-base font-medium text-[#BDBDBD] w-6">
          {currentLang || "en"}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 2.05078C13 2.05078 16 6.00078 16 12.0008C16 18.0008 13 21.9508 13 21.9508M11 21.9508C11 21.9508 8 18.0008 8 12.0008C8 6.00078 11 2.05078 11 2.05078M2.63 15.5008H21.37M2.63 8.50078H21.37"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Popover>
  );
};

export default LangSwitcher;
