/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import IcnTwitter from "@/public/icons/icn-twitter.svg";
import IcnTelegram from "@/public/icons/icn-telegram.svg";
import IcnGlobal from "@/public/icons/icn-global.svg";
import IcnDiscord from "@/public/icons/icn-discord.svg";

import Button from "@/components/Common/Button";

const BACKERS = [
  {
    name: "ckb eco fund",
    images: "/images/ckb-eco-fund.png",
    socials: [
      {
        name: "website",
        icon: <IcnGlobal className="w-3 md:w-6" />,
        link: "https://www.ckbeco.fund/",
      },
      {
        name: "twitter",
        icon: <IcnTwitter className="w-3 md:w-6" />,
        link: "https://twitter.com/CKBEcoFund",
      },
      {
        name: "telegram",
        icon: <IcnTelegram className="w-3 md:w-6" />,
        link: "https://t.me/ckb_community",
      },
      {
        name: "discord",
        icon: <IcnDiscord className="w-3 md:w-6" />,
        link: "https://discord.com/invite/FKh8Zzvwqa",
      },
    ],
  },
];

const Backer = () => {
  return (
    <section className="pt-[60px] pb-[20px]">
      <div className="utxo-global-container">
        <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-dark-100 font-medium text-center">
          Backed by
        </h3>
        <div className="flex justify-center gap-4 mt-4 md:mt-10">
          {BACKERS.map((z, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={z.images}
                alt="ckb eco fund"
                className="w-[120px] md:w-[180px] lg:w-[240px]"
              />
              <div className="mt-2 md:mt-4 flex gap-2 md:gap-6 justify-center">
                {z.socials.map((k, j) => (
                  <Link key={j} href={k.link} target="_blank">
                    <Button className="!px-1 !py-1 md:!px-3 md:!py-3 !rounded-lg">
                      {k.icon}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Backer;
