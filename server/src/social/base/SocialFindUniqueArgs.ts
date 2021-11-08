import { ArgsType, Field } from "@nestjs/graphql";
import { SocialWhereUniqueInput } from "./SocialWhereUniqueInput";

@ArgsType()
class SocialFindUniqueArgs {
  @Field(() => SocialWhereUniqueInput, { nullable: false })
  where!: SocialWhereUniqueInput;
}

export { SocialFindUniqueArgs };
