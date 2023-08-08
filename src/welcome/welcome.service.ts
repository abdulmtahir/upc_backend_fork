import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWelcomeDto } from './dto/create-welcome.dto';
import { UpdateWelcomeDto } from './dto/update-welcome.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Welcome } from './entities/welcome.entity';
import { Repository } from 'typeorm';
import { promises } from 'readline';

@Injectable()
export class WelcomeService {

  constructor(@InjectRepository(Welcome) private readonly welcomeRepository: Repository<Welcome>) {}
  async create(createWelcomeDto: CreateWelcomeDto) {
    const welcome = await this.welcomeRepository.create(createWelcomeDto);
    return await this.welcomeRepository.save(welcome);
  }

  async findAll(): Promise<Welcome[]> {
    const welcome = await this.welcomeRepository.find();
    try {
      return welcome;
    } catch (error) {
      throw new NotFoundException('The welcome is empty')
    }
  }

  async findOne(id: number): Promise<Welcome> {
    const welcome = await this.welcomeRepository.findOne({ where : {id}});
    try {
      return welcome;
    } catch (error) {
      throw new NotFoundException()
    }
  }

  async update(id: number, updateWelcomeDto: UpdateWelcomeDto): Promise<Welcome> {
    const welcome = await this.welcomeRepository.findOne({where: {id}});
    if (!welcome) {
      throw new Error("Welcome is not found.");
    }

    Object.assign(welcome, updateWelcomeDto);
    return this.welcomeRepository.save(welcome);
  }

  async remove(id: number): Promise<void> {
    await this.welcomeRepository.delete(id);
  }
}
