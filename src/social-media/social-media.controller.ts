import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SocialMediaService } from './social-media.service';
import { CreateSocialMediaDto } from './dto/create-social-media.dto';
import { UpdateSocialMediaDto } from './dto/update-social-media.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { Role } from 'src/register-admin/role.enum';
import { SocialMedia } from './entities/social-media.entity';

@Controller('social-media')
export class SocialMediaController {
  constructor(private readonly socialMediaService: SocialMediaService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Super, Role.Admin)
  @Post()
  create(@Body() createSocialMediaDto: CreateSocialMediaDto) {
    return this.socialMediaService.create(createSocialMediaDto);
  }

  @Get()
  findAll(): Promise<SocialMedia[]> {
    return this.socialMediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<SocialMedia> {
    return this.socialMediaService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Super, Role.Admin)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSocialMediaDto: UpdateSocialMediaDto): Promise<SocialMedia> {
    return this.socialMediaService.update(id, updateSocialMediaDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Super, Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.socialMediaService.remove(id);
  }
}
