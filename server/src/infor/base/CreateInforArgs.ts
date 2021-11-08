import { ArgsType, Field } from "@nestjs/graphql";
import { InforCreateInput } from "./InforCreateInput";

@ArgsType()
class CreateInforArgs {
  @Field(() => InforCreateInput, { nullable: false })
  data!: InforCreateInput;
}

export { CreateInforArgs };
