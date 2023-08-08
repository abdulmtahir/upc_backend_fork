import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from './entities/video.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private readonly videoRepo: Repository<Video>
  ){}

  create(createVideoDto: CreateVideoDto): Promise<Video> {
    return this.videoRepo.save(createVideoDto);
  }

  findAll(): Promise<Video[]> {
    const videos =  this.videoRepo.find();
    try {
      return videos;
  } catch (error) {
      throw new NotFoundException('The videos list is empty for now.');
  }

  }

  findOne(id: number): Promise<Video> {
    const video = this.videoRepo.findOne({where:{id}});
    try {
      return video;
  } catch (error) {
      throw new NotFoundException('The video is not found.');
  }

  }

  async update(id: number, updateVideoDto: UpdateVideoDto): Promise<Video> {
    //return this.videoRepo.update(id,updateCampaignDto);
    const updateVideo = await this.videoRepo.findOne({ where: {id}});
    if (!updateVideo) {
      throw new Error('The video is not found.');
    }

    // Update the fields from the DTO
    Object.assign(updateVideo, updateVideoDto);
    return this.videoRepo.save(updateVideo);
  }

  remove(id: number){
  return  this.videoRepo.delete(id);
  }
}
