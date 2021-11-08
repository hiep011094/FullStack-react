import { ArgsType, Field } from "@nestjs/graphql";
import { MenuFooterWhereUniqueInput } from "./MenuFooterWhereUniqueInput";

@ArgsType()
class DeleteMenuFooterArgs {
  @Field(() => MenuFooterWhereUniqueInput, { nullable: false })
  where!: MenuFooterWhereUniqueInput;
}

export { DeleteMenuFooterArgs };
