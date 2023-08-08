import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { donationOptionEntity } from './entities/donation-option.entity';
import { DonationOptionsController } from './donation-option.controller';
import { DonationOptionsService } from './donation-option.service';

@Module({
  imports: [TypeOrmModule.forFeature([donationOptionEntity])],
  controllers: [DonationOptionsController],
  providers: [DonationOptionsService]
})
export class DonationOptionsModule {}