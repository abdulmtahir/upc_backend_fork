import { IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";

export class CreateDonationOptionDto {
    @IsNumber()
    @IsNotEmpty()
    amount:number;
}