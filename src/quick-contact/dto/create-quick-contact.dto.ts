import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateQuickContactDto {
    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    message: string;
}
