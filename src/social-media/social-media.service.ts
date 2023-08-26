import { Injectable } from '@nestjs/common';
import { CreateSocialMediaDto } from './dto/create-social-media.dto';
import { UpdateSocialMediaDto } from './dto/update-social-media.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SocialMedia } from './entities/social-media.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SocialMediaService {
  constructor(@InjectRepository(SocialMedia) private socialRepository: Repository<SocialMedia>) {}

  async create(createSocialMediaDto: CreateSocialMediaDto): Promise<SocialMedia> {
    const social = this.socialRepository.create(createSocialMediaDto);
    return this.socialRepository.save(social);
  }

  async findAll(): Promise<SocialMedia[]> {
    const social = await this.socialRepository.find({
      order: { 
        id: "ASC"
      }
    })
    return social;
  }

  async findOne(id: number): Promise<SocialMedia> {
    const social = await this.socialRepository.findOne({ where: {id}});
    return social;
  }

  async update(id: number, updateSocialMediaDto: UpdateSocialMediaDto): Promise<SocialMedia> {
    const social = await this.socialRepository.findOne({ where: { id }});
    if (!social) {
      throw new Error("Social not found.")
    }

    Object.assign(social, updateSocialMediaDto);
    return this.socialRepository.save(social);
  }

  async remove(id: number): Promise<void> {
    await this.socialRepository.delete(id)
  }
}
