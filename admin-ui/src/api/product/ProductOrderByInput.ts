import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  cateSlug?: SortOrder;
  color?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  priceNew?: SortOrder;
  priceOld?: SortOrder;
  size?: SortOrder;
  slug?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
