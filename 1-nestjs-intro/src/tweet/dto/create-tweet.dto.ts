import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { User } from "src/users/user.entity";

export class CreateTweetDTO{
       @IsString()
       @MaxLength(500)
        content?:string;
    
        @IsString()
        @IsOptional()
        image?:string;
    
        @IsNumber()
        @IsOptional()
        userId:number;

        @IsNumber()
        @IsOptional()
        hashtagIds?:number[];
       
    
}