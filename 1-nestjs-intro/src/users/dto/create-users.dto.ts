import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    gender: string;

    @IsNotEmpty()
    isMarried: boolean;
    
    @IsEmail()
    email: string;
}