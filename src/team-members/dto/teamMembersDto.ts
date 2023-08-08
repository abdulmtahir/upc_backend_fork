import { IsNotEmpty, IsString } from "class-validator";


export class teamMembersDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    Title:string;

    @IsString()
    @IsNotEmpty()
    position:string;

    @IsString()
    @IsNotEmpty()
    Bio:string;

    @IsString()
    image:string;
}