import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";

export type EducationUpdateInput = {
  fieldOfStudy?: string | null;
  fromMonth?: string | null;
  fromYear?: string | null;
  institutionName?: string | null;
  resume?: ResumeWhereUniqueInput | null;
  toMonth?: string | null;
  toYear?: string | null;
  typeField?: string | null;
};
