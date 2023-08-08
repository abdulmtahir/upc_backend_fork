import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { Role } from 'src/register-admin/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/auth/decorator/roles.decorator';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Post()
  create(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleryService.create(createGalleryDto);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Get()
  findAll() {
    return this.galleryService.findAll();
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Get(':id')
  findOne(@Param('id') galleryId: string) {
    return this.galleryService.show(+galleryId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Patch(':id')
  update(@Param('id') galleryId: number, @Body() updateGalleryDto: UpdateGalleryDto) {
    return this.galleryService.update(+galleryId, updateGalleryDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  deleteUser(@Param('galleryId', ParseIntPipe) galleryId: number){
    return this.galleryService.delete(galleryId);
}
  
  
}
