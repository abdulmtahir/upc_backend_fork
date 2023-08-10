import { Module } from '@nestjs/common';
import { RegisterAdminController } from './register-admin.controller';
import { RegisterAdminService } from './register-admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/register-admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [RegisterAdminController],
  providers: [RegisterAdminService],
  exports: [RegisterAdminService],
})
export class RegisterAdminModule {}
