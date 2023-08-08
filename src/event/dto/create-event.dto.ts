import { IsDate, IsNotEmpty, IsPostalCode, IsString } from "class-validator";

export class CreateEventDto {
    @IsString()
    @IsNotEmpty()
    eventTitle: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsString()
    @IsNotEmpty()
    eventDescription: string;

    @IsDate()
    @IsNotEmpty()
    eventDate: Date;

    @IsString()
    @IsNotEmpty()
    location: string;

}
