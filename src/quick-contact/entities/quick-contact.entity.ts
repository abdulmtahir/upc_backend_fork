import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class QuickContact {

    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ nullable: false } )
    first_name: string;

    @Column({ nullable: false } )
    last_name: string;
    
    @Column({ nullable: false } )
    email: string;

    @Column( { nullable: false } )
    message: string;

    @CreateDateColumn({ type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date; 
}
   