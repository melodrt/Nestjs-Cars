import { IsString } from "class-validate";
import { MinLength } from "class-validator";

export class CreateBrandDto {

    @IsString()
    @MinLength(1)
    name: string;
}
