import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { DonationOptionsService } from './donation-option.service';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Role } from 'src/register-admin/role.enum';
import { CreateDonationOptionDto } from './dto/create-donation-option.dto';
import { UpdateDonationOptionDto } from './dto/update-donation-option.dto';

@Controller('donation-options')
export class DonationOptionsController {

    constructor(private readonly donationService: DonationOptionsService){}


    @Post()
    createDonatioOption(@Body() amount: CreateDonationOptionDto){
        
         const trimAmount = (amount)=>  {return amount.replace(/\s/g, '');} 
          
        return this.donationService.createDonationOption(trimAmount(amount))
    }

    @Get(':id')
    getById(@Param('id') id:number){
        return this.donationService.getById(id);
    }

    @Get()
    getAll(){
        return this.donationService.getAll()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Super, Role.Admin)
    @Put(':id')
    updateDonationOption(@Param('id') id: number, donationDto: UpdateDonationOptionDto){
        return this.donationService.update(id, donationDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Super, Role.Admin)
    @Delete(':id')
    deleteDonationOption(@Param('id') id:number){
        return this.donationService.deleteAmount(id);
    }
}