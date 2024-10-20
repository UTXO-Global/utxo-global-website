/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

import IcnUTXOSwap from "@/public/icons/icn-partner-01.svg";
import IcnSeal from "@/public/icons/icn-partner-02.svg";
import IcnBeaf from "@/public/icons/icn-partner-03.svg";

import Button from "@/components/Common/Button";

const PARTNERS = [
  {
    name: "UTXOSwap",
    icon: <IcnUTXOSwap className="w-8 md:w-10 lg:w-[52px]" />,
  },
  {
    name: "Seal",
    icon: <IcnSeal className="w-8 md:w-10 lg:w-[52px]" />,
  },
  {
    name: "Beaf",
    icon: <IcnBeaf className="w-8 md:w-10 lg:w-[52px]" />,
  },
];

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[60px] pb-[20px]">
      <div className="utxo-global-container">
        <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-dark-100 font-medium text-center">
          {t("partners")}
        </h3>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-16 mt-4 md:mt-10">
          {PARTNERS.map((z, i) => (
            <div
              key={z.name}
              className="flex cursor-pointer border-[#F5F5F5] hover:border-grey-200/50 border-2 rounded-2xl gap-2 sm:gap-3 p-2 sm:px-4 sm:py-3 lg:py-4 lg:px-5 items-center"
            >
              <div>{z.icon}</div>
              <div className="text-base sm:text-2xl lg:text-4xl text-grey-200">{z.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
