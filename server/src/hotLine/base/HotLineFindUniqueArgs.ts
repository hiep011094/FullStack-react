import { ArgsType, Field } from "@nestjs/graphql";
import { HotLineWhereUniqueInput } from "./HotLineWhereUniqueInput";

@ArgsType()
class HotLineFindUniqueArgs {
  @Field(() => HotLineWhereUniqueInput, { nullable: false })
  where!: HotLineWhereUniqueInput;
}

export { HotLineFindUniqueArgs };
