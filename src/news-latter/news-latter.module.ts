import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsController } from './news-latter.controller';
import { NewsService } from './news-latter.service';
import { News } from './entities/news-latter.entity';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [TypeOrmModule.forFeature([News])],
  exports: [NewsService],
})
export class NewsModule {}
