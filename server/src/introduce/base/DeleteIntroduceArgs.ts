import { ArgsType, Field } from "@nestjs/graphql";
import { IntroduceWhereUniqueInput } from "./IntroduceWhereUniqueInput";

@ArgsType()
class DeleteIntroduceArgs {
  @Field(() => IntroduceWhereUniqueInput, { nullable: false })
  where!: IntroduceWhereUniqueInput;
}

export { DeleteIntroduceArgs };
