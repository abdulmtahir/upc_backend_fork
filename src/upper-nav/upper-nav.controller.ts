import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UpperNavService } from './upper-nav.service';
import { CreateUpperNavDto } from './dto/create-upper-nav.dto';
import { UpdateUpperNavDto } from './dto/update-upper-nav.dto';
import { Role } from 'src/register-admin/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UpperNav } from './entities/upper-nav.entity';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/auth/decorator/roles.decorator';

@Controller('upper-nav')
export class UpperNavController {
  constructor(private readonly upperNavService: UpperNavService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Post()
  create(@Body() createUpperNavDto: CreateUpperNavDto): Promise<UpperNav> {
    return this.upperNavService.create(createUpperNavDto);
  }

  @Get()
  findAll(): Promise<UpperNav[]> {
    return this.upperNavService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<UpperNav> {
    return this.upperNavService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUpperNavDto: UpdateUpperNavDto): Promise<UpperNav> {
    return this.upperNavService.update(id, updateUpperNavDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.upperNavService.remove(+id);
  }
}
