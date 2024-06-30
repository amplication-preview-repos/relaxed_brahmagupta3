import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";

export type LanguageWhereInput = {
  id?: StringFilter;
  language?: StringNullableFilter;
  resume?: ResumeWhereUniqueInput;
};
