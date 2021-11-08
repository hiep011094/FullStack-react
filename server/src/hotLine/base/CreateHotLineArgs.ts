import { ArgsType, Field } from "@nestjs/graphql";
import { HotLineCreateInput } from "./HotLineCreateInput";

@ArgsType()
class CreateHotLineArgs {
  @Field(() => HotLineCreateInput, { nullable: false })
  data!: HotLineCreateInput;
}

export { CreateHotLineArgs };
