import { PartialType } from '@nestjs/mapped-types';
import { CreateQuickContactDto } from './create-quick-contact.dto';
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateQuickContactDto extends PartialType(CreateQuickContactDto) {

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    message: string
}

