import { Module } from '@nestjs/common';
import { MembershipController } from './membership.controller';
import { MembershipService } from './membership.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipEntity } from './entities/membership.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MembershipEntity])],
  controllers: [MembershipController],
  providers: [MembershipService]
})
export class MembershipModule {}
