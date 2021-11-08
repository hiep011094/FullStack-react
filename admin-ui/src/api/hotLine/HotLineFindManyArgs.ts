import { HotLineWhereInput } from "./HotLineWhereInput";
import { HotLineOrderByInput } from "./HotLineOrderByInput";

export type HotLineFindManyArgs = {
  where?: HotLineWhereInput;
  orderBy?: HotLineOrderByInput;
  skip?: number;
  take?: number;
};
