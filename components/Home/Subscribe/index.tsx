"use client";

import { useState } from "react";
import { useTranslation } from "next-export-i18n";

import Button from "@/components/Common/Button";

import useSubscribe from "@/hooks/useSubscribe";

const Subscribe = () => {
  const { t } = useTranslation();
  const { isLoading, subscribe: _subscribe } = useSubscribe();
  const [emailInput, setEmailInput] = useState<string>("");

  const onChangeEmailInput = (e: any) => {
    setEmailInput(e.target.value);
  };

  const reset = () => {
    setEmailInput("");
  };

  const subscribe = (e: any) => {
    _subscribe(emailInput, reset);
    e.preventDefault();
  };

  return (
    <section className="pt-[100px]">
      <div
        className="bg-cover bg-no-repeat bg-center py-[100px] md:py-[144px] bg-dark-100"
        style={{
          backgroundImage: `url(/images/subscribe-bg.png)`,
        }}
      >
        <div className="utxo-global-container">
          <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-light-100 font-medium text-center">
            {t("subscribe.title01")}{" "}
            <span className="text-orange-100">{t("subscribe.title02")}</span>
          </h3>
          <p className="mt-6 text-[18px] leading-[24px] md:text-[20px] md:leading-[28px] text-grey-300 text-center font-medium">
            {t("subscribe.description01")}{" "}
            <span className="text-light-100 font-bold">
              {t("subscribe.description02")}
            </span>{" "}
            {t("subscribe.description03")}
          </p>
          <form
            onSubmit={subscribe}
            className="mt-6 md:mt-10 flex justify-center items-center gap-2"
          >
            <div className="w-[230px] sm:w-[300px] lg:w-[500px] border-[0.5px] border-[#BDBDBD] rounded-[8px] px-4 py-2 flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-6"
              >
                <path
                  d="M7 9L10.75 12C11.1047 12.284 11.5456 12.4388 12 12.4388C12.4544 12.4388 12.8953 12.284 13.25 12L17 9M21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                className="flex-1 bg-transparent border-none outline-none text-base placeholder:text-grey-300 text-light-100 py-[3.5px]"
                placeholder="yourmail@mail.com"
                value={emailInput}
                onChange={onChangeEmailInput}
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              kind="light"
              className="!px-2 sm:!px-[72px]"
              loading={isLoading}
              disabled={isLoading}
            >
              {t("subscribe.signUp")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
