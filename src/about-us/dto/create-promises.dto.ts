import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreatePromisesDto {
    @IsString()
    statement: string;
  
    @IsString()
    @IsNotEmpty()
    image: string;
  
    @IsNumber()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @IsNotEmpty()
    description: string;
}
