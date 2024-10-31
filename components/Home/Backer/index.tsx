/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

const BACKERS = [
  {
    name: "ckb eco fund",
    images: "/images/ckb-eco-fund.png",
    websiteLink: "https://www.ckbeco.fund/",
    width: 150,
  },
  {
    name: "nexum",
    images: "/images/nexum.png",
    websiteLink: "https://nexm.io/",
    width: 200,
  },
];

const Backer = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[100px] pb-[20px]">
      <div className="utxo-global-container">
        <div
          className="rounded-[16px] px-10 xl:px-[116px] py-10 flex flex-col md:flex-row justify-between items-center"
          style={{
            background: `linear-gradient(169deg, #D3D1CE -19.12%, #E0DFDE 16.17%, #EFEFEF 55.97%)`,
          }}
        >
          <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-dark-100 font-medium text-center">
            {t("backedBy")}
          </h3>
          <div className="flex items-center gap-[13px] lg:gap-[26px] mt-6 md:mt-0 justify-center">
            {BACKERS.map((z, i) => (
              <Link
                href={z.websiteLink}
                key={i}
                target="_blank"
                className="group"
               
              >
                <img
                  src={z.images}
                  alt="ckb eco fund"
                  className="opacity-100 group-hover:opacity-60 transition-all"
                  style={{
                    width: `${z.width}px`,
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backer;
