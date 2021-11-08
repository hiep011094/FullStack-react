import { ArgsType, Field } from "@nestjs/graphql";
import { NewWhereUniqueInput } from "./NewWhereUniqueInput";

@ArgsType()
class DeleteNewArgs {
  @Field(() => NewWhereUniqueInput, { nullable: false })
  where!: NewWhereUniqueInput;
}

export { DeleteNewArgs };
