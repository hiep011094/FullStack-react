import { ArgsType, Field } from "@nestjs/graphql";
import { SocialWhereUniqueInput } from "./SocialWhereUniqueInput";
import { SocialUpdateInput } from "./SocialUpdateInput";

@ArgsType()
class UpdateSocialArgs {
  @Field(() => SocialWhereUniqueInput, { nullable: false })
  where!: SocialWhereUniqueInput;
  @Field(() => SocialUpdateInput, { nullable: false })
  data!: SocialUpdateInput;
}

export { UpdateSocialArgs };
