import { IsString } from "class-validator";

export class CreateMotivationDto {
    @IsString()
    header: string;

    @IsString()
    statement: string;

    @IsString()
    image: string;


}
