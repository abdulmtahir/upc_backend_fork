import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LikeRepository } from './entities/likes.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class LikesService {

    constructor(@InjectRepository(LikeRepository) private readonly liketRepo: Repository<LikeRepository>,){}

    async createLike(news_id:number, user_id:string){
        const Likes = new LikeRepository();
        Likes.news_id = news_id;
        Likes.user_id = user_id;
        const like = await this.liketRepo.create(Likes);
        return this.liketRepo.save(like);
    }

    async getAll() {
        const getAll = await this.liketRepo.createQueryBuilder('likes')
            .select("likes.news_id")
            .addSelect("COUNT(likes.news_id)", "total_likes")
            .groupBy("likes.news_id")
            .getRawMany();
    
        return getAll;
    }

    /*
    async creatComment(news_id:number, user_id:string){
        const likeE = new Like()
        likeE.news_id = news_id;
        likeE.user_id = user_id;
            const exist = await this.liketRepo.find({where:
            {
                user_id:user_id,
                news_id:news_id,
            }, relations:['news']})

            
        if(exist.length ===0 ){
            const createC = await this.liketRepo.create(likeE);
            return this.liketRepo.save(createC); 
            
        }else{
           return await this.liketRepo.createQueryBuilder()
            .delete()
            .where( { user_id: user_id } )
            .andWhere({news_id:news_id})
            .execute();
        }
        
    }
    */

    
}
