import { ArgsType, Field } from "@nestjs/graphql";
import { InforWhereUniqueInput } from "./InforWhereUniqueInput";

@ArgsType()
class DeleteInforArgs {
  @Field(() => InforWhereUniqueInput, { nullable: false })
  where!: InforWhereUniqueInput;
}

export { DeleteInforArgs };
