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

  create(createQuickContactDto: CreateQuickContactDto): Promise<QuickContact> {
    return this.contactRepository.save(createQuickContactDto);
  }

  findAll(): Promise<QuickContact[]> {
    return this.contactRepository.find({
      order: { 
        id: "ASC"
      }
    });
  }

  findOne(id: number): Promise<QuickContact> {
    return this.contactRepository.findOne({where: {id}});
  }

  update(id: number, updateQuickContactDto: UpdateQuickContactDto) {
    return this.contactRepository.update(id, updateQuickContactDto);
  }


  delete(id:number) {
    return  this.contactRepository.delete(id)
}
}
