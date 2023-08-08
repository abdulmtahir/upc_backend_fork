import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { NewsService } from './news.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editeFileName } from './editeFileName/editeFileName';
import { imageFileFilter } from './filters/imageFilters';
import { newsDto } from './dto/newsDto';

@Controller('news')
export class NewsController {

    constructor(private readonly newsService: NewsService){}
    
    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: 'images',
            filename: editeFileName,
        }),
        fileFilter: imageFileFilter,
    }), )
    async CreateNewsDto(@UploadedFile()file:Express.Multer.File, @Body() newsDto: newsDto ){

        this.newsService.createNews(file.filename, newsDto);        
    }

    @Get(':id')
    getById(@Param('id') id:number){
        return this.newsService.getById(id);
    }

    @Get()
    getAll(){
        return this.newsService.getAll()
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: 'images',
            filename: editeFileName,
        }),
        fileFilter: imageFileFilter,
    }), )
    updateNews(@UploadedFile()file:Express.Multer.File,@Param('id') id:number, @Body() newsDto: newsDto){
        this.newsService.updateNews(id,file.filename, newsDto);  
    }

    @Delete(':id')
    deleteNews(@Param('id') id:number){
        return this.newsService.deleteNews(id);
    }

}
