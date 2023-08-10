import { IsString } from "class-validator";

export class CreateMenuDto {

    @IsString()
    title: string;

    @IsString()
    url: string;
}
