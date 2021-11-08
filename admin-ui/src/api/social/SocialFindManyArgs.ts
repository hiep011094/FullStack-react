import { SocialWhereInput } from "./SocialWhereInput";
import { SocialOrderByInput } from "./SocialOrderByInput";

export type SocialFindManyArgs = {
  where?: SocialWhereInput;
  orderBy?: SocialOrderByInput;
  skip?: number;
  take?: number;
};
