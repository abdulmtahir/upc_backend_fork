import { PartialType } from '@nestjs/mapped-types';
import { DonationDto } from './create-donation.dto';

export class UpdateDonationDto extends PartialType(DonationDto) {}
