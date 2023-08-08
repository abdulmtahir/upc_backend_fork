import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Unique } from 'typeorm';
import { News } from './entities/news-latter.entity';
import { CreateNewsDto } from './dto/create-news-latter.dto';
import { UpdateNewsDto } from './dto/update-news-latter.dto';

@Injectable()
export class NewsService {

    constructor(
        @InjectRepository(News)
        private newsRepository: Repository<News>,
    ){}

    get(): Promise<News[]> {
        return  this.newsRepository.find();
    }

    create(createNewsDto: CreateNewsDto) {
      return this.newsRepository.save(createNewsDto);
  }

    update(updateNewsDto: UpdateNewsDto, newsId: number){
        return this.newsRepository.update(newsId, updateNewsDto)
    }

    show(newsId: number){
        return this.newsRepository.findOne({where: {id: newsId}});
    }

    delete(newsId: number){
        return this.newsRepository.delete(newsId);
    }
}
  