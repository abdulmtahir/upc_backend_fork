import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, Request, UseGuards } from "@nestjs/common";
import { Role } from "src/register-admin/role.enum";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";
import { Roles } from "src/auth/decorator/roles.decorator";
import { RolesGuard } from "src/auth/guards/roles.guards";
import { AddressService } from "./address.service";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";


@Controller('address')
export class AddressController {
    
    constructor(private addressService: AddressService){}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Post()
    createAddress(@Body() createAddressDto: CreateAddressDto, @Request() req) {
        return this.addressService.create(createAddressDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard) 
    @Roles(Role.Admin, Role.Super)
     @Patch('/:id')
     updateAddress(@Body() updateNewsDto: UpdateAddressDto, @Param('id', ParseIntPipe) id: number ) {
         return this.addressService.update(updateNewsDto, id);
     }

     @Get()
    getAddress(){
        return this.addressService.get();
    }

    //  @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles(Role.Admin, Role.Super)
     @Get('/:id')
     getOneAddress(@Param('id', ParseIntPipe) id: number){
         return this.addressService.show(id);
     }

     @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
     @Delete('/:id')
     deleteAddress(@Param('id', ParseIntPipe) id: number){
         return this.addressService.delete(id);
     }
}
