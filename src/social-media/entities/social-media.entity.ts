import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SocialMedia {

    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ })
    image: string;

    @Column({})
    url: string;
}
