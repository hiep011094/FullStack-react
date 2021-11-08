import { ArgsType, Field } from "@nestjs/graphql";
import { HotLineWhereUniqueInput } from "./HotLineWhereUniqueInput";

@ArgsType()
class DeleteHotLineArgs {
  @Field(() => HotLineWhereUniqueInput, { nullable: false })
  where!: HotLineWhereUniqueInput;
}

export { DeleteHotLineArgs };
