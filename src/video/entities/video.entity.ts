import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Video {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    url: string;

    @Column({nullable: false})
    description: string;

    @Column({nullable: false})
    image: string;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    position: string;

}
