import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hero {

    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({})
    title: string;

    @Column({})
    message: string;

    @Column({})
    image: string;

    @Column({})
    button1_url: string;

    @Column({})
    button1_title: string;

    @Column({})
    button2_url: string;

    @Column({})
    button2_title: string;
}
