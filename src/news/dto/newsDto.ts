import { IsNotEmpty, IsString } from "class-validator";

export class newsDto{

    @IsString()
    statement:string;

    @IsString()
    @IsNotEmpty()
    headline:string;
    
    @IsString()
    @IsNotEmpty()
    article:string;
    
    @IsString()
    @IsNotEmpty()
    image:string;
    
}