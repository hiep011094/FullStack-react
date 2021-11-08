import { ArgsType, Field } from "@nestjs/graphql";
import { MenuWhereUniqueInput } from "./MenuWhereUniqueInput";

@ArgsType()
class MenuFindUniqueArgs {
  @Field(() => MenuWhereUniqueInput, { nullable: false })
  where!: MenuWhereUniqueInput;
}

export { MenuFindUniqueArgs };
