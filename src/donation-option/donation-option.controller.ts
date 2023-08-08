import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DonationOptionsService } from './donation-option.service';
import { donationOptionDto } from './dto/create-donation-option.dto';

@Controller('donation-options')
export class DonationOptionsController {

    constructor(private readonly donationService: DonationOptionsService){}


    @Post()
    createDonatioOption(@Body() amount: donationOptionDto){
        
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

    @Put(':id')
    updateDonationOption(@Param('id') id: number, donationDto: donationOptionDto){
        return this.donationService.update(id, donationDto);
    }

    @Delete(':id')
    deleteDonationOption(@Param('id') id:number){
        return this.donationService.deleteAmount(id);
    }
}