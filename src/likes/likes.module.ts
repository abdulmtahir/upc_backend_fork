import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeRepository } from './entities/likes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LikeRepository])],
  controllers: [LikesController],
  providers: [LikesService]
})
export class LikesModule {}
