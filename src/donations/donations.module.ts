import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonationEntity } from './entities/donation.entity';
import { DonationController } from './donations.controller';
import { DonationService } from './donations.service';

@Module({
  imports: [TypeOrmModule.forFeature([DonationEntity])],
  controllers: [DonationController],
  providers: [DonationService]
})
export class DonationModule {}
