import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @Column()
    firstName:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @Column()
    lastName:string;

    @IsEmail()
    @IsNotEmpty()
    @Column()
    email:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @Column()
    password:string;
}