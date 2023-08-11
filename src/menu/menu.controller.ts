import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Post()
  createMenu(@Body() donationDto: CreateMenuDto): Promise<Menu> {
    return this.menuService.createMenu(donationDto);
  }

  @Get()
  getMenus(): Promise<Menu[]> {
    return this.menuService.getMenu();
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // // @Roles(Role.Admin, Role.Super)
  @Get(':id')
  getMenuById(@Param('id') id: number): Promise<Menu> {
    return this.menuService.getMenuById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Patch(':id')
  updateMenu(
    @Param('id') id: number,
    @Body() donationDto: UpdateMenuDto,
  ): Promise<Menu> {
    return this.menuService.updateMenu(id, donationDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  deleteMenu(@Param('id') id: number): Promise<void> {
    return this.menuService.deleteMenu(id);
  }
}
