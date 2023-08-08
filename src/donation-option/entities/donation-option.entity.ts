import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class donationOptionEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    amount:number;
}