import { ArgsType, Field } from "@nestjs/graphql";
import { MenuWhereUniqueInput } from "./MenuWhereUniqueInput";
import { MenuUpdateInput } from "./MenuUpdateInput";

@ArgsType()
class UpdateMenuArgs {
  @Field(() => MenuWhereUniqueInput, { nullable: false })
  where!: MenuWhereUniqueInput;
  @Field(() => MenuUpdateInput, { nullable: false })
  data!: MenuUpdateInput;
}

export { UpdateMenuArgs };
