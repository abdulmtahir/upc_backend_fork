import { PartialType } from '@nestjs/mapped-types';
import { CreateDonationOptionDto } from './create-donation-option.dto';


export class UpdateDonationOptionDto extends PartialType(CreateDonationOptionDto) {}
