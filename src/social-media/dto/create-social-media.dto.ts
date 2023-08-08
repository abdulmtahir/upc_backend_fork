import { IsString, IsUrl } from "class-validator";

export class CreateSocialMediaDto {

    @IsString()
    image: string;

    @IsUrl()
    @IsString()
    url: string;
}
