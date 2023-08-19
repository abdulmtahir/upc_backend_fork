import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CreateMotivationDto } from './dto/create-motivation.dto';
import { UpdateMotivationDto } from './dto/update-motivation.dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Role } from 'src/register-admin/role.enum';
import { MotivationService } from './motivation.service';
import { Motivation } from './entities/motivation.entity';

@Controller('motivation')
export class MotivationController {
  constructor(private readonly motivationService: MotivationService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Super, Role.Admin)
  @Post()
  createMotivation(@Body() createMotivationDto: CreateMotivationDto): Promise<Motivation> {
    return this.motivationService.createMotivation(createMotivationDto);
  }

  @Get()
  getAllMotivation(): Promise<Motivation[]> {
    return this.motivationService.getAllMotivation();
  }

  @Get(':id')
  getMotivationById(@Param('id') id: number): Promise<Motivation> {
    return this.motivationService.getMotivationById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Patch(':id')
  updateMotivation(
    @Param('id') id: number,
    @Body() updateMotivationDto: UpdateMotivationDto): Promise<Motivation> {
    return this.motivationService.updateMotivation(id, updateMotivationDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  deleteMotivation(@Param('id') id: number): Promise<void> {
    return this.motivationService.deleteMotivation(id);
  }
}
