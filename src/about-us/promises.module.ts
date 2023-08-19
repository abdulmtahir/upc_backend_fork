import { Module } from '@nestjs/common';
import { PromisesService } from './promises.service';
import { PromisesController } from './promises.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OurPromises } from './entities/promises.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OurPromises])],
  controllers: [PromisesController],
  providers: [PromisesService],
  exports: [PromisesService]
})
export class PromisesModule {}
