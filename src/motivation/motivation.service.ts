import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMotivationDto } from './dto/create-motivation.dto';
import { UpdateMotivationDto } from './dto/update-motivation.dto';
import { Motivation } from './entities/motivation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MotivationService {
  constructor(
    @InjectRepository(Motivation)
    private readonly motivationRepo: Repository<Motivation>,
  ) {}

  async createMotivation(createMotivationDto: CreateMotivationDto): Promise<Motivation> {
    const motivation = this.motivationRepo.create(createMotivationDto);
    return this.motivationRepo.save(motivation);
  }

  async getAllMotivation(): Promise<Motivation[]> {
    const motivations = await this.motivationRepo.find();
    try {
      return motivations;
    } catch (error) {
      throw new NotFoundException('The motivations list is empty for now.');
    }
  }

  async getMotivationById(id: number): Promise<Motivation> {
    const motivation = await this.motivationRepo.findOne({ where: { id } });
    try {
      return motivation;
    } catch (error) {
      throw new NotFoundException('motivation not found!!.');
    }
  }

  async updateMotivation(id: number, updateMotivationDto: UpdateMotivationDto): Promise<Motivation> {
    const motivationUpdate = await this.motivationRepo.findOne({ where: { id } });
    if (!motivationUpdate) {
      throw new Error('Motivation not found.');
    }

    // Update the fields from the DTO
    Object.assign(motivationUpdate, updateMotivationDto);
      return this.motivationRepo.save(motivationUpdate);
  }

  async deleteMotivation(id: number): Promise<void> {
    await this.motivationRepo.delete(id);
  }

}