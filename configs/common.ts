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
export const CHROME_EXTENSION_LINK =
  "https://chromewebstore.google.com/detail/utxo-global-wallet/lnamkkidoonpeknminiadpgjiofpdmle";
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACIKING_ID;

export const NAVIGATIONS = [
  {
    id: "about-us",
    label: "About Us",
    href: "/#about-us",
    isExternal: false,
  },
  {
    id: "features",
    label: "Features",
    href: "/#features",
    isExternal: false,
  },
  {
    id: "contact",
    label: "Contact",
    href: "/#contact",
    isExternal: false,
  },
  {
    id: "github",
    label: "GitHub",
    href: EXTENTSION_GITHUB,
    isExternal: true,
  },
];
