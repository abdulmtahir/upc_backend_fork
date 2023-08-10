import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mission } from './entities/mission.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MissionService {
  constructor(
    @InjectRepository(Mission)
    private readonly missionRepository: Repository<Mission>,
  ) {}

  async createMission(missionDto: CreateMissionDto): Promise<Mission> {
    const newMission = this.missionRepository.create(missionDto);
    return this.missionRepository.save(newMission);
  }

  async getAllMission(): Promise<Mission[]> {
    const missions = await  this.missionRepository.find();
    try {
        return missions;
    } catch (error) {
        throw new NotFoundException('The missions list is empty for now.');
    }
  }

  async getMissionById(id: number): Promise<Mission> {
    const mission = await this.missionRepository.findOne({ where: {id}});
    try {
        return mission;
    } catch (error) {
        throw new NotFoundException('Result not found!!.');
    }
  }

  async updateMission(id: number, missionDto: UpdateMissionDto): Promise<Mission> {
    const missionToUpdate = await this.missionRepository.findOne({ where: {id}});
    if (!missionToUpdate) {
      throw new Error('Donation not found.');
    }

    // Update the fields from the DTO
    Object.assign(missionToUpdate, missionDto);
    return this.missionRepository.save(missionToUpdate);
  }

  async deleteMission(id: number): Promise<void> {
    await this.missionRepository.delete(id);
  }
}
