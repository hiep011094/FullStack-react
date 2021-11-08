import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HotLineWhereInput } from "./HotLineWhereInput";
import { Type } from "class-transformer";
import { HotLineOrderByInput } from "./HotLineOrderByInput";

@ArgsType()
class HotLineFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HotLineWhereInput,
  })
  @Field(() => HotLineWhereInput, { nullable: true })
  @Type(() => HotLineWhereInput)
  where?: HotLineWhereInput;

  @ApiProperty({
    required: false,
    type: HotLineOrderByInput,
  })
  @Field(() => HotLineOrderByInput, { nullable: true })
  @Type(() => HotLineOrderByInput)
  orderBy?: HotLineOrderByInput;

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

export { HotLineFindManyArgs };
