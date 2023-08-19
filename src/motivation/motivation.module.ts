import { Module } from '@nestjs/common';
import { MotivationService } from './motivation.service';
import { MotivationController } from './motivation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Motivation } from './entities/motivation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Motivation])],
  controllers: [MotivationController],
  providers: [MotivationService],
  exports: [MotivationService]
})
export class MotivationModule {}
