import { ArgsType, Field } from "@nestjs/graphql";
import { InforWhereUniqueInput } from "./InforWhereUniqueInput";

@ArgsType()
class InforFindUniqueArgs {
  @Field(() => InforWhereUniqueInput, { nullable: false })
  where!: InforWhereUniqueInput;
}

export { InforFindUniqueArgs };
