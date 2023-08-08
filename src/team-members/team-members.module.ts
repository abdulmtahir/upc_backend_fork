import { Module } from '@nestjs/common';
import { TeamMembersController } from './team-members.controller';
import { TeamMembersService } from './team-members.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Team} from './entities/teamMembers.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([Team])],
  controllers: [TeamMembersController],
  providers: [TeamMembersService]
})
export class TeamMembersModule {}
