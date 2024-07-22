/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { TWITTER_LINK, TELEGRAM_LINK } from "@/configs/social";

import Button from "@/components/Common/Button";
import IcnTwitter from "@/public/icons/icn-twitter.svg";
import IcnTelegram from "@/public/icons/icn-telegram.svg";

const Features = () => {
  return (
    <section className="pt-[100px] pb-[60px]" id="features">
      <div className="utxo-global-container">
        <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-dark-100 font-medium text-center">
          Explore our <span className="text-orange-100">Features</span>
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
              <img
                src="/images/portfolio-01.png"
                alt="portfolio management"
                className="w-[37.5%] z-[1]"
                data-aos="slide-up"
              />
              <img
                src="/images/portfolio-03.png"
                alt="portfolio management"
                className="w-[37.5%] z-[1]"
                data-aos="slide-up"
              />
              <div className="w-[37.5%] absolute left-1/2 bottom-0 -translate-x-1/2 z-[2]">
                <img
                  src="/images/portfolio-02.png"
                  alt="portfolio management"
                  data-aos-delay="200"
                  data-aos="slide-up"
                />
              </div>
            </div>
          </div>
          <div className="py-[30px] lg:py-[82px] xl:py-[100px] pr-[34px] pl-6 lg:w-[40%] xl:w-1/3">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M29.8501 2.39349C29.8251 2.28099 29.7376 2.19349 29.6314 2.16224C25.9689 1.26849 17.5126 4.45599 12.9314 9.03725C12.1126 9.84975 11.3689 10.731 10.7064 11.6685C9.29387 11.5435 7.88137 11.6497 6.67512 12.1747C3.27512 13.6685 2.28762 17.5747 2.00637 19.2497C1.95012 19.5747 2.16887 19.8872 2.50012 19.9435C2.55637 19.9497 2.61262 19.956 2.66887 19.9497L8.12512 19.3497C8.13137 19.7622 8.15637 20.1747 8.20012 20.581C8.22512 20.8622 8.35637 21.131 8.55637 21.331L10.6689 23.4372C10.8689 23.6372 11.1376 23.7685 11.4189 23.7935C11.8251 23.8372 12.2314 23.8622 12.6439 23.8685L12.0439 29.3185C12.0064 29.6497 12.2501 29.9497 12.5814 29.981C12.6376 29.9872 12.6939 29.9872 12.7439 29.9747C14.4189 29.706 18.3314 28.7185 19.8189 25.3185C20.3439 24.1122 20.4501 22.706 20.3314 21.2997C21.2751 20.6372 22.1564 19.8872 22.9689 19.0747C27.5626 14.506 30.7314 6.23724 29.8501 2.39349ZM22.6189 13.6185C21.4501 14.7872 19.5501 14.7935 18.3814 13.6185C17.2064 12.4497 17.2064 10.5497 18.3814 9.37474C19.5501 8.19974 21.4501 8.19974 22.6251 9.37474C23.7939 10.5497 23.7939 12.4497 22.6189 13.6185Z"
                  fill="#FF7201"
                />
                <path
                  d="M10.525 24.9613C10.1812 25.3051 9.63125 25.4363 8.96875 25.5551C7.48125 25.8051 6.16875 24.5238 6.4375 23.0238C6.5375 22.4551 6.84375 21.6551 7.03125 21.4676C7.1375 21.3613 7.14375 21.1863 7.0375 21.0801C6.975 21.0176 6.89375 20.9863 6.80625 20.9988C5.975 21.0988 5.2 21.4801 4.6125 22.0676C3.1375 23.5426 3 28.9988 3 28.9988C3 28.9988 8.4625 28.8613 9.93125 27.3863C10.525 26.7926 10.9 26.0238 11 25.1863C11.025 24.9301 10.7062 24.7738 10.525 24.9613Z"
                  fill="#FF7201"
                />
              </svg>
              <p className="text-base text-dark-100 font-medium">Extension</p>
            </div>
            <h6 className="text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] text-dark-100 font-medium mt-[20px]">
              Portfolio Management
            </h6>
            <p className="mt-2 text-grey-200 text-base">
              Easily view and manage your UTXOs directly within an intuitive
              dashboard.
            </p>
          
          </div>
        </div>
        <div className="mt-4 md:mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-grey-100 rounded-[16px] overflow-hidden pt-6 px-6">
            <h6 className="text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-medium text-orange-100 text-center">
              Send & Receive
            </h6>
            <p className="text-base text-grey-200 max-w-[398px] mx-auto mt-2 text-center">
              Experience a smooth and secure way to send, receive, and manage
              your assets.
            </p>
            <div className="mt-[22px] flex justify-center">
              <img
                src="/images/send.png"
                alt="send"
                className="w-[39%]"
                data-aos="slide-up"
              />
              <img
                src="/images/receive.png"
                alt="receive"
                className="w-[39%]"
                data-aos="slide-up"
                data-aos-delay="100"
              />
            </div>
          </div>
          <div className="bg-grey-100 rounded-[16px] overflow-hidden pt-6 px-6">
            <h6 className="text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-medium text-orange-100 text-center">
              Explore
            </h6>
            <p className="text-base text-grey-200 max-w-[398px] mx-auto mt-2 text-center">
              Dive into a curated selection of DApps to revolutionize the way
              you manage your assets.
            </p>
            <div className="mt-[22px] flex justify-center">
              <img
                src="/images/explore.png"
                alt="explore"
                className="w-[49.2%]"
                data-aos="slide-up"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
