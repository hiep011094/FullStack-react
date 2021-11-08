import { ArgsType, Field } from "@nestjs/graphql";
import { IntroduceWhereUniqueInput } from "./IntroduceWhereUniqueInput";

@ArgsType()
class IntroduceFindUniqueArgs {
  @Field(() => IntroduceWhereUniqueInput, { nullable: false })
  where!: IntroduceWhereUniqueInput;
}

export { IntroduceFindUniqueArgs };
