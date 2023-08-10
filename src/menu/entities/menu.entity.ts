import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {

    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ nullable: false})
    title: string;

    @Column({ nullable: false})
    url: string;
}
