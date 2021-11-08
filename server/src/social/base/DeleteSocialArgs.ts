import { ArgsType, Field } from "@nestjs/graphql";
import { SocialWhereUniqueInput } from "./SocialWhereUniqueInput";

@ArgsType()
class DeleteSocialArgs {
  @Field(() => SocialWhereUniqueInput, { nullable: false })
  where!: SocialWhereUniqueInput;
}

export { DeleteSocialArgs };
