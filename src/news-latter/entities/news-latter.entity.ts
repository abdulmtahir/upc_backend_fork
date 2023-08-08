import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class News {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique: true})
    email: string;

    @CreateDateColumn({ type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date;
}