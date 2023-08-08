// donation.dto.ts
import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty, IsOptional, IsPostalCode, IsEnum, IsNumber } from 'class-validator';
import { DonationFrequency } from '../donationFrequency.enum';
import { DonationAmount } from '../donationAmount.enum';

export class DonationDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  phone_number: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  postal_code: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsEnum(DonationFrequency)
  @IsNotEmpty()
  frequency: DonationFrequency;

  @IsEnum(DonationAmount)
  @IsNotEmpty()
  amount: DonationAmount;
}
