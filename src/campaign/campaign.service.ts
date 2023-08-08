import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from './entities/campaign.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign) 
    private readonly campaignRepo: Repository<Campaign>
  ){}

  create(createCampaignDto: CreateCampaignDto): Promise<Campaign> {
    return this.campaignRepo.save(createCampaignDto);
  }

  findAll(): Promise<Campaign[]> {
    const campaigns =  this.campaignRepo.find();
    try {
      return campaigns;
  } catch (error) {
      throw new NotFoundException('The campaigns list is empty for now.');
  }

  }

  findOne(id: number): Promise<Campaign> {
    const campaign = this.campaignRepo.findOne({where:{id}});
    try {
      return campaign;
  } catch (error) {
      throw new NotFoundException('The donation is not found.');
  }

  }

  async update(id: number, updateCampaignDto: UpdateCampaignDto): Promise<Campaign> {
    //return this.campaignRepo.update(id,updateCampaignDto);
    const updateCampaign = await this.campaignRepo.findOne({ where: {id}});
    if (!updateCampaign) {
      throw new Error('Donation not found.');
    }

    // Update the fields from the DTO
    Object.assign(updateCampaign, updateCampaignDto);
    return this.campaignRepo.save(updateCampaign);
  }

  remove(id: number){
  return  this.campaignRepo.delete(id);
  }
}
