import { JsonValue } from "type-fest";

export type ProductCreateInput = {
  cateSlug?: string | null;
  color?: JsonValue | null;
  description?: string | null;
  images?: JsonValue | null;
  priceNew?: number | null;
  priceOld?: number | null;
  size?: JsonValue | null;
  slug?: string | null;
  title?: string | null;
};
