import { Body, Controller, Post, Get, Param, Put, UseGuards, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { RolesGuard } from 'src/auth/guards/roles.guard';;
import { Role } from 'src/register-admin/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { BlogEntity } from './entities/blog.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { createBlogDto } from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {

    constructor(private readonly BlogService: BlogService){}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Post()
    createBlog(@Body() createBlogDto: createBlogDto){
        return this.BlogService.createBlog(createBlogDto);
    }
    
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles(Role.Admin, Role.Super)
    @Get()
    getBlog(){
        return this.BlogService.getAllBlogCategory();
    }

    @Get(':id')
    getDonationById(@Param('id') id: number): Promise<BlogEntity> {
        return this.BlogService.getBlogById(id);
  }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Put(':id')
    updateBlog(@Param('id') id:number, @Body() createBlogDto: createBlogDto){
        return this.BlogService.updateBlogCategory(id, createBlogDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Delete(':id')
    deleteBlog(@Param('id') id: number): Promise<void> {
        return this.BlogService.deleteBlog(id)
    }
}
