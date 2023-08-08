import { PartialType } from '@nestjs/mapped-types';
import { CreateWelcomeDto } from './create-welcome.dto';

export class UpdateWelcomeDto extends PartialType(CreateWelcomeDto) {}
