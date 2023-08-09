import { IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";



export class donationOptionDto{
    @IsNumber()
    @IsNotEmpty()
    amount:number;
}