import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
  imports: [TypeOrmModule.forFeature([Address])],
  exports: [AddressService],
})
export class AddressModule {}
