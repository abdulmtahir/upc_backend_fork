import { Injectable } from '@nestjs/common';
import { CreateUpperNavDto } from './dto/create-upper-nav.dto';
import { UpdateUpperNavDto } from './dto/update-upper-nav.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpperNav } from './entities/upper-nav.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UpperNavService {
  constructor(@InjectRepository(UpperNav) private upperNavRepository: Repository<UpperNav>) {}

  async create(createUpperNavDto: CreateUpperNavDto): Promise<UpperNav> {
    const nav = await this.upperNavRepository.create(createUpperNavDto);
    return this.upperNavRepository.save(nav);
  }

  async findAll(): Promise<UpperNav[]> {
    const nav = await this.upperNavRepository.find({
      order: { 
        id: "ASC"
      }
    });
    return nav;
  }

  async findOne(id: number): Promise<UpperNav> {
    const nav = await this.upperNavRepository.findOne({ where: {id}});
    return nav;
  }

  async update(id: number, updateUpperNavDto: UpdateUpperNavDto): Promise<UpperNav> {
    const nav = await this.upperNavRepository.findOne({ where: {id}})
    if (!nav) {
      throw new Error("No result found");
    }

    Object.assign(nav, updateUpperNavDto);
    return this.upperNavRepository.save(nav);
  }

  async remove(id: number): Promise<void> {
    await this.upperNavRepository.delete(id)
  }
}
