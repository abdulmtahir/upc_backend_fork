import { Injectable } from '@nestjs/common';
import { CreateQuickContactDto } from './dto/create-quick-contact.dto';
import { UpdateQuickContactDto } from './dto/update-quick-contact.dto';
import { QuickContact } from './entities/quick-contact.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuickContactService {

  constructor(
    @InjectRepository(QuickContact)
    private contactRepository: Repository<QuickContact>,
  ){}

  create(createQuickContactDto: CreateQuickContactDto) {
    return this.contactRepository.save(createQuickContactDto);
  }

  findAll() {
    return `This action returns all quickContact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quickContact`;
  }

  update(id: number, updateQuickContactDto: UpdateQuickContactDto) {
    return this.contactRepository.update(id, updateQuickContactDto);
  }

}
