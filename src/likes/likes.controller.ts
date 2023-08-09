import { Controller, Param, Post } from '@nestjs/common';
import { LikesService } from './likes.service';
import { likeDto } from './dto/likeDto';

@Controller('likes')
export class LikesController {

    constructor(private readonly likeService: LikesService){}

    @Post(':id')
    createComment(@Param('id') id:number,@Param('user_d') user_id:number){
        return this.likeService.creatComment(id, user_id)
    }
}
