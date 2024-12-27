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
import { initialQuests } from "@/configs/point-system";
import { QuestItemComponentType } from "@/types/quest";
import useAuthenticate from "@/hooks/useAuthenticate";
import cn from "@/utils/cn";
import { sleep } from "@/utils/helpers";

export default function Quest() {
  const { token } = theme.useToken();
  const { t } = useTranslation();
  const { width } = useResizable();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userQuests, claimQuest, isClaiming } = useQuest();
  const { isLoggedIn } = useAuthenticate();
  const [questId, setQuestId] = useState<string | undefined>();

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

  const questItemComponent = (questInfo: QuestItemComponentType) => {
    return {
      key: questInfo.quest_id,
      label: (
        <div className="flex justify-between items-start">
          <h3 className="text-base md:text-2xl font-medium md:w-auto w-2/3">{questInfo.quest_name}</h3>
          <div className="text-base md:text-2xl font-bold">
            {questInfo.reward_points} {t("pointSystem.point")}
          </div>
        </div>
      ),
      children: (
        <div className="mx-4 pt-4 md:pt-6 pb-4 mb-0 border-t flex sm:flex-row flex-col justify-between gap-3 items-start">
          <div className="grid gap-3 w-full">
            {questInfo.duration && (
              <div className="flex items-end justify-between sm:justify-start gap-2 w-[80%] flex-wrap">
                <span className="sm:text-lg">{questInfo.duration}</span>
              </div>
            )}
            <div className="text-grey-200 font-medium text-base sm:text-lg">
              <div dangerouslySetInnerHTML={{ __html: questInfo.quest_description }}></div>
            </div>
            <div className="flex items-center gap-6 text-base sm:text-xl">
              {questInfo.guideLink && (
                <Link
                  href={questInfo.guideLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block underline hover:underline hover:text-orange-500"
                >
                  Quest Guide
                </Link>
              )}
              {questInfo.bonusReward && (
                <div className="flex items-center gap-2">
                  <div
                    className="text-[#EA8D01] underline cursor-pointer"
                    onClick={() => {
                      showModal();
                      setQuestId(questInfo.quest_id);
                    }}
                  >
                    Bonus Reward
                  </div>
                  <img src="/icons/icn-star.svg" alt="icnStar" className="size-6 sm:size-[34px]" />
                </div>
              )}
            </div>
          </div>
          {questInfo.questLink && !questInfo.isCheck ? (
            <Link
              href={questInfo.questLink}
              className={cn("max-w-[160px] w-full", {
                "cursor-not-allowed pointer-events-none": questInfo.disabled,
              })}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className={cn("!w-full !py-2", {
                  "!bg-[#D1D1D1] !border-[#D1D1D1] !text-grey-200 cursor-not-allowed": questInfo.disabled,
                })}
              >
                {t(questInfo.labelButton)}
              </Button>
            </Link>
          ) : (
            <>
              {isLoggedIn ? (
                <Button
                  className={cn("max-w-[160px] w-full !py-2", {
                    "!bg-[#D1D1D1] !border-[#D1D1D1] !text-grey-200 cursor-not-allowed": questInfo.is_claimed || questInfo.disabled,
                  })}
                  onClick={async () => {
                    questInfo.questLink && window.open(questInfo.questLink, "_blank");
                    await sleep(300);
                    claimQuest(questInfo.quest_id, 20000);
                  }}
                  disabled={questInfo.is_claimed || questInfo.disabled}
                  loading={isClaiming}
                >
                  {questInfo.is_claimed ? "Claimed" : t(questInfo.labelButton)}
                </Button>
              ) : (
                <ConnectButton className="max-w-[160px] w-full !py-2">{t("pointSystem.claim")}</ConnectButton>
              )}
            </>
          )}
        </div>
      ),
      style: panelStyle,
    };
  };

  const questList: CollapseProps["items"] = useMemo(() => {
    if (userQuests.length) {
      return initialQuests.map((item) => {
        return questItemComponent({
          ...item,
          is_claimed: userQuests.map((z) => z.quest_id).includes(item.quest_id),
        });
      });
    }
    return initialQuests.map((quest) => questItemComponent(quest));
  }, [userQuests, isClaiming]);

  return (
    <>
      <Collapse
        bordered={false}
        defaultActiveKey={["1", ...initialQuests.map((quest) => quest.quest_id)]}
        expandIcon={({ isActive }) => <CaretRightOutlined size={40} rotate={isActive ? 90 : 0} />}
        ghost
        items={questList}
      />
      <BonusReward isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} questId={questId} />
    </>
  );
}
