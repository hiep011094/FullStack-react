import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InforWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
