import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntroduceWhereInput } from "./IntroduceWhereInput";
import { Type } from "class-transformer";
import { IntroduceOrderByInput } from "./IntroduceOrderByInput";

@ArgsType()
class IntroduceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => IntroduceWhereInput,
  })
  @Field(() => IntroduceWhereInput, { nullable: true })
  @Type(() => IntroduceWhereInput)
  where?: IntroduceWhereInput;

  @ApiProperty({
    required: false,
    type: IntroduceOrderByInput,
  })
  @Field(() => IntroduceOrderByInput, { nullable: true })
  @Type(() => IntroduceOrderByInput)
  orderBy?: IntroduceOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { IntroduceFindManyArgs };
