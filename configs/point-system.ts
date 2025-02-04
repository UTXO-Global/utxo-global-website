import { QuestItemComponentType, QuestKind } from "@/types/quest";
import { PointSystemTab } from "@/types/common";
import { MULTI_SIG_LINK } from "@/configs/common";
import { QuestIDs } from "@/types/point-system";
import { CKCAT_TWITTER_LINK, UTXO_GLOBAL_TWITTER_LINK } from "@/configs/social";

export const utxoSwapExtensionQuestGuide =
  "https://nexmio.notion.site/Quest-2-Swap-in-UTXO-Global-Wallet-100-points-ec13ea718b4746e583018f2a4a9849a3?pvs=4";
export const utxoSwapWebpageQuestGuide =
  "https://nexmio.notion.site/Quest-3-Swap-on-the-UTXOSwap-Webpage-100-points-0f6464b8a318477faa535ce66211eeec?pvs=4";
export const galxeLink = "https://app.galxe.com/quest/nNN5UQTfPQzaVHwzqffmtN/GCmxvtVrGq";
export const galxeDIDLink = "https://app.galxe.com/quest/nNN5UQTfPQzaVHwzqffmtN/GCotftoFKt";
export const ckConQuestGuideLink =
  "https://www.notion.so/Quest-4-CKCon-Common-Knowledge-Conference-200-points-36b8ced7ee184561a6751129174244bb?pvs=4";
export const ckConQuestLink = "https://t.me/ckcat_bot";
const nervapeQuestLink = "https://forms.gle/6jDG9dUuVABzCMfQ6";

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

