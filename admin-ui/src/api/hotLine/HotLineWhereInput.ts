import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HotLineWhereInput = {
  id?: StringFilter;
  phone?: StringNullableFilter;
  title?: StringNullableFilter;
};
