import { QuestItemComponentType } from "@/types/quest";
import { PointSystemTab } from "@/types/common";

export const questGuideLink_2 =
  "https://nexmio.notion.site/Quest-2-Swap-in-UTXO-Global-Wallet-100-points-ec13ea718b4746e583018f2a4a9849a3?pvs=4";
export const questGuideLink_3 =
  "https://nexmio.notion.site/Quest-3-Swap-on-the-UTXOSwap-Webpage-100-points-0f6464b8a318477faa535ce66211eeec?pvs=4";
export const taskOnLink = "https://rewards.taskon.xyz/quest/494939152";

export const lastRewardData = [
  {
    rank: 1,
    address: "ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqt0xzvdfah3s7m8uy52uxl9enket48krus2qjj4r",
    date: "Sep 17, 2024",
    rewards: 4000,
  },
  {
    rank: 2,
    address: "ckb1qrgqep8saj8agswr30pls73hra28ry8jlnlc3ejzh3dl2ju7xxpjxqgqqyrjcmkn42y68d8muq8509xvq0pyzwvv7uv65r0z",
    date: "Sep 17, 2024",
    rewards: 2500,
  },
  {
    rank: 3,
    address: "ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqftfnj09af485x9memjqyx9xnsh499mnagksw0rm",
    date: "Sep 17, 2024",
    rewards: 750,
  },
  {
    rank: 3,
    address: "ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqfcj85g6yzzkhyllg290wf7cqqhv6rjrcsx25j53",
    date: "Sep 17, 2024",
    rewards: 750,
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

export const questSwapInitial: QuestItemComponentType[] = [
  {
    quest_id: "utxo-swap-extension",
    quest_name: "Swap in UTXO Global Wallet Extension",
    quest_description: "Use UTXO Global wallet to swap and receive 100 points.",
    guideLink: questGuideLink_2,
    is_claimed: false,
    quest_number: 2,
    reward_points: 100,
  },
  {
    quest_id: "utxo-swap-website",
    quest_name: "Swap on the UTXOSwap Webpage",
    quest_description: "Use UTXOSwap, connect to UTXO Global wallet, and swap to receive 100 points.",
    guideLink: questGuideLink_3,
    is_claimed: false,
    quest_number: 3,
    reward_points: 100,
  },
];
