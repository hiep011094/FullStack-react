import { ArgsType, Field } from "@nestjs/graphql";
import { MenuCreateInput } from "./MenuCreateInput";

@ArgsType()
class CreateMenuArgs {
  @Field(() => MenuCreateInput, { nullable: false })
  data!: MenuCreateInput;
}

export { CreateMenuArgs };
