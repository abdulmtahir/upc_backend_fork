import { PartialType } from '@nestjs/mapped-types';
import { registerAdminDto } from './create-register-admin.dto';

export class UpdateRegisterAdminDto extends PartialType(registerAdminDto) {}
