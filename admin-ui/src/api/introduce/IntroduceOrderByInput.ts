import { SortOrder } from "../../util/SortOrder";

export type IntroduceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
