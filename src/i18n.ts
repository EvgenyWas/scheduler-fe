import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { locales } from "./assets/locales";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  supportedLngs: Object.keys(locales),
  resources: {
    ...locales,
  },
});

export default i18n;
