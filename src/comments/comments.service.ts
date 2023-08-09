import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { commentDto } from './dto/commentDto';

@Injectable()
export class CommentsService {

    constructor(@InjectRepository(Comment) private readonly commentRepo: Repository<Comment>,){}

    async creatComment(id:number,comment: string){
        const commentE = new Comment()
        commentE.news_id = id;
        commentE.comment = comment;
        const createC = await this.commentRepo.create(commentE);
        return this.commentRepo.save(createC);

    }

    async getById(id:number){
        return this.commentRepo.findOne({where:{id}})
    }

    async getAll(){
        return this.commentRepo.find();
    }

    async deleteComment(id:number){
        return await this.commentRepo.delete(id);
    }
}
