export const SITE_TITLE = "UTXO Global Wallet";
export const SITE_DESCRIPTION = "Where UTXO Technology Meets Global Innovation";
export const SITE_URL = "https://utxo.global";
export const SITE_IMAGE_URL = "https://config.utxo.global/images/preview-site.png";
export const CONTACT_MAIL = "contact@utxo.global";
export const EXTENTSION_GITHUB = "https://github.com/UTXO-Global/utxo-wallet-extension";
export const MEDIA_KIT_GITHUB = "https://github.com/UTXO-Global/utxo-global-media-kit";
export const SUBSTACK_LINK = "https://utxoglobal.substack.com/";
export const DOC_LINK = "https://utxo-global.gitbook.io/utxo-global";
export const CHROME_EXTENSION_LINK =
  "https://chromewebstore.google.com/detail/utxo-global-wallet/lnamkkidoonpeknminiadpgjiofpdmle";
export const CKBCCC_DEMO_LINK = "https://ckbccc-demo.vercel.app/";
export const BUG_REPORT_LINK = "https://forms.gle/3Y4HSpLoY7nAVExz7";
export const BUG_REPORT_RESULT_LINK = "";
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACIKING_ID;
export const MULTI_SIG_LINK = process.env.NEXT_PUBLIC_MULTI_SIG_LINK || "";
export const BOUNTY_CONTEST_STAGE = Number(process.env.NEXT_PUBLIC_BOUNTY_CONTEST_STAGE || 1); // 1: prepare; 2: in-progress; 3: ended

export const NAVIGATIONS = [
  {
    id: "about-us",
    label: "header.aboutUs",
    href: "/#about-us",
    isExternal: false,
  },
  {
    id: "features",
    label: "header.features",
    href: "/#features",
    isExternal: false,
  },
  {
    id: "contact",
    label: "header.contact",
    href: "/#contact",
    isExternal: false,
  },
  {
    id: "github",
    label: "header.github",
    href: EXTENTSION_GITHUB,
    isExternal: true,
  },
  {
    id: "bounty-contest",
    label: "header.bountyContest",
    href: "/bounty-contest",
    isExternal: false,
  },
];
