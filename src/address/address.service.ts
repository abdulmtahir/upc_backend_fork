import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Unique } from 'typeorm';
import { Address } from './entities/address.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {

    constructor(
        @InjectRepository(Address)
        private addressRepo: Repository<Address>,
    ){}

    get(): Promise<Address[]> {
        return  this.addressRepo.find();
    }

    create(createAddressDto: CreateAddressDto) {
      return this.addressRepo.save(createAddressDto);
  }

    update(updateAddressDto: UpdateAddressDto, id: number){
        return this.addressRepo.update(id, updateAddressDto)
    }

    show(id: number){
        return this.addressRepo.findOne({where: {id: id}});
    }

    delete(id: number){
        return this.addressRepo.delete(id);
    }
}
  