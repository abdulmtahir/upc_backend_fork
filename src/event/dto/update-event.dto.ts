import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class UpdateEventDto extends PartialType(CreateEventDto) {

    @IsString()
    @IsNotEmpty()
    eventTitle: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsString()
    @IsNotEmpty()
    eventDescription: string;

    // @IsDate()
    // @IsNotEmpty()
    // date: Date;
}
