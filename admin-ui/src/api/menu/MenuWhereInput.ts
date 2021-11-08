import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";

export type MenuWhereInput = {
  id?: StringFilter;
  slug?: StringNullableFilter;
  subMenu?: JsonNullableFilter;
  title?: StringNullableFilter;
};
