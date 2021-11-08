import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SocialWhereInput } from "./SocialWhereInput";
import { Type } from "class-transformer";
import { SocialOrderByInput } from "./SocialOrderByInput";

@ArgsType()
class SocialFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SocialWhereInput,
  })
  @Field(() => SocialWhereInput, { nullable: true })
  @Type(() => SocialWhereInput)
  where?: SocialWhereInput;

  @ApiProperty({
    required: false,
    type: SocialOrderByInput,
  })
  @Field(() => SocialOrderByInput, { nullable: true })
  @Type(() => SocialOrderByInput)
  orderBy?: SocialOrderByInput;

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

export { SocialFindManyArgs };
