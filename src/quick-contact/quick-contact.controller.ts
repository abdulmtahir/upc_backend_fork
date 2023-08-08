import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuickContactService } from './quick-contact.service';
import { CreateQuickContactDto } from './dto/create-quick-contact.dto';
import { UpdateQuickContactDto } from './dto/update-quick-contact.dto';
import { Role } from 'src/register-admin/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/auth/decorator/roles.decorator';
;

@Controller('quick-contact')
export class QuickContactController {
  constructor(private readonly quickContactService: QuickContactService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin ,Role.Super)
  @Post()
  create(@Body() createQuickContactDto: CreateQuickContactDto) {
    return this.quickContactService.create(createQuickContactDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Get()
  findAll() {
    return this.quickContactService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quickContactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuickContactDto: UpdateQuickContactDto) {
    return this.quickContactService.update(+id, updateQuickContactDto);
  }

}
