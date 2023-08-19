import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsEntity } from './entities/news.entity';
import { Repository } from 'typeorm';
import { newsDto } from './dto/newsDto';

@Injectable()
export class NewsService {

    constructor(@InjectRepository(NewsEntity) private readonly newsRepo: Repository<NewsEntity>){}


    async createNews(newsDto:newsDto){

        const newsE = new NewsEntity()
        newsE.image = newsDto.image;
        newsE.article = newsDto.article;
        newsE.headline = newsDto.headline;
    

        const news = await this.newsRepo.create(newsE)
        return this.newsRepo.save(news);

    }

    async getById(id:number){
        const getById = await this.newsRepo.findOne({where:{id}})
        return getById
    }

    async getAll(){
        const getAll = await this.newsRepo.find();
        return getAll;
    }

    async updateNews(id:number,  newsDto:newsDto){
        const newsE = new NewsEntity()
        newsE.image = newsDto.image,
        newsE.article = newsDto.article;
        newsE.headline = newsDto.headline;

        const update = await this.newsRepo.update(id, newsE);
        if(update.affected >0){
            return ('updated')
        }else{
            return ('cant update')
        }

    }

    async deleteNews(id:number){
        return await this.newsRepo.delete(id)
    }
}
