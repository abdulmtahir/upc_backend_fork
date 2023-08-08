import { Module } from '@nestjs/common';
import { DonationOptionsController } from './donation-options.controller';
import { DonationOptionsService } from './donation-options.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { donationOptionEntity } from './entities/donationOption.entity';

@Module({
  imports: [TypeOrmModule.forFeature([donationOptionEntity])],
  controllers: [DonationOptionsController],
  providers: [DonationOptionsService]
})
export class DonationOptionsModule {}