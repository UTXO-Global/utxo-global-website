/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

import Button from "@/components/Common/Button";
import { MULTI_SIG_LINK, DOC_LINK } from "@/configs/common";

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[100px] pb-[20px]" id="features">
      <div className="utxo-global-container">
        <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-dark-100 font-medium text-center">
          {t("feature.title01")} <span className="text-orange-100">{t("feature.title02")}</span>
        </h3>
        <div className="mt-10 md:mt-20 rounded-[16px] bg-grey-100 overflow-hidden flex flex-col lg:flex-row">
          <div className="flex-1 relative px-[65px] flex justify-between items-end pt-10 md:pt-20 lg:pt-0 overflow-hidden">
            <div
              className="mix-blend-exclusion bg-no-repeat bg-cover bg-center absolute w-full h-full top-0 left-0"
              style={{
                backgroundImage: `url(/images/portfolio-bg.png)`,
              }}
            ></div>
            <div className="flex justify-between items-end relative">
              <img src="/images/portfolio-01.png" alt="portfolio management" className="w-[37.5%] z-[1]" data-aos="slide-up" />
              <img src="/images/portfolio-03.png" alt="portfolio management" className="w-[37.5%] z-[1]" data-aos="slide-up" />
              <div className="w-[37.5%] absolute left-1/2 bottom-0 -translate-x-1/2 z-[2]">
                <img src="/images/portfolio-02.png" alt="portfolio management" data-aos-delay="200" data-aos="slide-up" />
              </div>
            </div>
          </div>
          <div className="py-[30px] lg:py-[82px] xl:py-[100px] pr-[34px] pl-6 lg:w-[40%] xl:w-1/3">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M29.8501 2.39349C29.8251 2.28099 29.7376 2.19349 29.6314 2.16224C25.9689 1.26849 17.5126 4.45599 12.9314 9.03725C12.1126 9.84975 11.3689 10.731 10.7064 11.6685C9.29387 11.5435 7.88137 11.6497 6.67512 12.1747C3.27512 13.6685 2.28762 17.5747 2.00637 19.2497C1.95012 19.5747 2.16887 19.8872 2.50012 19.9435C2.55637 19.9497 2.61262 19.956 2.66887 19.9497L8.12512 19.3497C8.13137 19.7622 8.15637 20.1747 8.20012 20.581C8.22512 20.8622 8.35637 21.131 8.55637 21.331L10.6689 23.4372C10.8689 23.6372 11.1376 23.7685 11.4189 23.7935C11.8251 23.8372 12.2314 23.8622 12.6439 23.8685L12.0439 29.3185C12.0064 29.6497 12.2501 29.9497 12.5814 29.981C12.6376 29.9872 12.6939 29.9872 12.7439 29.9747C14.4189 29.706 18.3314 28.7185 19.8189 25.3185C20.3439 24.1122 20.4501 22.706 20.3314 21.2997C21.2751 20.6372 22.1564 19.8872 22.9689 19.0747C27.5626 14.506 30.7314 6.23724 29.8501 2.39349ZM22.6189 13.6185C21.4501 14.7872 19.5501 14.7935 18.3814 13.6185C17.2064 12.4497 17.2064 10.5497 18.3814 9.37474C19.5501 8.19974 21.4501 8.19974 22.6251 9.37474C23.7939 10.5497 23.7939 12.4497 22.6189 13.6185Z"
                  fill="#FF7201"
                />
                <path
                  d="M10.525 24.9613C10.1812 25.3051 9.63125 25.4363 8.96875 25.5551C7.48125 25.8051 6.16875 24.5238 6.4375 23.0238C6.5375 22.4551 6.84375 21.6551 7.03125 21.4676C7.1375 21.3613 7.14375 21.1863 7.0375 21.0801C6.975 21.0176 6.89375 20.9863 6.80625 20.9988C5.975 21.0988 5.2 21.4801 4.6125 22.0676C3.1375 23.5426 3 28.9988 3 28.9988C3 28.9988 8.4625 28.8613 9.93125 27.3863C10.525 26.7926 10.9 26.0238 11 25.1863C11.025 24.9301 10.7062 24.7738 10.525 24.9613Z"
                  fill="#FF7201"
                />
              </svg>
              <p className="text-base text-dark-100 font-medium">{t("feature.portfolio.extension")}</p>
            </div>
            <h6 className="text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] text-dark-100 font-medium mt-[20px]">
              {t("feature.portfolio.title")}
            </h6>
            <p className="mt-2 text-grey-200 text-base">{t("feature.portfolio.description")}</p>
          </div>
        </div>
        <div
          className="my-4 md:my-[60px] border border-[#F5F5F5] rounded-[24px] pl-6 lg:pl-[127px] pb-[17px] pr-5 pt-[30px] md:pt-0 flex flex-col md:flex-row items-center"
          style={{
            background: `linear-gradient(270deg, #FFF 38.75%, #EBEBEB 75.19%, #F4F4F4 100%)`,
          }}
        >
          <div className="flex-1">
            <h6 className="text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-medium text-orange-100">
              {t("feature.multiSig.title01")} <span className="text-dark-100">{t("feature.multiSig.title02")}</span>
            </h6>
            <p className="text-base text-grey-200 mt-2 mb-6 md:mb-10">{t("feature.multiSig.description")}</p>
            <Link href={MULTI_SIG_LINK} target="_blank" className="">
              <Button>
                <div className="flex items-center gap-2">
                  <span>{t("feature.multiSig.getStarted")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8.84471 2.80503C8.74801 2.71753 8.62095 2.67128 8.49063 2.67613C8.36031 2.68098 8.23704 2.73656 8.14711 2.831C8.05719 2.92545 8.00772 3.0513 8.00926 3.1817C8.01081 3.3121 8.06324 3.43674 8.15537 3.52903L12.3227 7.49837L2.50004 7.49837C2.36743 7.49837 2.24026 7.55105 2.14649 7.64481C2.05272 7.73858 2.00004 7.86576 2.00004 7.99837C2.00004 8.13098 2.05272 8.25815 2.14649 8.35192C2.24026 8.44569 2.36743 8.49837 2.50004 8.49837L12.3227 8.49837L8.15537 12.4684C8.10779 12.5136 8.06959 12.5678 8.04295 12.6278C8.01631 12.6879 8.00176 12.7526 8.00012 12.8182C7.99848 12.8839 8.00978 12.9492 8.03339 13.0105C8.057 13.0718 8.09245 13.1278 8.13771 13.1754C8.18297 13.223 8.23716 13.2612 8.29719 13.2878C8.35721 13.3144 8.4219 13.329 8.48755 13.3306C8.5532 13.3323 8.61853 13.321 8.67981 13.2974C8.74109 13.2737 8.79713 13.2383 8.84471 13.193L13.7914 8.4817C13.8994 8.37882 13.9699 8.24267 13.9914 8.09504C14.0029 8.03109 14.0027 7.96557 13.9907 7.9017C13.9689 7.75454 13.8985 7.6189 13.7907 7.51637L8.84471 2.80503Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Button>
            </Link>
          </div>
          <img src="/images/multi-sig.png" alt="multi sig" className="w-[400px] lg:w-[500px] xl:w-[690px] mt-6 md:mt-0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-grey-100 rounded-[16px] overflow-hidden pt-6 px-6">
            <h6 className="text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-medium text-orange-100 text-center">
              {t("feature.send&Receive.title")}
            </h6>
            <p className="text-base text-grey-200 max-w-[398px] mx-auto mt-2 text-center">{t("feature.send&Receive.description")}</p>
            <div className="mt-[22px] flex justify-center">
              <img src="/images/send.png" alt="send" className="w-[39%]" data-aos="slide-up" />
              <img src="/images/receive.png" alt="receive" className="w-[39%]" data-aos="slide-up" data-aos-delay="100" />
            </div>
          </div>
          <div className="bg-grey-100 rounded-[16px] overflow-hidden pt-6 px-6">
            <h6 className="text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-medium text-orange-100 text-center">
              {t("feature.explore.title")}
            </h6>
            <p className="text-base text-grey-200 max-w-[398px] mx-auto mt-2 text-center">{t("feature.explore.description")}</p>
            <div className="mt-[22px] flex justify-center">
              <img src="/images/explore.png" alt="explore" className="w-[49.2%]" data-aos="slide-up" />
            </div>
          </div>
        </div>
        <div
          className="mt-4 md:mt-[60px] flex items-center justify-between pt-[30px] md:pt-[61px] pb-[17px] md:pb-[39px] pl-6 lg:pl-[127px] rounded-[24px] pr-5 md:pr-[42px] flex-col md:flex-row"
          style={{
            background: `linear-gradient(270deg, #FFF 38.75%, #EBEBEB 75.19%, #F4F4F4 100%)`,
          }}
        >
          <div>
            <h6 className="text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-medium text-orange-100">
              {t("feature.indexer.title")}
            </h6>
            <p className="text-base text-grey-200 mt-2 mb-6 md:mb-10 max-w-[300px]">{t("feature.indexer.description")}</p>
            <Link href="/indexer" target="_blank" className="">
              <Button>
                <div className="flex items-center gap-2">
                  <span>{t("feature.indexer.btnLabel")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8.84471 2.80503C8.74801 2.71753 8.62095 2.67128 8.49063 2.67613C8.36031 2.68098 8.23704 2.73656 8.14711 2.831C8.05719 2.92545 8.00772 3.0513 8.00926 3.1817C8.01081 3.3121 8.06324 3.43674 8.15537 3.52903L12.3227 7.49837L2.50004 7.49837C2.36743 7.49837 2.24026 7.55105 2.14649 7.64481C2.05272 7.73858 2.00004 7.86576 2.00004 7.99837C2.00004 8.13098 2.05272 8.25815 2.14649 8.35192C2.24026 8.44569 2.36743 8.49837 2.50004 8.49837L12.3227 8.49837L8.15537 12.4684C8.10779 12.5136 8.06959 12.5678 8.04295 12.6278C8.01631 12.6879 8.00176 12.7526 8.00012 12.8182C7.99848 12.8839 8.00978 12.9492 8.03339 13.0105C8.057 13.0718 8.09245 13.1278 8.13771 13.1754C8.18297 13.223 8.23716 13.2612 8.29719 13.2878C8.35721 13.3144 8.4219 13.329 8.48755 13.3306C8.5532 13.3323 8.61853 13.321 8.67981 13.2974C8.74109 13.2737 8.79713 13.2383 8.84471 13.193L13.7914 8.4817C13.8994 8.37882 13.9699 8.24267 13.9914 8.09504C14.0029 8.03109 14.0027 7.96557 13.9907 7.9017C13.9689 7.75454 13.8985 7.6189 13.7907 7.51637L8.84471 2.80503Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Button>
            </Link>
          </div>
          <img src="/images/indexer.png" alt="indexer" className="w-full md:w-[55%] mt-6 md:mt-0" />
        </div>
      </div>
    </section>
  );
};

export default Features;
