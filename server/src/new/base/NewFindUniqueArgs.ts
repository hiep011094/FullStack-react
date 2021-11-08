import { ArgsType, Field } from "@nestjs/graphql";
import { NewWhereUniqueInput } from "./NewWhereUniqueInput";

@ArgsType()
class NewFindUniqueArgs {
  @Field(() => NewWhereUniqueInput, { nullable: false })
  where!: NewWhereUniqueInput;
}

export { NewFindUniqueArgs };
