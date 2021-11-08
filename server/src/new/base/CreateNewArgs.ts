import { ArgsType, Field } from "@nestjs/graphql";
import { NewCreateInput } from "./NewCreateInput";

@ArgsType()
class CreateNewArgs {
  @Field(() => NewCreateInput, { nullable: false })
  data!: NewCreateInput;
}

export { CreateNewArgs };
