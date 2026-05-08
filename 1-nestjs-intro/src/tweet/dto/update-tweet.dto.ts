import { PartialType } from "@nestjs/mapped-types"
import { CreateTweetDTO } from "./create-tweet.dto"
import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateTweetDTO extends PartialType(CreateTweetDTO){
    @IsNumber()
    @IsNotEmpty()
    id: number;

}