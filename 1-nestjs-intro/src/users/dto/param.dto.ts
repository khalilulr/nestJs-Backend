import { Transform, Type } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

export class ParamDto  {
    @IsOptional()
    @IsBoolean()
    @Transform(({value})=>value==='true')
    isMarried?: boolean
};