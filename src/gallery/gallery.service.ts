import { Injectable } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gallery } from './entities/gallery.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GalleryService {

  constructor(
    @InjectRepository(Gallery)
    private galleryRepository: Repository<Gallery>
  ){}
  
  create(createGalleryDto: CreateGalleryDto) {
    return this.galleryRepository.save(createGalleryDto);
  }

  findAll(): Promise<Gallery[]> {
    return this.galleryRepository.find();
  }

  // update(updateGalleryDto: UpdateGalleryDto, galleryId: number){
  //   return this.galleryRepository.update(galleryId, updateGalleryDto)
  // }

  update( galleryId: number, updateGalleryDto: UpdateGalleryDto){
    return this.galleryRepository.update(galleryId, updateGalleryDto)
  }


  show(galleryId: number){
    return this.galleryRepository.findOne({where: {id: galleryId}});
  }

  delete(galleryId: number){
    return this.galleryRepository.delete(galleryId);
  }
}
