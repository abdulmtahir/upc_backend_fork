import { Body, Controller, Get, NotFoundException, Post, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { PostBlogService } from './post-blog.service';
import { BlogService } from 'src/blog/blog.service';

import { Role } from 'src/register-admin/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CreatePostBlogDto } from './dto/create-post-blog.dto';
import { Roles } from 'src/auth/decorators/roles.decorators';



@Controller('post-blog')
export class PostBlogController {

    constructor(private readonly postService: PostBlogService, private readonly blogService: BlogService ){}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Post()
    async createPost(@Body() postBlogDto: CreatePostBlogDto){
        const blogId = await this.postService.createPost(postBlogDto);

        if(!blogId){
            throw new NotFoundException ('the category not found');
 
        }
        return  this.postService.createPost(postBlogDto);


    }

    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles(Role.Admin, Role.Super)
    @Get(':id')
    getPostById(@Param('id') id:number){

        return this.postService.getPostById(id);
    }

    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles(Role.Admin, Role.Super)
    @Get()
    getAllPost(){
        return this.postService.getAllPost();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Put(':id')
    updatePostById(@Param('id') id:number,@Body() postDto: CreatePostBlogDto){
        return this.postService.updatePostById(id, postDto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Delete(':id')
    deletePostById(@Param('id') id: number){
        this.postService.deletePostById(id)  
    }


    
}
