import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";

export type ExperienceCreateInput = {
  companyName?: string | null;
  currentJob?: boolean | null;
  fromMonth?: string | null;
  fromYear?: string | null;
  jobResponsibilities?: string | null;
  jobTitle?: string | null;
  resume?: ResumeWhereUniqueInput | null;
  toMonth?: string | null;
  toYear?: string | null;
};
