import { Module } from '@nestjs/common';
import { UpperNavService } from './upper-nav.service';
import { UpperNavController } from './upper-nav.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpperNav } from './entities/upper-nav.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UpperNav])],
  controllers: [UpperNavController],
  providers: [UpperNavService]
})
export class UpperNavModule {}
