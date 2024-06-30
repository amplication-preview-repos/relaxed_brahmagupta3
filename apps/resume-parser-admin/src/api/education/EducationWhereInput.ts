import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";

export type EducationWhereInput = {
  fieldOfStudy?: StringNullableFilter;
  fromMonth?: StringNullableFilter;
  fromYear?: StringNullableFilter;
  id?: StringFilter;
  institutionName?: StringNullableFilter;
  resume?: ResumeWhereUniqueInput;
  toMonth?: StringNullableFilter;
  toYear?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
