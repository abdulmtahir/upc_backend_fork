import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Welcome {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;
    
    @Column({ nullable: false})
    title: string;
}
