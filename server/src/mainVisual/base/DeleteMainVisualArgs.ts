import { ArgsType, Field } from "@nestjs/graphql";
import { MainVisualWhereUniqueInput } from "./MainVisualWhereUniqueInput";

@ArgsType()
class DeleteMainVisualArgs {
  @Field(() => MainVisualWhereUniqueInput, { nullable: false })
  where!: MainVisualWhereUniqueInput;
}

export { DeleteMainVisualArgs };
