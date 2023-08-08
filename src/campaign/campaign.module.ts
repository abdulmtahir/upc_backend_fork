import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './entities/campaign.entity';

@Module({
  controllers: [CampaignController],
  providers: [CampaignService],
  imports: [TypeOrmModule.forFeature([Campaign])],
  exports: [CampaignService]
})
export class CampaignModule {}
