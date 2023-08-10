import { IsMimeType, IsString } from "class-validator";

export class CreateHeroDto {

    @IsString()
    title: string;

    @IsString()
    message: string;

    @IsMimeType()
    @IsString()
    image: string;

    @IsString()
    button1_url:  string;

    @IsString()
    button1_title: string;

    @IsString()
    button2_url:  string;

    @IsString()
    button2_title: string;

}
