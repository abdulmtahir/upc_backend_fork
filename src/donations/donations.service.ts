import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DonationEntity } from './entities/donation.entity';
import { DonationDto } from './dto/create-donation.dto';

@Injectable()
export class DonationService {
  constructor(
    @InjectRepository(DonationEntity)
    private readonly donationRepository: Repository<DonationEntity>,
  ) {}

  async createDonation(donationDto: DonationDto): Promise<DonationEntity> {
    const newDonation = this.donationRepository.create(donationDto);
    return this.donationRepository.save(newDonation);
  }

  async getAllDonations(): Promise<DonationEntity[]> {
    const donations = await  this.donationRepository.find();
    try {
        return donations;
    } catch (error) {
        throw new NotFoundException('The donations list is empty for now.');
    }
  }

  async getDonationById(id: number): Promise<DonationEntity> {
    const donation = await this.donationRepository.findOne({ where: {id}});
    try {
        return donation;
    } catch (error) {
        throw new NotFoundException('Result not found!!.');
    }
  }

  async updateDonation(id: number, donationDto: DonationDto): Promise<DonationEntity> {
    const donationToUpdate = await this.donationRepository.findOne({ where: {id}});
    if (!donationToUpdate) {
      throw new Error('Donation not found.');
    }

    // Update the fields from the DTO
    Object.assign(donationToUpdate, donationDto);
    return this.donationRepository.save(donationToUpdate);
  }

  async deleteDonation(id: number): Promise<void> {
    await this.donationRepository.delete(id);
  }
}
