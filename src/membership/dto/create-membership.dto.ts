import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Gender } from "../gender.enum";

export class CreateMembershipDto {

    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @IsNotEmpty()
    picture: string;

    @IsString()
    @IsNotEmpty()
    age: number;

    @IsEnum(Gender)
    @IsNotEmpty()
    gender: Gender;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    phone_number: number;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    @IsNotEmpty()
    address_1: string;

    @IsString()
    @IsNotEmpty()
    address_2: string;

    @IsString()
    @IsNotEmpty()
    postal_code: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;
}
