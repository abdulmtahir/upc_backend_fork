import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  async createMenu(menuDto: CreateMenuDto): Promise<Menu> {
    const newMenu = this.menuRepository.create(menuDto);
    return this.menuRepository.save(newMenu);
  }

  async getMenu(): Promise<Menu[]> {
    const menus = await  this.menuRepository.find();
    try {
        return menus;
    } catch (error) {
        throw new NotFoundException('The menus list is empty for now.');
    }
  }

  async getMenuById(id: number): Promise<Menu> {
    const menu = await this.menuRepository.findOne({ where: {id}});
    try {
        return menu;
    } catch (error) {
        throw new NotFoundException('Result not found!!.');
    }
  }

  async updateMenu(id: number, menuDto: UpdateMenuDto): Promise<Menu> {
    const menuToUpdate = await this.menuRepository.findOne({ where: {id}});
    if (!menuToUpdate) {
      throw new Error('Donation not found.');
    }

    // Update the fields from the DTO
    Object.assign(menuToUpdate, menuDto);
    return this.menuRepository.save(menuToUpdate);
  }

  async deleteMenu(id: number): Promise<void> {
    await this.menuRepository.delete(id);
  }
}
