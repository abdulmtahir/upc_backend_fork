import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MissionService } from './mission.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Mission } from './entities/mission.entity';

@Controller('mission')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Post()
  createDonation(@Body() missionDto: CreateMissionDto): Promise<Mission> {
    return this.missionService.createMission(missionDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Get()
  getAllDonations(): Promise<Mission[]> {
    return this.missionService.getAllMission();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Get(':id')
  getDonationById(@Param('id') id: number): Promise<Mission> {
    return this.missionService.getMissionById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Patch(':id')
  updateDonation(
    @Param('id') id: number,
    @Body() missionDto: UpdateMissionDto,
  ): Promise<Mission> {
    return this.missionService.updateMission(id, missionDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  deleteDonation(@Param('id') id: number): Promise<void> {
    return this.missionService.deleteMission(id);
  }
}
