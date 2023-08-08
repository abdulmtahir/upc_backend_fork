import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from './entities/hero.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Role } from 'src/register-admin/role.enum';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Post()
  create(@Body() createHeroDto: CreateHeroDto, user: any): Promise<Hero> {
    return this.heroService.create(createHeroDto, user);
  }

  @Get()
  findAll(): Promise<Hero[]> {
    return this.heroService.findAll();
  }

  @Get(':id') 
  findOne(@Param('id') id: number): Promise<Hero> {
    return this.heroService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateHeroDto: UpdateHeroDto): Promise<Hero> {
    return this.heroService.update(+id, updateHeroDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.heroService.remove(id);
  }
}
