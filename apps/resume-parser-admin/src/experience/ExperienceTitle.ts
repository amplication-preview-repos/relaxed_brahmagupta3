import { Experience as TExperience } from "../api/experience/Experience";

export const EXPERIENCE_TITLE_FIELD = "companyName";

export const ExperienceTitle = (record: TExperience): string => {
  return record.companyName?.toString() || String(record.id);
};
