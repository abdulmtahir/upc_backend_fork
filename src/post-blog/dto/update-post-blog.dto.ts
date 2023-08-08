import { PartialType } from '@nestjs/mapped-types';
import { CreatePostBlogDto } from './create-post-blog.dto';

export class UpdatePostBlogDto extends PartialType(CreatePostBlogDto) {}
