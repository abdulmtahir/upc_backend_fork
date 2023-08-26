import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePromisesDto } from './dto/create-promises.dto';
import { UpdatePromisesDto } from './dto/update-promises.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OurPromises } from './entities/promises.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromisesService {

  constructor(
    @InjectRepository(OurPromises)
    private readonly promisesRepo: Repository<OurPromises>,
  ){}

  create(createPromisesDto: CreatePromisesDto) {
    const promise = this.promisesRepo.create(createPromisesDto);
    return this.promisesRepo.save(promise);
  }

  async getAllPromises(): Promise<OurPromises[]> {
    const promises = await this.promisesRepo.find({
      order: { 
        id: "ASC"
      }
    });
    try {
      return promises;
    } catch (error) {
      throw new NotFoundException('The list is empty for now.');
    }
  }

  async getPromiseById(id: number): Promise<OurPromises> {
    const promise = await this.promisesRepo.findOne({ where: { id } });
    try {
      return promise;
    } catch (error) {
      throw new NotFoundException('Promise not found!!.');
    }
  }

  async updatePromise(id: number, updatePromisesDto: UpdatePromisesDto): Promise<OurPromises> {
    const promiseToUpdate = await this.promisesRepo.findOne({ where: { id } });
    if (!promiseToUpdate) {
      throw new Error('Promises not found.');
    }

    // Update the fields from the DTO
    Object.assign(promiseToUpdate, updatePromisesDto);
    return this.promisesRepo.save(promiseToUpdate);
  }

  async deletePromise(id: number): Promise<void> {
    await this.promisesRepo.delete(id);
  }
}
