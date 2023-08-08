import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Catelog } from "../entities/gallery.entity";

export class CreateGalleryDto {

    @IsString()
    statement: string;

    @IsEnum(Catelog)
    @IsNotEmpty()
    catelog: Catelog;

    @IsString()
    @IsNotEmpty()
    image: string;
}
