import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Motivation {

    @PrimaryGeneratedColumn({ type: 'bigint'})
    id:number;

    @Column()
    header: string;

    @Column()
    statement: string;

    @Column()
    image: string
}
