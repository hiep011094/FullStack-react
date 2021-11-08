import { ArgsType, Field } from "@nestjs/graphql";
import { MainVisualWhereUniqueInput } from "./MainVisualWhereUniqueInput";

@ArgsType()
class MainVisualFindUniqueArgs {
  @Field(() => MainVisualWhereUniqueInput, { nullable: false })
  where!: MainVisualWhereUniqueInput;
}

export { MainVisualFindUniqueArgs };
