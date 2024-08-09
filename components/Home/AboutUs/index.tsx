/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

import Button from "@/components/Common/Button";

import { CHROME_EXTENSION_LINK } from "@/configs/common";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="about-us">
      <div className="utxo-global-container pt-10 lg:pt-20 mb-[20%] md:mb-[4%] lg:mb-[12%] xl:mb-[16%] flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-[36px] leading-[28px] md:text-[50px] md:leading-[40px] lg:text-[64px] lg:leading-[52px] font-medium text-dark-100 text-center md:text-left">
            {t("aboutUs.title01")}{" "}
            <p className="mt-3 lg:mt-6">
              {t("aboutUs.title02")} -{" "}
              <span className="text-[20px] leading-[28px] md:text-[28px] md:leading-[40px] lg:text-[40px] lg:leading-[52px] text-orange-100">
                {t("aboutUs.description")}
              </span>
            </p>
          </h1>
          <div className="flex justify-center md:justify-start">
            <Link href={CHROME_EXTENSION_LINK} target="_blank" className="mt-6">
              <Button>
                <div className="flex gap-2 items-center">
                  <img
                    src="/images/chrome.png"
                    alt="chrome"
                    className="w-[24px]"
                  />
                  <span> {t("aboutUs.chromeStore")}</span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-[53%] mt-10 md:mt-0">
          <img src="/images/tx.png" alt="utxo global" className="w-full" />
          <div className="w-[59.7%] absolute right-0 top-0 translate-y-[8%] z-[999]">
            <img
              src="/images/wallet.png"
              alt="utxo global wallet"
              className="animate-shake transition-all"
              data-aos="zoom-in"
            />
          </div>

          <div className="w-[38%] absolute top-0 translate-y-[15%] left-0 translate-x-[7%] hidden md:block">
            <img
              src="/images/line.png"
              alt="line"
              className=""
              data-aos="fade-in"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
