import { Module } from '@nestjs/common';
import { WelcomeService } from './welcome.service';
import { WelcomeController } from './welcome.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Welcome } from './entities/welcome.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Welcome])],
  controllers: [WelcomeController],
  providers: [WelcomeService]
})
export class WelcomeModule {}
