import { QuestItemComponentType } from "@/types/quest";
import { PointSystemTab } from "@/types/common";

export const utxoSwapExtensionQuestGuide =
  "https://nexmio.notion.site/Quest-2-Swap-in-UTXO-Global-Wallet-100-points-ec13ea718b4746e583018f2a4a9849a3?pvs=4";
export const utxoSwapWebpageQuestGuide =
  "https://nexmio.notion.site/Quest-3-Swap-on-the-UTXOSwap-Webpage-100-points-0f6464b8a318477faa535ce66211eeec?pvs=4";
export const galxeLink = "https://app.galxe.com/quest/nNN5UQTfPQzaVHwzqffmtN/GCmxvtVrGq";
export const ckConQuestGuideLink =
  "https://www.notion.so/Quest-4-CKCon-Common-Knowledge-Conference-200-points-36b8ced7ee184561a6751129174244bb?pvs=4";
export const ckConQuestLink = "https://t.me/ckcat_bot";

export const lastRewardData = [
  {
    address: "ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqvkthpvhhxq8mpcwgv2t7nmn7nhs6xafrgs2s4w4",
    date: "Nov 6, 2024",
    rewards: 350,
    iconReward: "/icons/icn-seal-token.svg",
    iconBonusReward: "/icons/icn-last-reward-point.svg",
  },
  {
    address: "ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqdnu5pcspyxza3wsepht4xu5gzg4asqr9s7alwrf",
    date: "Nov 6, 2024",
    rewards: 150,
    iconReward: "/icons/icn-seal-token.svg",
    iconBonusReward: "/icons/icn-last-reward-point.svg",
  },
  {
    address: "ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsq0cehfd205ng3ey2hwhuffyv23urhy5nlqcat8zk",
    date: "Nov 6, 2024",
    rewards: 50,
    iconReward: "/icons/icn-seal-token.svg",
    iconBonusReward: "/icons/icn-last-reward-point.svg",
  },
  {
    address: "ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqt0xzvdfah3s7m8uy52uxl9enket48krus2qjj4r",
    date: "Sep 17, 2024",
    rewards: 4000,
    iconReward: "/icons/icn-nervos.svg",
    iconBonusReward: "/icons/icn-first-rank.svg",
  },
  {
    address: "ckb1qrgqep8saj8agswr30pls73hra28ry8jlnlc3ejzh3dl2ju7xxpjxqgqqyrjcmkn42y68d8muq8509xvq0pyzwvv7uv65r0z",
    date: "Sep 17, 2024",
    rewards: 2500,
    iconReward: "/icons/icn-nervos.svg",
    iconBonusReward: "/icons/icn-second-rank.svg",
  },
  {
    address: "ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqftfnj09af485x9memjqyx9xnsh499mnagksw0rm",
    date: "Sep 17, 2024",
    rewards: 750,
    iconReward: "/icons/icn-nervos.svg",
    iconBonusReward: "/icons/icn-third-rank.svg",
  },
  {
    address: "ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqfcj85g6yzzkhyllg290wf7cqqhv6rjrcsx25j53",
    date: "Sep 17, 2024",
    rewards: 750,
    iconReward: "/icons/icn-nervos.svg",
    iconBonusReward: "/icons/icn-third-rank.svg",
  },
];

export const pointSystemTabs = [
  {
    key: PointSystemTab.Quest,
    label: "pointSystem.quest",
    isCommingSoon: false,
  },
  {
    key: PointSystemTab.LeaderBoard,
    label: "pointSystem.leaderboard",
    isCommingSoon: false,
  },
];

export const initialQuests: QuestItemComponentType[] = [
  {
    quest_id: "utxo-swap-extension",
    quest_name: "Swap in UTXO Global Wallet Extension",
    quest_description: "Use UTXO Global wallet to swap and receive 100 points.",
    guideLink: utxoSwapExtensionQuestGuide,
    is_claimed: false,
    quest_number: 2,
    reward_points: 100,
    duration: null,
    bonusReward: true,
    questLink: null,
    disabled: false,
    labelButton: "pointSystem.claim",
  },
  {
    quest_id: "utxo-swap-website",
    quest_name: "Swap on the UTXOSwap Webpage",
    quest_description: "Use UTXOSwap, connect to UTXO Global wallet, and swap to receive 100 points.",
    guideLink: utxoSwapWebpageQuestGuide,
    is_claimed: false,
    quest_number: 3,
    reward_points: 100,
    duration: null,
    bonusReward: true,
    questLink: null,
    disabled: false,
    labelButton: "pointSystem.claim",
  },
  {
    quest_id: "galxe-quest",
    quest_name: "Galxe",
    quest_description: "Complete all social media tasks on Galxe to receive 400 points.",
    guideLink: null,
    is_claimed: false,
    quest_number: 4,
    reward_points: 400,
    duration: "Oct 30, 7:00PM UTC+8 - Nov 4, 7:00PM UTC+8",
    bonusReward: false,
    questLink: galxeLink,
    disabled: true,
    labelButton: "Quest Expired",
  },
  {
    quest_id: "ckcon-quest",
    quest_name: "CKCon: Common Knowledge Conference",
    quest_description: "Play the CKCat Game Telegram Mini App & Explore the first CKB Wallet on Telegram",
    guideLink: ckConQuestGuideLink,
    is_claimed: false,
    quest_number: 1,
    reward_points: 200,
    duration: "Nov 9, 9:00AM UTC+7 - Nov 10, 9:00AM UTC+7",
    bonusReward: true,
    questLink: ckConQuestLink,
    disabled: true,
    labelButton: "Quest Expired",
  },
];
