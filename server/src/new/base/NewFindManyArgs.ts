import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NewWhereInput } from "./NewWhereInput";
import { Type } from "class-transformer";
import { NewOrderByInput } from "./NewOrderByInput";

@ArgsType()
class NewFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NewWhereInput,
  })
  @Field(() => NewWhereInput, { nullable: true })
  @Type(() => NewWhereInput)
  where?: NewWhereInput;

  @ApiProperty({
    required: false,
    type: NewOrderByInput,
  })
  @Field(() => NewOrderByInput, { nullable: true })
  @Type(() => NewOrderByInput)
  orderBy?: NewOrderByInput;

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

export { NewFindManyArgs };
