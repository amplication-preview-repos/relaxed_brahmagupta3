import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ErrorModelWhereInput = {
  code?: IntNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
};
