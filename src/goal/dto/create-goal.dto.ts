import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateGoalDto {
    @IsString()
    statement: string;
  
    @IsString()
    @IsNotEmpty()
    image: string;
  
    @IsNumber()
    title: string;
}  