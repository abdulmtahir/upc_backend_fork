import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { WelcomeService } from './welcome.service';
import { CreateWelcomeDto } from './dto/create-welcome.dto';
import { UpdateWelcomeDto } from './dto/update-welcome.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { Role } from 'src/register-admin/role.enum';
import { Welcome } from './entities/welcome.entity';

@Controller('welcome')
export class WelcomeController {
  constructor(private readonly welcomeService: WelcomeService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Post()
  create(@Body() createWelcomeDto: CreateWelcomeDto): Promise<Welcome> {
    return this.welcomeService.create(createWelcomeDto);
  }

  @Get()
  findAll(): Promise<Welcome[]> {
    return this.welcomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Welcome> {
    return this.welcomeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateWelcomeDto: UpdateWelcomeDto): Promise<Welcome> {
    return this.welcomeService.update(id, updateWelcomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.welcomeService.remove(id);
  }
}
