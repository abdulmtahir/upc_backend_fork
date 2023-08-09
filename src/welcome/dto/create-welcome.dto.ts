import { IsOptional, IsString } from 'class-validator';

export class CreateWelcomeDto {
  @IsString()
  @IsOptional()
  title: string;
}
