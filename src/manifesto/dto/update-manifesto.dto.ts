import { PartialType } from '@nestjs/mapped-types';
import { CreateManifestoDto } from './create-manifesto.dto';

export class UpdateManifestoDto extends PartialType(CreateManifestoDto) {}
