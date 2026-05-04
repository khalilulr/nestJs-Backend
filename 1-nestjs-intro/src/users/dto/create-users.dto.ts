import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, MinLength } from "class-validator";
import { CreateProfileDto } from "src/profile/dto/create.profile.dto";

export class CreateUserDto{
    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    @MaxLength(100)
    username: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(255)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsOptional()
    profile?:CreateProfileDto ;
}