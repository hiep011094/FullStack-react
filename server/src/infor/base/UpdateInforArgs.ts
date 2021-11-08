import { ArgsType, Field } from "@nestjs/graphql";
import { InforWhereUniqueInput } from "./InforWhereUniqueInput";
import { InforUpdateInput } from "./InforUpdateInput";

@ArgsType()
class UpdateInforArgs {
  @Field(() => InforWhereUniqueInput, { nullable: false })
  where!: InforWhereUniqueInput;
  @Field(() => InforUpdateInput, { nullable: false })
  data!: InforUpdateInput;
}

export { UpdateInforArgs };
