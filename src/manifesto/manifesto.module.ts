import { Module } from '@nestjs/common';
import { ManifestoService } from './manifesto.service';
import { ManifestoController } from './manifesto.controller';

@Module({
  controllers: [ManifestoController],
  providers: [ManifestoService]
})
export class ManifestoModule {}
