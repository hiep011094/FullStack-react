import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";

export type IntroduceWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonNullableFilter;
  title?: StringNullableFilter;
};
