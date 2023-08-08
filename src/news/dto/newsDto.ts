import { IsNotEmpty, IsString } from "class-validator";

export class newsDto{
    @IsString()
    @IsNotEmpty()
    headline:string;

    @IsString()
    @IsNotEmpty()
    article:string;

    @IsString()
    @IsNotEmpty()
    image:string;

}