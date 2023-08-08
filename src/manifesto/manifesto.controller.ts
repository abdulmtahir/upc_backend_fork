import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManifestoService } from './manifesto.service';
import { CreateManifestoDto } from './dto/create-manifesto.dto';
import { UpdateManifestoDto } from './dto/update-manifesto.dto';
import { Manifesto } from './entities/manifesto.entity';

@Controller('manifesto')
export class ManifestoController {
  constructor(private readonly manifestoService: ManifestoService) {}

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Post()
  create(@Body() createManifestoDto: CreateManifestoDto): Promise<Manifesto> {
    return this.manifestoService.create(createManifestoDto);
  }

  @Get()
  findAll(): Promise<Manifesto[]> {
    return this.manifestoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Manifesto> {
    return this.manifestoService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateManifestoDto: UpdateManifestoDto): Promise<Manifesto> {
    return this.manifestoService.update(id, updateManifestoDto);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.manifestoService.remove(id);
  }
}
