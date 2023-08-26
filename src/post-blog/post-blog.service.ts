import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/post-blog.entity';
import { CreatePostBlogDto } from './dto/create-post-blog.dto';


@Injectable()
export class PostBlogService {
    constructor(@InjectRepository(Blog) private readonly blogRe: Repository<Blog>,){}


   async createPost(postBlog: CreatePostBlogDto): Promise<Blog>{

    const post = this.blogRe.create(postBlog);;
    return this.blogRe.save(postBlog);
    }


    async getPostById(id:number){
        const getById = await this.blogRe.findOne({where:{id}})

        if(!getById){
            throw new NotFoundException('cant find this Post');

        }else{
            return getById;
        }
    }

    async getAllPost(){
        const getAll = await this.blogRe.find({
            order: { 
              id: "ASC"
            }
          });
        return getAll;
        
    }

    async updatePostById(id:number, postBlog: CreatePostBlogDto){
        const updatePostById = await this.blogRe.update(id, postBlog);

        if(updatePostById.affected !=0){
            return updatePostById;
        }else{
            throw new NotFoundException('cant update this row');
        }
    }

    async deletePostById(id:number){
        try{
        await this.blogRe.delete(id);
        return ('deleted successfully');
        
        }catch(error){
            throw new NotFoundException('cant delete this post')
        }
        
        

        
    }
}
