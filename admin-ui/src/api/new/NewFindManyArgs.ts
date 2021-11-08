import { NewWhereInput } from "./NewWhereInput";
import { NewOrderByInput } from "./NewOrderByInput";

export type NewFindManyArgs = {
  where?: NewWhereInput;
  orderBy?: NewOrderByInput;
  skip?: number;
  take?: number;
};
