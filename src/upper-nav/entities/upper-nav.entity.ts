import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UpperNav {

    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({})
    logo_image: string;

    @Column({})
    email: string;

    @Column({})
    phone_number: number;
}
