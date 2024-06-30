import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";

export type LanguageUpdateInput = {
  language?: string | null;
  resume?: ResumeWhereUniqueInput | null;
};
