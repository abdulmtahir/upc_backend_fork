import { Admin } from "src/register-admin/entities/register-admin.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export enum Catelog {
    ALL_WORK = "all",
    CAMPAIGN= "campaign",
    EVENT ="event",
    SPEECH = "speech",
    VOTES = "votes",
}

@Entity()
export class Gallery {

    @PrimaryGeneratedColumn({ type: "bigint"})
    id: number;

    @Column( { 
        type: 'enum',
        enum: Catelog,
        default: Catelog.ALL_WORK
     } )
    catelog: Catelog;

    @Column()
    image: string;

    @CreateDateColumn({ type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date;

    @ManyToOne(() => Admin, admin => admin.id)
    userId: Admin[];

    // @Column()
    // eventId: number;
}
