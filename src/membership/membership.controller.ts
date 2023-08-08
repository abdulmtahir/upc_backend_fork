// membership.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { Role } from 'src/register-admin/role.enum';
import { MembershipEntity } from './entities/membership.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/auth/decorator/roles.decorator';


@Controller('memberships') 
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post()
  createMembership(@Body() membershipDto: CreateMembershipDto): Promise<MembershipEntity> {
    return this.membershipService.createMembership(membershipDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Get()
  getAllMemberships(): Promise<MembershipEntity[]> {
    return this.membershipService.getAllMemberships();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Get(':id')
  getMembershipById(@Param('id') id: number): Promise<MembershipEntity> {
    return this.membershipService.getMembershipById(id);
  } 

  @Put(':id')
  updateMembership(@Param('id') id: number, @Body() membershipDto: CreateMembershipDto): Promise<MembershipEntity> {
    return this.membershipService.updateMembership(id, membershipDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  deleteMembership(@Param('id') id: number): Promise<void> {
    return this.membershipService.deleteMembership(id);
  }
}
