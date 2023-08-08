import { IsEnum, IsString } from "class-validator";
import { Catelog } from "../entities/gallery.entity";

export class CreateGalleryDto {
    @IsEnum(Catelog)
    catelog: Catelog;

    @IsString()
    image: string;
}
