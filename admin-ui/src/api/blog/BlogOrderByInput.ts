import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  category?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  slug?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
