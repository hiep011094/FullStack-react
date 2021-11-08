import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SocialWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
