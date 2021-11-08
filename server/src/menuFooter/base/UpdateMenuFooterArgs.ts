import { ArgsType, Field } from "@nestjs/graphql";
import { MenuFooterWhereUniqueInput } from "./MenuFooterWhereUniqueInput";
import { MenuFooterUpdateInput } from "./MenuFooterUpdateInput";

@ArgsType()
class UpdateMenuFooterArgs {
  @Field(() => MenuFooterWhereUniqueInput, { nullable: false })
  where!: MenuFooterWhereUniqueInput;
  @Field(() => MenuFooterUpdateInput, { nullable: false })
  data!: MenuFooterUpdateInput;
}

export { UpdateMenuFooterArgs };
