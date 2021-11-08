import { ArgsType, Field } from "@nestjs/graphql";
import { MenuFooterCreateInput } from "./MenuFooterCreateInput";

@ArgsType()
class CreateMenuFooterArgs {
  @Field(() => MenuFooterCreateInput, { nullable: false })
  data!: MenuFooterCreateInput;
}

export { CreateMenuFooterArgs };
