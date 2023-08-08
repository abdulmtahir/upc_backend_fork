import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUpperNavDto {
    @IsString()
    @IsNotEmpty()
    logo_image: string;

    // @IsString()
    // @IsNotEmpty()
    // email_image: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    // @IsString()
    // @IsNotEmpty()
    // email_image: string;

    @IsNumber()
    @IsNotEmpty()
    phone_number: number;
}
