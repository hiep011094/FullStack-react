import { ArgsType, Field } from "@nestjs/graphql";
import { MenuFooterWhereUniqueInput } from "./MenuFooterWhereUniqueInput";

@ArgsType()
class MenuFooterFindUniqueArgs {
  @Field(() => MenuFooterWhereUniqueInput, { nullable: false })
  where!: MenuFooterWhereUniqueInput;
}

export { MenuFooterFindUniqueArgs };
