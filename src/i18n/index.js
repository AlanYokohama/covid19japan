import { enUS, ja, es, de, ptBR, fr, id, pl, fi, ar } from "date-fns/locale";

// Add new languages and their emoji flag here. Make sure the array indices line up.
export const LANGUAGES = ["en", "ja", "es", "de", "pt", "fr", "id", "pl", "fi","ar"];
export const FLAGS = ["🇺🇸", "🇯🇵", "🇪🇸", "🇩🇪", "🇧🇷", "🇫🇷", "🇮🇩", "🇵🇱", "🇫🇮", "AR"];
// Add locales for date-fns here. Make sure the keys match the languages in LANGUAGES.
export const LOCALES = {
  en: enUS,
  ja: ja,
  es: es,
  de: de,
  pt: ptBR,
  fr: fr,
  id: id,
  pl: pl,
  fi: fi,
  ar: ar,
};

const generateExport = () => {
  const resources = {};
  for (const language of LANGUAGES) {
    resources[language] = {
      translation: require(`./${language}.json`),
    };
  }
  return resources;
};

export default generateExport();
