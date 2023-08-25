import enTranslations from "./locales/en.json";
import frTranslations from "./locales/fr.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const defaultNS = "translation" as const;
export const resources = {
    en: {
        translation: enTranslations,
    },
    fr: {
        translation: frTranslations,
    },
} as const;

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "fr", // Langue par défaut
        fallbackLng: "fr", // Langue de secours si la langue préférée n'est pas disponible
         ns: ["translation"],
         defaultNS,
        interpolation: {
            escapeValue: false, // Permet l'utilisation de balises HTML dans les traductions
        },
    });
console.log(initReactI18next);
export default i18n;