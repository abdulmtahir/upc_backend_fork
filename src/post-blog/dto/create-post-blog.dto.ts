import {IsString,  IsNumber} from 'class-validator'

export class CreatePostBlogDto {

    @IsString()
    head_line:string;

    @IsString()
    blog:string;

    @IsString()
    image:string;
}
