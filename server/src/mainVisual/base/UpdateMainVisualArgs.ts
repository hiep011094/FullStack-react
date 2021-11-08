import { ArgsType, Field } from "@nestjs/graphql";
import { MainVisualWhereUniqueInput } from "./MainVisualWhereUniqueInput";
import { MainVisualUpdateInput } from "./MainVisualUpdateInput";

@ArgsType()
class UpdateMainVisualArgs {
  @Field(() => MainVisualWhereUniqueInput, { nullable: false })
  where!: MainVisualWhereUniqueInput;
  @Field(() => MainVisualUpdateInput, { nullable: false })
  data!: MainVisualUpdateInput;
}

export { UpdateMainVisualArgs };
