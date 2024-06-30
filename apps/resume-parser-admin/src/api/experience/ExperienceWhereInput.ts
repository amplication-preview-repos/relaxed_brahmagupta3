import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";

export type ExperienceWhereInput = {
  companyName?: StringNullableFilter;
  currentJob?: BooleanNullableFilter;
  fromMonth?: StringNullableFilter;
  fromYear?: StringNullableFilter;
  id?: StringFilter;
  jobResponsibilities?: StringNullableFilter;
  jobTitle?: StringNullableFilter;
  resume?: ResumeWhereUniqueInput;
  toMonth?: StringNullableFilter;
  toYear?: StringNullableFilter;
};
