import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EducationListRelationFilter } from "../education/EducationListRelationFilter";
import { ExperienceListRelationFilter } from "../experience/ExperienceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LanguageListRelationFilter } from "../language/LanguageListRelationFilter";

export type ResumeWhereInput = {
  educationList?: StringNullableFilter;
  educations?: EducationListRelationFilter;
  emailAddress?: StringNullableFilter;
  experienceList?: StringNullableFilter;
  experiences?: ExperienceListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  languages?: LanguageListRelationFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  resumeHash?: StringNullableFilter;
};
