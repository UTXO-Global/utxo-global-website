"use client";

import AccountModal from "@/components/AccountModal";
import Button from "@/components/Common/Button";
import ConnectButton from "@/components/ConnectButton";
import { initialBadges } from "@/configs/persona";
import { initialQuests } from "@/configs/point-system";
import useAuthenticate from "@/hooks/useAuthenticate";
import useLogin from "@/hooks/useLogin";
import useProfile from "@/hooks/useProfile";
import { AppContext } from "@/providers/app-provider";
import { selectStorage } from "@/redux/features/storage/reducer";
import { useAppSelector } from "@/redux/hook";
import { shortAddress } from "@/utils/helpers";
import { message, Tooltip } from "antd";
import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

export default function PersonaPage() {
  const { isLoggedIn } = useAuthenticate();
  useLogin();
  useProfile();
  const { profile } = useContext(AppContext);
  const { addressLogged } = useAppSelector(selectStorage);
  const { t } = useTranslation();

  return (
    <div className="bg-warmIvory-200 min-h-screen">
      <header className="bg-white">
        <div className="utxo-global-container">
          <div className="flex items-center justify-between py-6">
            <div>
              <Image src="/persona-logo.svg" alt="persona logo" width={157} height={30} className="w-[120px] md:w-[157px]" />
            </div>
            {isLoggedIn ? (
              <AccountModal
                className="bg-transparent text-black hover:enabled:text-black"
                chevronClassName="fill-black"
                popupLabel="Disconnect"
                popupClassName="bg-warmIvory-300"
              />
            ) : (
              <ConnectButton className="!py-2 md:!py-3" />
            )}
          </div>
        </div>
      </header>
      <main className="utxo-global-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-7 gap-6 mt-5">
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            {isLoggedIn ? (
              <div className="p-4 md:p-6 bg-warmIvory-400 rounded-3xl h-full ">
                <div>
                  <img src="/images/persona-avatar.png" alt="persona avatar" className="w-full" />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>{shortAddress(addressLogged, 6)}</div>
                  <div className="bg-warmIvory-200 rounded-md cursor-pointer p-[2px]">
                    <svg
                      className="hover:scale-110"
                      width={24}
                      height={24}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        navigator.clipboard.writeText(addressLogged);
                        message.success(t("persona.copy_message"));
                      }}
                    >
                      <path
                        d="M4.11328 9.95064C4.11328 8.40144 4.7287 6.91569 5.82415 5.82024C6.9196 4.72479 8.40535 4.10938 9.95455 4.10938H17.0789C17.2809 4.10938 17.4747 4.18965 17.6176 4.33253C17.7605 4.47542 17.8408 4.66921 17.8408 4.87128C17.8408 5.07335 17.7605 5.26714 17.6176 5.41003C17.4747 5.55291 17.2809 5.63318 17.0789 5.63318H9.95455C8.80949 5.63318 7.71133 6.08806 6.90165 6.89774C6.09196 7.70742 5.63709 8.80558 5.63709 9.95064V17.1705C5.63709 17.3725 5.55682 17.5663 5.41393 17.7092C5.27105 17.8521 5.07726 17.9324 4.87519 17.9324C4.67312 17.9324 4.47932 17.8521 4.33644 17.7092C4.19355 17.5663 4.11328 17.3725 4.11328 17.1705V9.95064Z"
                        fill="black"
                      />
                      <path
                        d="M19.5058 7.70945C16.1955 7.34164 12.8545 7.34164 9.54417 7.70945C9.08607 7.76033 8.65867 7.9647 8.33147 8.28932C8.00427 8.61394 7.79652 9.03971 7.74201 9.49739C7.35162 12.8364 7.35162 16.2095 7.74201 19.5484C7.79652 20.0061 8.00427 20.4319 8.33147 20.7565C8.65867 21.0811 9.08607 21.2855 9.54417 21.3364C12.8366 21.7041 16.2134 21.7041 19.5058 21.3364C19.9639 21.2855 20.3913 21.0811 20.7185 20.7565C21.0457 20.4319 21.2535 20.0061 21.308 19.5484C21.6984 16.2095 21.6984 12.8364 21.308 9.49739C21.2535 9.03971 21.0457 8.61394 20.7185 8.28932C20.3913 7.9647 19.9639 7.76033 19.5058 7.70945Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  backgroundImage: "url('/images/bg-persona.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="p-8 md:p-10 rounded-3xl md:max-w-[320px] h-full flex-1"
              >
                <h2 className="font-bold text-3xl">{t("persona.welcome")}</h2>
                <p className="mt-4">{t("persona.description")}</p>
                <ConnectButton className="!py-2 md:!py-3 mt-4" />
              </div>
            )}
          </div>
          <div className="md:col-span-5">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              <div
                className="rounded-3xl p-4 md:p-6 overflow-hidden col-span-1 border border-warmIvory-400"
                style={{
                  backgroundImage: "url('/images/persona-my-point.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="font-medium">{t("persona.my_points")}</div>
                <div className="text-4xl font-bold mt-4">
                  {isLoggedIn ? profile.points : 0} {t("persona.points")}
                </div>
              </div>
              <div className="rounded-3xl p-4 md:p-6 overflow-hidden col-span-1 bg-warmIvory-300 hover:bg-warmIvory-400 transition-all border border-warmIvory-400">
                <div className="font-medium flex items-center justify-between gap-4">
                  <span>{t("persona.quest")}</span>
                  <div className="px-2 py-1 bg-[#97E9D5] rounded">{t("persona.quest_available")}</div>
                </div>
                <div className=" font-bold mt-4 flex justify-between items-end">
                  <div className="text-4xl flex items-center gap-2">
                    <div className="rounded-lg border-black border p-3">{initialQuests.length.toString().padStart(2, "0").at(0)}</div>
                    <div className="rounded-lg border-black border p-3">{initialQuests.length.toString().padStart(2, "0").at(1)}</div>
                  </div>
                  <Link href={"/point-system"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 md:size-10 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-warmIvory-100 mt-6 p-4 md:p-6 rounded-3xl border border-warmIvory-400">
              <div className="font-medium flex justify-between">
                <span>{t("persona.badges")}</span>
                <div className="px-2 py-1 bg-warmIvory-400 rounded">0 {t("persona.owned")}</div>
              </div>
              <div className="mt-6 flex items-center gap-8 md:gap-10 flex-wrap">
                {initialBadges.map((item) => (
                  <Tooltip
                    title={item.name}
                    key={item.id}
                    color="white"
                    overlayInnerStyle={{
                      color: "black",
                    }}
                  >
                    <div className="w-[70px] md:w-[100px] hover:-rotate-6 transition-all">
                      <img src={item.url} alt="badge" className="grayscale" />
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-warmIvory-400 mt-10 p-4 md:p-6 rounded-3xl flex items-center justify-between">
          <div>
            <img src="/persona-logo.svg" alt="logo" width={100} />
          </div>
          <div className="gap-4 flex">
            <Link href={profile.twitter_url || ""} target="_blank">
              <img
                src="/icons/icn-twitter-black.svg"
                alt="icon"
                className="cursor-pointer size-6 md:size-8 m-[10px] hover:scale-125 transition-all"
              />
            </Link>
            <Link href={""} target="_blank">
              <img
                src="/icons/icn-telegram-black.svg"
                alt="icon"
                className="cursor-pointer size-6 md:size-8 m-[10px] hover:scale-125 transition-all"
              />
            </Link>
            <Link href={""} target="_blank">
              <img
                src="/icons/icn-docs.svg"
                alt="icon"
                className="cursor-pointer size-6 md:size-8 m-[10px] hover:scale-125 transition-all"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
