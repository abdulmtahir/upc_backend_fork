import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manifesto {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({nullable: true})
    image: string;

    @Column({nullable: true})
    quote: string;

    @Column({nullable: true})
    header: string;

    @Column({nullable: true})
    title: string;

    @Column({nullable: true})
    desc: string;
}
