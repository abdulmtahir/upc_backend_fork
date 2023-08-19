import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class OurPromises {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    statement: string;

    @Column({ nullable: false })
    image: string;

    @Column( { nullable: false } )
    title: string;

    @Column( { nullable: false } )
    description: string
}
