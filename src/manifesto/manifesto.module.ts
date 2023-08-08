import { Module } from '@nestjs/common';
import { ManifestoService } from './manifesto.service';
import { ManifestoController } from './manifesto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manifesto } from './entities/manifesto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manifesto])],
  controllers: [ManifestoController],
  providers: [ManifestoService]
})
export class ManifestoModule {}
