// donation.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/register-admin/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { DonationService } from './donations.service';
import { DonationDto } from './dto/create-donation.dto';
import { DonationEntity } from './entities/donation.entity';

@Controller('donations')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  createDonation(@Body() donationDto: DonationDto): Promise<DonationEntity> {
    return this.donationService.createDonation(donationDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Super, Role.Admin)
  @Get()
  getAllDonations(): Promise<DonationEntity[]> {
    return this.donationService.getAllDonations();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Get(':id')
  getDonationById(@Param('id') id: number): Promise<DonationEntity> {
    return this.donationService.getDonationById(id);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Put(':id')
  updateDonation(@Param('id') id: number, @Body() donationDto: DonationDto): Promise<DonationEntity> {
    return this.donationService.updateDonation(id, donationDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  deleteDonation(@Param('id') id: number): Promise<void> {
    return this.donationService.deleteDonation(id);
  }
}
