import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MenuFooterWhereInput = {
  id?: StringFilter;
  slug?: StringNullableFilter;
  title?: StringNullableFilter;
};
