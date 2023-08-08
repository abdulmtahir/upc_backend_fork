import { PartialType } from '@nestjs/mapped-types';
import { CreateUpperNavDto } from './create-upper-nav.dto';

export class UpdateUpperNavDto extends PartialType(CreateUpperNavDto) {}
