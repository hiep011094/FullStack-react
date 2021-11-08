import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogWhereInput = {
  category?: StringNullableFilter;
  content?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  slug?: StringNullableFilter;
  title?: StringNullableFilter;
};
