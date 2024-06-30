import { Language as TLanguage } from "../api/language/Language";

export const LANGUAGE_TITLE_FIELD = "language";

export const LanguageTitle = (record: TLanguage): string => {
  return record.language?.toString() || String(record.id);
};
