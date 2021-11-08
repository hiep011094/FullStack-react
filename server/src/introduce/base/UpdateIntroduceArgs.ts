import { ArgsType, Field } from "@nestjs/graphql";
import { IntroduceWhereUniqueInput } from "./IntroduceWhereUniqueInput";
import { IntroduceUpdateInput } from "./IntroduceUpdateInput";

@ArgsType()
class UpdateIntroduceArgs {
  @Field(() => IntroduceWhereUniqueInput, { nullable: false })
  where!: IntroduceWhereUniqueInput;
  @Field(() => IntroduceUpdateInput, { nullable: false })
  data!: IntroduceUpdateInput;
}

export { UpdateIntroduceArgs };
