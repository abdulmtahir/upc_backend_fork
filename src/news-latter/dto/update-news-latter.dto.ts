import { IsEmail, IsNumber, IsString } from "class-validator";

export class UpdateNewsDto {
    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsEmail()
    email: string;
}