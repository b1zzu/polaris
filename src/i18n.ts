import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import it from "./locales/it.json";
import de from "./locales/de.json";

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      it: it,
      de: de,
    },
    debug: true,
    keySeparator: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
