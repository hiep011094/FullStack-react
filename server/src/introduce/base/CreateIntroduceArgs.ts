import { ArgsType, Field } from "@nestjs/graphql";
import { IntroduceCreateInput } from "./IntroduceCreateInput";

@ArgsType()
class CreateIntroduceArgs {
  @Field(() => IntroduceCreateInput, { nullable: false })
  data!: IntroduceCreateInput;
}

export { CreateIntroduceArgs };
