import { SortOrder } from "../../util/SortOrder";

export type MenuOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  slug?: SortOrder;
  subMenu?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
