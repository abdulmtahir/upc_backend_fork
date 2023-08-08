import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateManifestoDto } from './dto/create-manifesto.dto';
import { UpdateManifestoDto } from './dto/update-manifesto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Manifesto } from './entities/manifesto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ManifestoService {
  constructor(@InjectRepository(Manifesto) private manifestoRepository: Repository<Manifesto>) {}

  async create(createManifestoDto: CreateManifestoDto): Promise<Manifesto> {
    const manifesto = await this.manifestoRepository.create(createManifestoDto);
    return await this.manifestoRepository.save(manifesto);
  }

  async findAll(): Promise<Manifesto[]> {
    const  manifesto = await this.manifestoRepository.find();
    try {
      return manifesto
    } catch (error) {
      throw new NotFoundException('The admin list is empty for now.');
    }
  }

  async findOne(id: number): Promise<Manifesto> {
    const admin = await this.manifestoRepository.findOne({ where: {id}});
        try {
            return admin;
        } catch (error) {
            throw new NotFoundException('Result not found!!.');
        }
  }

  async update(id: number, updateManifestoDto: UpdateManifestoDto): Promise<Manifesto> {
    const manifest = await this.manifestoRepository.findOne({ where: {id}});
        if (!manifest) {
          throw new Error('Manifesto not found.');
        }
    
        // Update the fields from the DTO
        Object.assign(manifest, updateManifestoDto);
        return this.manifestoRepository.save(manifest);
  }

  async remove(id: number): Promise<void> {
    await this.manifestoRepository.delete(id);
  }
}
