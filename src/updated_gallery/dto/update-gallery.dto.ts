import { PartialType } from '@nestjs/mapped-types';
import { CreateGalleryDto } from './create-gallery.dto';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { Catelog } from '../entities/gallery.entity';

export class UpdateGalleryDto extends PartialType(CreateGalleryDto) {

    @IsString()
    statement: string;

    @IsEnum(Catelog)
    @IsNotEmpty()
    catelog: Catelog;

    @IsString()
    @IsNotEmpty()
    image: string;
}
