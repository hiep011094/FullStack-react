import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  cateSlug?: StringNullableFilter;
  color?: JsonNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonNullableFilter;
  priceNew?: FloatNullableFilter;
  priceOld?: FloatNullableFilter;
  size?: JsonNullableFilter;
  slug?: StringNullableFilter;
  title?: StringNullableFilter;
};
