import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InforWhereInput } from "./InforWhereInput";
import { Type } from "class-transformer";
import { InforOrderByInput } from "./InforOrderByInput";

@ArgsType()
class InforFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InforWhereInput,
  })
  @Field(() => InforWhereInput, { nullable: true })
  @Type(() => InforWhereInput)
  where?: InforWhereInput;

  @ApiProperty({
    required: false,
    type: InforOrderByInput,
  })
  @Field(() => InforOrderByInput, { nullable: true })
  @Type(() => InforOrderByInput)
  orderBy?: InforOrderByInput;

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

export { InforFindManyArgs };
