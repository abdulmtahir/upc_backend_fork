import { PartialType } from '@nestjs/mapped-types';
import { createBlogDto } from './create-blog.dto';

export class UpdateBlogDto extends PartialType(createBlogDto) {}
