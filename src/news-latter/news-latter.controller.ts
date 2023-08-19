import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, Request, UseGuards } from "@nestjs/common";
import { Role } from "src/register-admin/role.enum";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";
import { UpdateNewsDto } from "./dto/update-news-latter.dto";
import { NewsService } from "./news-latter.service";
import { CreateNewsDto } from "./dto/create-news-latter.dto";
import { Roles } from "src/auth/decorator/roles.decorator";
import { RolesGuard } from "src/auth/guards/roles.guards";


@Controller('news-letter')
export class NewsController {
    
    constructor(private newsService: NewsService){}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Post()
    createNews(@Body() createNewsDto: CreateNewsDto, @Request() req) {
        return this.newsService.create(createNewsDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard) 
    @Roles(Role.Admin, Role.Super)
     @Patch('/:newsid')
     updateUser(@Body() updateNewsDto: UpdateNewsDto, @Param('newsid', ParseIntPipe) newsId: number ) {
         return this.newsService.update(updateNewsDto, newsId);
     }

     @Get()
    getUsers(){
        return this.newsService.get();
    }

    //  @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles(Role.Admin, Role.Super)
     @Get('/:newsId')
     getUser(@Param('newsId', ParseIntPipe) newsId: number){
         return this.newsService.show(newsId);
     }

     @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
     @Delete('/:newsId')
     deleteUser(@Param('newsId', ParseIntPipe) newsId: number){
         return this.newsService.delete(newsId);
     }
}
