import { PartialType } from '@nestjs/mapped-types';
import { CreatePromisesDto } from './create-promises.dto';

export class UpdatePromisesDto extends PartialType(CreatePromisesDto) {}