export const initialQuests: QuestItemComponentType[] = [
  {
    quest_id: QuestIDs.HOLD_NERVAPE_NFT,
    quest_name: "HOLD Nervape NFT",
    quest_description: `
              <p>
                By holding a Nervape 
                <a href='${nervapeQuestLink}' target="_blank" class="utxo-hyperlink">
                  (main collection)
                </a>
                NFT on Bitcoin or CKB and filling out our form, you can earn 6 points per NFT per day.
              </p>
    `,
    quest_note: null,
    quest_guide_link: "https://nexmio.notion.site/Hold-Nervape-NFT-Earn-0807b3889fce4e7b9a3eeb306f984ce5?pvs=4",
    quest_duration: null,
    is_claimed: false,
    reward_points: null,
    expired_at: null,
    bonus_reward: false,
    disabled: false,
    quest_link: nervapeQuestLink,
    quest_kind: QuestKind.LINK,
  },
  {
    quest_id: QuestIDs.UTXO_MULTISIG_HAS_RUSD,
    quest_name: "Hold $RUSD in UTXO Global Multisig wallet",
    quest_description: `
              <p>
                Hold $RUSD in UTXO Global
                <a href='${MULTI_SIG_LINK}' target="_blank" class="utxo-hyperlink">
                  Multisig wallet
                </a>
                to receive 400 points
              </p>
    `,
    quest_note: null,
    quest_guide_link: "https://nexmio.notion.site/Hold-RUSD-in-UTXO-Global-Multisig-wallet-400-points-80c1ff2b2e004feb82363e57ff2862f5",
    quest_duration: null,
    is_claimed: false,
    reward_points: 400,
    expired_at: null,
    bonus_reward: false,
    disabled: false,
    quest_link: null,
    quest_kind: QuestKind.CLAIM,
  },
  {
    quest_id: QuestIDs.UTXO_MULTISIG_HAS_SEAL,
    quest_name: "Hold $SEAL in UTXO Global Multisig wallet",
    quest_description: `
              <p>
                Hold $SEAL in UTXO Global
                <a href='${MULTI_SIG_LINK}' target="_blank" class="utxo-hyperlink">
                  Multisig wallet
                </a>
                to receive 400 points
              </p>
    `,
    quest_note: null,
    quest_guide_link: "https://nexmio.notion.site/Hold-SEAL-in-UTXO-Global-Multisig-wallet-400-points-b259f0c338aa4e6b86002d5cd77be039",
    quest_duration: null,
    is_claimed: false,
    reward_points: 400,
    expired_at: null,
    bonus_reward: false,
    disabled: false,
    quest_link: null,
    quest_kind: QuestKind.CLAIM,
  },
  {
    quest_id: QuestIDs.FOLLOW_X_UTXO_GLOBAL,
    quest_name: "Follow UTXO Global on X",
    quest_description: "Follow UTXO Global on X to receive 100 points.",
    quest_note: null,
    quest_guide_link: null,
    quest_duration: null,
    is_claimed: false,
    reward_points: 100,
    expired_at: null,
    bonus_reward: false,
    disabled: false,
    quest_link: UTXO_GLOBAL_TWITTER_LINK,
    quest_kind: QuestKind.COMBINATION,
  },
  {
    quest_id: QuestIDs.FOLLOW_X_CKCAT,
    quest_name: "Follow CKCat on X",
    quest_description: "Follow CKCat on X to receive 100 points.",
    quest_note: null,
    quest_guide_link: null,
    quest_duration: null,
    is_claimed: false,
    reward_points: 100,
    expired_at: null,
    bonus_reward: false,
    disabled: false,
    quest_link: CKCAT_TWITTER_LINK,
    quest_kind: QuestKind.COMBINATION,
  },
  {
    quest_id: QuestIDs.UTXO_SWAP_EXTENSION,
    quest_name: "Swap in UTXO Global Wallet Extension",
    quest_description: "Use UTXO Global wallet to swap and receive 100 points.",
    quest_note: null,
    quest_guide_link: utxoSwapExtensionQuestGuide,
    quest_duration: null,
    is_claimed: false,
    reward_points: 100,
    expired_at: null,
    bonus_reward: false,
    disabled: false,
    quest_link: null,
    quest_kind: QuestKind.CLAIM,
  },
  {
    quest_id: QuestIDs.UTXO_SWAP_WEBSITE,
    quest_name: "Swap on the UTXOSwap Webpage",
    quest_description: "Use UTXOSwap, connect to UTXO Global wallet, and swap to receive 100 points.",
    quest_note: null,
    quest_guide_link: utxoSwapWebpageQuestGuide,
    quest_duration: null,
    is_claimed: false,
    reward_points: 100,
    expired_at: null,
    bonus_reward: false,
    disabled: false,
    quest_link: null,
    quest_kind: QuestKind.CLAIM,
  },
  {
    quest_id: QuestIDs.UTXO_GLOBAL_STABLEPP,
    quest_name: "Xmas Giveaway: UTXO Global x Stable++",
    quest_description: `To celebrate UTXO Global x Stable++ partnership, we are co-hosting this "CKB Odyssey: The Stable Impact" event!`,
    quest_note: "(The points will be automatically distributed 24 hours after the campaign ends)",
    quest_guide_link: null,
    quest_duration: "Dec 23, 6PM (UTC+8) - Dec 30, 6PM (UTC+8)",
    is_claimed: false,
    reward_points: 400,
    expired_at: 1732154903000,
    bonus_reward: true,
    disabled: true,
    quest_link: "https://x.com/UTXOGlobal/status/1871140774332813563",
    quest_kind: QuestKind.LINK,
  },
  {
    quest_id: QuestIDs.DID_GALXE_QUEST,
    quest_name: "CKB Odyssey: The Identity Frontier (UTXO Global x D.ID)",
    quest_description: `To celebrate UTXO Global x d.id integration & partnership, we are co-hosting this "CKB Odyssey: The Identity Frontier" event!`,
    quest_note: "(The points will be automatically distributed 24 hours after the campaign ends)",
    quest_guide_link: null,
    quest_duration: "Dec 13, 17:00 UTC+7 - Dec 20, 17:00 UTC+7",
    is_claimed: false,
    reward_points: 400,
    expired_at: 1732154903000,
    bonus_reward: true,
    disabled: true,
    quest_link: galxeDIDLink,
    quest_kind: QuestKind.LINK,
  },
  {
    quest_id: QuestIDs.CKCON_QUEST,
    quest_name: "CKCon: Common Knowledge Conference",
    quest_description: "Play the CKCat Game Telegram Mini App & Explore the first CKB Wallet on Telegram",
    quest_note: "(The points will be automatically distributed 24 hours after the campaign ends)",
    quest_guide_link: ckConQuestGuideLink,
    quest_duration: "Nov 12, 4:00PM UTC+8 - Nov 21, 4:00PM UTC+8",
    is_claimed: false,
    reward_points: 200,
    expired_at: 1732154903000,
    bonus_reward: true,
    disabled: true,
    quest_link: ckConQuestLink,
    quest_kind: QuestKind.LINK,
  },
  {
    quest_id: QuestIDs.GALXE_QUEST,
    quest_name: "UTXO Global x UTXOSwap x SEAL on Galxe",
    quest_description: "Complete all social media tasks on Galxe to receive 400 points.",
    quest_note: "(The points will be automatically distributed 24 hours after the campaign ends)",
    quest_guide_link: null,
    quest_duration: "Oct 30, 7:00PM UTC+8 - Nov 4, 7:00PM UTC+8",
    is_claimed: false,
    reward_points: 400,
    expired_at: 1730686103000,
    bonus_reward: false,
    disabled: true,
    quest_link: galxeLink,
    quest_kind: QuestKind.LINK,
  },
];
