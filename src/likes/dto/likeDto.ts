import { IsNumber } from "class-validator";


export class likeDto{

    @IsNumber()
    user_id:number;
    
}