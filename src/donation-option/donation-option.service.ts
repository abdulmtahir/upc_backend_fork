import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { donationOptionEntity } from './entities/donationOption.entity';
import { Repository } from 'typeorm';
import { donationOptionDto } from './dto/donationOptionDto';

@Injectable()
export class DonationOptionsService {
    constructor(@InjectRepository(donationOptionEntity) private readonly donationRepo: Repository<donationOptionEntity>){}

    async createDonationOption(donationDto: donationOptionDto){
        const exist = await this.donationRepo.findOne({where:{
            amount: donationDto.amount
        }})

        if(!exist){
            const donation = await this.donationRepo.create(donationDto);
           
            return this.donationRepo.save(donation);
        }else{
            throw ('this amount already existed');
        }
        
    }


    async getById(id:number){
        const getById = await this.donationRepo.findOne({where:{id}});

        if(!getById){
            throw new NotFoundException('not found');

        }else{
            return getById;
        }
    }

   async getAll(){
        const getAll = await this.donationRepo.find();

        if(!getAll){
            throw new NotFoundException('not found')
        }else{
            return getAll;
        }
    }

    async update(id:number,amount :donationOptionDto){
        const updateAmount = await this.donationRepo.update(id, amount);

        if(updateAmount.affected >0){
            return ('updated successfully');
        }else{
            return ('cant update')
        }
    }

    async deleteAmount(id:number){
        await this.donationRepo.delete(id);
    }
}
