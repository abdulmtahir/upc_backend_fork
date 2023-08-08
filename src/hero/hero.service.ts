import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hero } from './entities/hero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HeroService {
  constructor(@InjectRepository(Hero) private heroRepository: Repository<Hero>) {}

  async create(createHeroDto: CreateHeroDto, user: any): Promise<Hero> {
    const hero = await this.heroRepository.create({
      ...createHeroDto,
      // user: user
    });
    await this.heroRepository.save(hero);
    return hero;
  }

  async findAll(): Promise<Hero[]> {
    const heros = await this.heroRepository.find();
    return heros;
  }

  async findOne(id: number): Promise<Hero> {
    const hero = await this.heroRepository.findOne({ where: {id}})
    return hero;
  }

  async update(id: number, updateHeroDto: UpdateHeroDto): Promise<Hero> {
    const hero = await this.heroRepository.findOne({ where: {id}});
    if (!hero) {
      throw new Error("Hero not found.")
    }

    Object.assign(hero, updateHeroDto);
    return await this.heroRepository.save(hero)
  }

  async remove(id: number): Promise<void> {
    await this.heroRepository.delete(id);
  }
}
