import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PromisesService } from './promises.service';
import { CreatePromisesDto } from './dto/create-promises.dto';
import { UpdatePromisesDto } from './dto/update-promises.dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Role } from 'src/register-admin/role.enum';
import { OurPromises } from './entities/promises.entity';

@Controller('our-promises')
export class PromisesController {
  constructor(private readonly promisesService: PromisesService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Super, Role.Admin)
  @Post()
  createPromise(@Body() createPromisesDto: CreatePromisesDto): Promise<OurPromises> {
    return this.promisesService.create(createPromisesDto);
  }

  @Get()
  getAllPromises(): Promise<OurPromises[]> {
    return this.promisesService.getAllPromises();
  }

  @Get(':id')
  getPromiseById(@Param('id') id: number): Promise<OurPromises> {
    return this.promisesService.getPromiseById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Patch(':id')
  updatePromise(@Param('id') id: number,
  @Body() updatePromisesDto: UpdatePromisesDto,): Promise<OurPromises> {
    return this.promisesService.updatePromise(id, updatePromisesDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  deletePromise(@Param('id') id: number): Promise<void> {
    return this.promisesService.deletePromise(id);
  }}
