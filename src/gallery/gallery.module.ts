import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { Gallery } from './entities/gallery.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GalleryController],
  providers: [GalleryService],
  imports: [TypeOrmModule.forFeature([Gallery])],
  exports: [GalleryService],
})
export class GalleryModule {}
