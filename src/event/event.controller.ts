import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Role } from 'src/register-admin/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/auth/decorator/roles.decorator';


@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Get(':id')
  findOne(@Param('id') eventId: string) {
    return this.eventService.show(+eventId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  remove(@Param('id') eventId: string) {
    return this.eventService.delete(+eventId);
  }
}
