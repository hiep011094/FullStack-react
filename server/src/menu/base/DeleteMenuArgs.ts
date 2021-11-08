import { ArgsType, Field } from "@nestjs/graphql";
import { MenuWhereUniqueInput } from "./MenuWhereUniqueInput";

@ArgsType()
class DeleteMenuArgs {
  @Field(() => MenuWhereUniqueInput, { nullable: false })
  where!: MenuWhereUniqueInput;
}

export { DeleteMenuArgs };
