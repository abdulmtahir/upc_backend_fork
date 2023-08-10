import { IsString } from "class-validator";

export class CreateMissionDto {

    @IsString()
    statement: string;

    @IsString()
    image: string;

    @IsString()
    title: string;

    @IsString()
    desc: string;
}
