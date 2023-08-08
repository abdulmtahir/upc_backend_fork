import { Module } from '@nestjs/common';
import { SocialMediaService } from './social-media.service';
import { SocialMediaController } from './social-media.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialMedia } from './entities/social-media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocialMedia])],
  controllers: [SocialMediaController],
  providers: [SocialMediaService]
})
export class SocialMediaModule {}
