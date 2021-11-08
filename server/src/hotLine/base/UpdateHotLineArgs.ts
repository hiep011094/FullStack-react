import { ArgsType, Field } from "@nestjs/graphql";
import { HotLineWhereUniqueInput } from "./HotLineWhereUniqueInput";
import { HotLineUpdateInput } from "./HotLineUpdateInput";

@ArgsType()
class UpdateHotLineArgs {
  @Field(() => HotLineWhereUniqueInput, { nullable: false })
  where!: HotLineWhereUniqueInput;
  @Field(() => HotLineUpdateInput, { nullable: false })
  data!: HotLineUpdateInput;
}

export { UpdateHotLineArgs };
