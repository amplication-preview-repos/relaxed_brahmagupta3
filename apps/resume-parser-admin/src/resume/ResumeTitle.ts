import { Resume as TResume } from "../api/resume/Resume";

export const RESUME_TITLE_FIELD = "firstName";

export const ResumeTitle = (record: TResume): string => {
  return record.firstName?.toString() || String(record.id);
};
