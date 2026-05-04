import { IsDate, IsNotEmpty, IsOptional, IsString, Min, MinLength } from "class-validator";

export class CreateProfileDto {
    @IsOptional()
    @IsString()
    @MinLength(3)
    firstName?: string;


    @IsOptional()
    @IsString()
    @MinLength(3)
    lastName?: string;
    
    @IsOptional()
    @IsString()
    bio?: string;

    @IsOptional()
    @IsString()
    profilePicture?: string;

    @IsOptional()
    @IsDate()
    dateOfBirth?: Date;
}