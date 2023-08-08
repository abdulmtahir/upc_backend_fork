import { IsMimeType, IsString, IsUrl } from "class-validator";

export class CreateHeroDto {

    @IsString()
    title: string;

    @IsString()
    message: string;

    @IsMimeType()
    @IsString()
    image: string;

    @IsUrl()
    @IsString()
    url:  string;

    @IsString()
    url_title: string;

}
