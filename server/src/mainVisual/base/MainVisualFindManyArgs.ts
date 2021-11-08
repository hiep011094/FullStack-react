import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MainVisualWhereInput } from "./MainVisualWhereInput";
import { Type } from "class-transformer";
import { MainVisualOrderByInput } from "./MainVisualOrderByInput";

@ArgsType()
class MainVisualFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MainVisualWhereInput,
  })
  @Field(() => MainVisualWhereInput, { nullable: true })
  @Type(() => MainVisualWhereInput)
  where?: MainVisualWhereInput;

  @ApiProperty({
    required: false,
    type: MainVisualOrderByInput,
  })
  @Field(() => MainVisualOrderByInput, { nullable: true })
  @Type(() => MainVisualOrderByInput)
  orderBy?: MainVisualOrderByInput;

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

export { MainVisualFindManyArgs };
