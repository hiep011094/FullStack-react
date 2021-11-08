import { ArgsType, Field } from "@nestjs/graphql";
import { SocialCreateInput } from "./SocialCreateInput";

@ArgsType()
class CreateSocialArgs {
  @Field(() => SocialCreateInput, { nullable: false })
  data!: SocialCreateInput;
}

export { CreateSocialArgs };
