/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-export-i18n";

const PARTNERS = [
  {
    name: "d.id",
    image: "/images/d.id.png",
  },
  {
    name: "UTXOSwap",
    image: "/images/utxo-swap.png",
  },
  {
    name: "Seal",
    image: "/images/seal.png",
  },
  {
    name: "Beaf",
    image: "/images/beaf.png",
  },
  {
    name: "d.id",
    image: "/images/d.id.png",
  },
  {
    name: "Stable++",
    image: "/images/stablepp.svg",
  },
];

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[100px] pb-[20px]">
      <div className="utxo-global-container">
        <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-dark-100 font-medium text-center">
          {t("partners")}
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 md:mt-20">
          {PARTNERS.map((z, i) => (
            <div
              key={z.name}
              className="flex cursor-pointer border-[#F5F5F5]  border rounded-2xl gap-2 md:gap-4 sm:gap-3 p-2 sm:px-4 sm:py-2 lg:py-3 lg:px-5 items-center group"
            >
              <img
                src={z.image}
                alt={z.name}
                className="w-8 md:w-10 lg:w-[52px] group-hover:grayscale-0 grayscale transition-all"
              />
              <div className="text-base sm:text-2xl font-medium lg:text-4xl text-grey-200 group-hover:text-dark-100 transition-all">
                {z.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
