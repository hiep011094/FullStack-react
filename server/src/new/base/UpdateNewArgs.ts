import { ArgsType, Field } from "@nestjs/graphql";
import { NewWhereUniqueInput } from "./NewWhereUniqueInput";
import { NewUpdateInput } from "./NewUpdateInput";

@ArgsType()
class UpdateNewArgs {
  @Field(() => NewWhereUniqueInput, { nullable: false })
  where!: NewWhereUniqueInput;
  @Field(() => NewUpdateInput, { nullable: false })
  data!: NewUpdateInput;
}

export { UpdateNewArgs };
