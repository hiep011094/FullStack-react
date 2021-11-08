import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuFooterWhereInput } from "./MenuFooterWhereInput";
import { Type } from "class-transformer";
import { MenuFooterOrderByInput } from "./MenuFooterOrderByInput";

@ArgsType()
class MenuFooterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MenuFooterWhereInput,
  })
  @Field(() => MenuFooterWhereInput, { nullable: true })
  @Type(() => MenuFooterWhereInput)
  where?: MenuFooterWhereInput;

  @ApiProperty({
    required: false,
    type: MenuFooterOrderByInput,
  })
  @Field(() => MenuFooterOrderByInput, { nullable: true })
  @Type(() => MenuFooterOrderByInput)
  orderBy?: MenuFooterOrderByInput;

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

export { MenuFooterFindManyArgs };
