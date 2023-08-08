import { IsMimeType, IsOptional, IsString } from "class-validator";

export class CreateManifestoDto {

    @IsMimeType()
    @IsString()
    image: string;

    @IsString()
    @IsOptional()
    quote: string;

    @IsString()
    @IsOptional()
    header: string;

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    desc: string;
}
