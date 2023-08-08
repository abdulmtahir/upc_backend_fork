import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from './entities/blog.entity';
import { createBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {

    constructor(@InjectRepository(BlogEntity) private readonly createB: Repository<BlogEntity>,){}

    // method create a new Blog categor
    async createBlog(createBlogDto: createBlogDto){

        const cBlog =  this.createB.create(createBlogDto);
        return this.createB.save(cBlog);
    }

    // method to fetch all the category
    async getAllBlogCategory(){
        const blogCategory = await this.createB.find();
        
        try{
            return blogCategory
        }catch(console){
            return new NotFoundException('No data yet');
        }
        
    }

    // method to update Blog category

    async updateBlogCategory(id: number, createBlogDto: createBlogDto){
        const blogCategoryToUpdate = await this.createB.update(id, createBlogDto);
       
        if(blogCategoryToUpdate.affected !=0){
            return blogCategoryToUpdate;
        }else{
            return  'cant update this row';
        }
        
    }

    async getBlogById(id: number): Promise<BlogEntity> {
        const donation = await this.createB.findOne({ where: {id}});
        try {
            return donation;
        } catch (error) {
            throw new NotFoundException('Result not found!!.');
        }
      }

    async deleteBlog(id: number): Promise<void> {
        await this.createB.delete(id);
    }
}
