import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, MaxLength, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    @MaxLength(100)
    firstName: string;

    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    @MaxLength(100)
    lastName: string;
    
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(255)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}