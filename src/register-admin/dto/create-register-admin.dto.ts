import { IsString, IsEmail, IsEnum, IsAlphanumeric, MaxLength, MinLength, NotContains, IsNotEmpty, IsNumber } from "class-validator";
import { Role } from '../role.enum'
export class registerAdminDto{

    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    phone_number: number;

    @IsString()
    @IsAlphanumeric()
    @MaxLength(10, { message: 'Maxium length is 10'})
    @MinLength(8, { message:'Minium lenght is 8'})
    @NotContains(" ", { message: "No spaces allowed"})
    password: string;

    @IsString()
    image: string;

    @IsEnum(Role)
    role: Role[];


}