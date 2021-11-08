import { InforWhereInput } from "./InforWhereInput";
import { InforOrderByInput } from "./InforOrderByInput";

export type InforFindManyArgs = {
  where?: InforWhereInput;
  orderBy?: InforOrderByInput;
  skip?: number;
  take?: number;
};
