import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";

export type LanguageCreateInput = {
  language?: string | null;
  resume?: ResumeWhereUniqueInput | null;
};
