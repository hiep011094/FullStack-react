import { JsonValue } from "type-fest";

export type Product = {
  cateSlug: string | null;
  color: JsonValue | null;
  createdAt: Date;
  description: string | null;
  id: string;
  images: JsonValue | null;
  priceNew: number | null;
  priceOld: number | null;
  size: JsonValue | null;
  slug: string | null;
  title: string | null;
  updatedAt: Date;
};
