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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { EducationUpdateManyWithoutResumesInput } from "./EducationUpdateManyWithoutResumesInput";
import { Type } from "class-transformer";
import { ExperienceUpdateManyWithoutResumesInput } from "./ExperienceUpdateManyWithoutResumesInput";
import { LanguageUpdateManyWithoutResumesInput } from "./LanguageUpdateManyWithoutResumesInput";

@InputType()
class ResumeUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  educationList?: string | null;

  @ApiProperty({
    required: false,
    type: () => EducationUpdateManyWithoutResumesInput,
  })
  @ValidateNested()
  @Type(() => EducationUpdateManyWithoutResumesInput)
  @IsOptional()
  @Field(() => EducationUpdateManyWithoutResumesInput, {
    nullable: true,
  })
  educations?: EducationUpdateManyWithoutResumesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  emailAddress?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  experienceList?: string | null;

  @ApiProperty({
    required: false,
    type: () => ExperienceUpdateManyWithoutResumesInput,
  })
  @ValidateNested()
  @Type(() => ExperienceUpdateManyWithoutResumesInput)
  @IsOptional()
  @Field(() => ExperienceUpdateManyWithoutResumesInput, {
    nullable: true,
  })
  experiences?: ExperienceUpdateManyWithoutResumesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LanguageUpdateManyWithoutResumesInput,
  })
  @ValidateNested()
  @Type(() => LanguageUpdateManyWithoutResumesInput)
  @IsOptional()
  @Field(() => LanguageUpdateManyWithoutResumesInput, {
    nullable: true,
  })
  languages?: LanguageUpdateManyWithoutResumesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  resumeHash?: string | null;
}

export { ResumeUpdateInput as ResumeUpdateInput };
