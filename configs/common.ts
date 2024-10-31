export const SITE_TITLE = "UTXO Global Wallet";
export const SITE_DESCRIPTION = "Where UTXO Technology Meets Global Innovation";
export const SITE_URL = "https://utxo.global";
export const SITE_IMAGE_URL =
  "https://config.utxo.global/images/preview-site.png";
export const CONTACT_MAIL = "contact@utxo.global";
export const EXTENTSION_GITHUB =
  "https://github.com/UTXO-Global/utxo-wallet-extension";
export const MEDIA_KIT_GITHUB =
  "https://github.com/UTXO-Global/utxo-global-media-kit";
export const SUBSTACK_LINK = "https://utxoglobal.substack.com/";
export const DOC_LINK = "https://utxo-global.gitbook.io/utxo-global";
export const CHROME_EXTENSION_LINK =
  "https://chromewebstore.google.com/detail/utxo-global-wallet/lnamkkidoonpeknminiadpgjiofpdmle";
export const NERVOS_LINK = "https://www.nervos.org/wallets#utxo_global_wallet";
export const CKBCCC_DEMO_LINK = "https://ckbccc-demo.vercel.app/";
export const BUG_REPORT_LINK = "https://forms.gle/3Y4HSpLoY7nAVExz7";
export const REQUEST_API_ACCESS_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4h0LPs3_ZEZ4YZOO4-5B45br0dfLt-HSMOeBOdaM-CcKuCA/viewform";
export const INDEXER_COIN_API_LINK = `${DOC_LINK}/ckb-advanced-indexer-api/api-reference/coins`;
export const INDEXER_NFT_API_LINK = `${DOC_LINK}/ckb-advanced-indexer-api/api-reference/nfts`;
export const BUG_REPORT_RESULT_LINK = "";
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACIKING_ID;
export const MULTI_SIG_LINK = process.env.NEXT_PUBLIC_MULTI_SIG_LINK || "";
export const BOUNTY_CONTEST_STAGE = Number(
  process.env.NEXT_PUBLIC_BOUNTY_CONTEST_STAGE || 1
); // 1: prepare; 2: in-progress; 3: ended
export const DEFAULT_NETWORK =
  process.env.NEXT_PUBLIC_NETWORK_DEFAULT || "nervos_testnet";
export const UTXOSWAP_API_URL = process.env.NEXT_PUBLIC_UTXOSWAP_API_URL || "";
export const TWA_LINK = "https://t.me/utxo_global_wallet_bot";

export const NAVIGATIONS = [
  {
    id: "home",
    label: "header.home",
    href: "/",
    isExternal: false,
  },
  {
    id: "point-system",
    label: "pointSystem.point_system",
    href: "/point-system",
    isExternal: true,
  },
  {
    id: "multi-sig",
    label: "header.multiSig",
    href: MULTI_SIG_LINK,
    isExternal: true,
  },
];

export const pathWithoutHeader = ["/point-system/", "/indexer/"];
