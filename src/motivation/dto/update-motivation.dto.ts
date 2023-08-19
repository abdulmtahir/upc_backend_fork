import { PartialType } from '@nestjs/mapped-types';
import { CreateMotivationDto } from './create-motivation.dto';

export class UpdateMotivationDto extends PartialType(CreateMotivationDto) {}
