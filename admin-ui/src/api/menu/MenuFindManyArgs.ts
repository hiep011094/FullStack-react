import { MenuWhereInput } from "./MenuWhereInput";
import { MenuOrderByInput } from "./MenuOrderByInput";

export type MenuFindManyArgs = {
  where?: MenuWhereInput;
  orderBy?: MenuOrderByInput;
  skip?: number;
  take?: number;
};
