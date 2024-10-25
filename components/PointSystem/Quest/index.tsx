import React, { useMemo, useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import Link from "next/link";
import Button from "@/components/Common/Button";
import { useTranslation } from "next-export-i18n";
import useResizable from "@/hooks/useResizeable";
import BonusReward from "@/components/PointSystem/BonusReward";
import useQuest from "@/hooks/useQuest";
import ConnectButton from "@/components/ConnectButton";
import { questSwapInitial, taskOnLink } from "@/configs/point-system";
import { QuestItemComponentType } from "@/types/quest";
import useAuthenticate from "@/hooks/useAuthenticate";
import cn from "@/utils/cn";

export default function Quest() {
  const { token } = theme.useToken();
  const { t } = useTranslation();
  const { width } = useResizable();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { quests, claimQuest } = useQuest();
  const { isLoggedIn } = useAuthenticate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const panelStyle: React.CSSProperties = {
    marginBottom: width > 640 ? "24px" : "16px",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
    fontFamily: token.fontFamily,
    padding: width > 640 ? "24px" : "0px",
  };

  const handleClaim = (questId: string) => {
    claimQuest(questId);
  };

  const questItemComponent = (questInfo: QuestItemComponentType) => {
    return {
      key: questInfo.quest_id,
      label: (
        <div className="flex items-center justify-between">
          <h3 className="text-base md:text-2xl font-medium">Quest {questInfo.quest_number}</h3>
          <div className="text-base md:text-2xl font-bold">
            {questInfo.reward_points} {t("pointSystem.point")}
          </div>
        </div>
      ),
      children: (
        <div className="mx-4 pt-4 md:pt-6 pb-4 mb-0 border-t flex sm:flex-row flex-col justify-between gap-3 items-start">
          <div className="grid gap-3 w-full">
            <h3 className="text-xl md:text-3xl font-medium">{questInfo.quest_name}</h3>
            <div className="text-grey-200 font-medium text-base sm:text-lg">{questInfo.quest_description}</div>
            <div className="flex items-center gap-6 text-base sm:text-xl">
              <Link
                href={questInfo.guideLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block underline hover:underline hover:text-orange-500"
              >
                Quest Guide
              </Link>
              <div className="flex items-center gap-2">
                <div className="text-[#EA8D01] underline cursor-pointer" onClick={showModal}>
                  Bonus Reward
                </div>
                <img src="/icons/icn-star.svg" alt="icnStar" className="size-6 sm:size-[34px]" />
              </div>
            </div>
          </div>
          {isLoggedIn ? (
            <Button
              className={cn("max-w-[110px] sm:max-w-[160px] w-full !py-2", {
                "!bg-[#D1D1D1] !border-[#D1D1D1] !text-grey-200  cursor-not-allowed": questInfo.is_claimed,
              })}
              onClick={() => {
                handleClaim(questInfo.quest_id);
              }}
              disabled={questInfo.is_claimed}
            >
              {questInfo.is_claimed ? "Claimed" : t("pointSystem.claim")}
            </Button>
          ) : (
            <ConnectButton className="max-w-[110px] sm:max-w-[160px] w-full !py-2">{t("pointSystem.claim")}</ConnectButton>
          )}
        </div>
      ),
      style: panelStyle,
    };
  };

  const questTaskOn: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center justify-between">
          <h3 className="text-base md:text-2xl font-medium">Quest 1</h3>
          <div className="text-base md:text-2xl font-bold">400 {t("pointSystem.point")}</div>
        </div>
      ),
      children: (
        <div className="mx-4 pt-4 md:pt-6 pb-4 mb-0  border-t flex flex-col sm:flex-row gap-3 justify-betwee3 items-start">
          <div className="grid gap-3 w-full">
            <div className="flex items-center justify-between sm:justify-start gap-6">
              <h3 className="flex items-center gap-2 text-xl md:text-3xl font-medium">
                TaskOn{" "}
                {/* <Link href="#">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.5 2.25H21.75V7.5M20.625 3.375L15 9M12.75 3.75H6C5.40326 3.75 4.83097 3.98705 4.40901 4.40901C3.98705 4.83097 3.75 5.40326 3.75 6V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V11.25"
                      stroke="#FF7201"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link> */}
              </h3>
              <span className="sm:text-xl">(Oct 30 - Nov 4)</span>
            </div>
            <div className="text-grey-200 font-medium text-base sm:text-lg">
              Complete these basic social media tasks on TaskOn to earn up to 400 points.
            </div>
          </div>
          <Link href={taskOnLink} className="max-w-[110px] sm:max-w-[160px] w-full" target="_blank" rel="noreferrer">
            <Button className="!w-full !py-2">{t("pointSystem.go")}</Button>
          </Link>
        </div>
      ),
      style: panelStyle,
    },
  ];

  const questList: CollapseProps["items"] = useMemo(() => {
    if (quests.length <= 0) {
      return questTaskOn.concat(questSwapInitial.map((quest) => questItemComponent(quest)));
    }

    return questTaskOn.concat(
      quests.map((quest, index) =>
        questItemComponent({
          quest_id: quest.quest_id,
          quest_name: quest.quest_name,
          quest_description: quest.quest_description,
          guideLink: questSwapInitial[index].guideLink,
          is_claimed: quest.is_claimed,
          quest_number: questSwapInitial[index].quest_number,
          reward_points: quest.reward_points,
        })
      )
    );
  }, [quests]);

  return (
    <>
      <Collapse
        bordered={false}
        defaultActiveKey={["1", ...questSwapInitial.map((quest) => quest.quest_id)]}
        expandIcon={({ isActive }) => <CaretRightOutlined size={40} rotate={isActive ? 90 : 0} />}
        ghost
        items={questList}
      />
      <BonusReward isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    </>
  );
}
