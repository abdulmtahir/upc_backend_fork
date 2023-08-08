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
    url: string;

    @Column({})
    url_title: string;
}
