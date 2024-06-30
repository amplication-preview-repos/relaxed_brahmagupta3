/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ErrorModelWhereInput } from "./ErrorModelWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ErrorModelListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ErrorModelWhereInput,
  })
  @ValidateNested()
  @Type(() => ErrorModelWhereInput)
  @IsOptional()
  @Field(() => ErrorModelWhereInput, {
    nullable: true,
  })
  every?: ErrorModelWhereInput;

  @ApiProperty({
    required: false,
    type: () => ErrorModelWhereInput,
  })
  @ValidateNested()
  @Type(() => ErrorModelWhereInput)
  @IsOptional()
  @Field(() => ErrorModelWhereInput, {
    nullable: true,
  })
  some?: ErrorModelWhereInput;

  @ApiProperty({
    required: false,
    type: () => ErrorModelWhereInput,
  })
  @ValidateNested()
  @Type(() => ErrorModelWhereInput)
  @IsOptional()
  @Field(() => ErrorModelWhereInput, {
    nullable: true,
  })
  none?: ErrorModelWhereInput;
}
export { ErrorModelListRelationFilter as ErrorModelListRelationFilter };
