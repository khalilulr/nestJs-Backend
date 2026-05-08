import { IsNotEmpty, IsString } from "class-validator"

export class CreateHashtagDTO {
    @IsString()
    @IsNotEmpty()
    name: string
}