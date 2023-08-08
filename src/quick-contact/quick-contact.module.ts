import { Module } from '@nestjs/common';
import { QuickContactService } from './quick-contact.service';
import { QuickContactController } from './quick-contact.controller';
import { QuickContact } from './entities/quick-contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [QuickContactController],
  providers: [QuickContactService],
  imports: [TypeOrmModule.forFeature([QuickContact])],
  exports: [QuickContactService],
})
export class QuickContactModule {}
