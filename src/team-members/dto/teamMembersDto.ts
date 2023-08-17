import { IsNotEmpty, IsString } from "class-validator";


export class teamMembersDto{
    @IsString()
    @IsNotEmpty()
    statement:string;

    @IsString()
    @IsNotEmpty()
    image:string;

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    Title:string;

    @IsString()
    @IsNotEmpty()
    bio:string;

}