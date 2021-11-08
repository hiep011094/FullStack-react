import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuWhereInput } from "./MenuWhereInput";
import { Type } from "class-transformer";
import { MenuOrderByInput } from "./MenuOrderByInput";

@ArgsType()
class MenuFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MenuWhereInput,
  })
  @Field(() => MenuWhereInput, { nullable: true })
  @Type(() => MenuWhereInput)
  where?: MenuWhereInput;

  @ApiProperty({
    required: false,
    type: MenuOrderByInput,
  })
  @Field(() => MenuOrderByInput, { nullable: true })
  @Type(() => MenuOrderByInput)
  orderBy?: MenuOrderByInput;

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

export { MenuFindManyArgs };
