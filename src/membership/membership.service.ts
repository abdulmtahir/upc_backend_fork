// membership.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MembershipEntity } from './entities/membership.entity';
import { CreateMembershipDto } from './dto/create-membership.dto';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(MembershipEntity)
    private readonly membershipRepository: Repository<MembershipEntity>,
  ) {}

  async createMembership(memberShipDto: CreateMembershipDto): Promise<MembershipEntity> {
    const newMembership = this.membershipRepository.create(memberShipDto);
    return this.membershipRepository.save(newMembership);
  }

  async getAllMemberships(): Promise<MembershipEntity[]> {
    return this.membershipRepository.find();
  }

  async getMembershipById(id: number): Promise<MembershipEntity> {
    return this.membershipRepository.findOne({ where: {id}});
  }

  async updateMembership(id: number, memberShipDto: CreateMembershipDto): Promise<MembershipEntity> {
    const membershipToUpdate = await this.membershipRepository.findOne({ where: {id}});
    if (!membershipToUpdate) {
      throw new Error('Membership not found.');
    }

    // Update the fields from the DTO
    Object.assign(membershipToUpdate, memberShipDto);
    return this.membershipRepository.save(membershipToUpdate);
  }

  async deleteMembership(id: number): Promise<void> {
    await this.membershipRepository.delete(id);
  }
}
