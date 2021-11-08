import { ArgsType, Field } from "@nestjs/graphql";
import { MainVisualCreateInput } from "./MainVisualCreateInput";

@ArgsType()
class CreateMainVisualArgs {
  @Field(() => MainVisualCreateInput, { nullable: false })
  data!: MainVisualCreateInput;
}

export { CreateMainVisualArgs };
