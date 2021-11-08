import { IntroduceWhereInput } from "./IntroduceWhereInput";
import { IntroduceOrderByInput } from "./IntroduceOrderByInput";

export type IntroduceFindManyArgs = {
  where?: IntroduceWhereInput;
  orderBy?: IntroduceOrderByInput;
  skip?: number;
  take?: number;
};
