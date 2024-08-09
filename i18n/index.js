import en from "@/messages/en.json"
import ch from "@/messages/ch.json"
const i18n = {
  translations: {
    en,
    ch,
  },
  defaultLang: "en",
  useBrowserDefault: true,
  languageDataStore: "localStorage",
};

module.exports = i18n;