import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity()
export  class Team{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    Title:string;

    @Column({nullable:false})
    position:string;
    
    @Column({nullable:true})
    bio:string;

    @Column({nullable:false})
    image:string;

    @CreateDateColumn({type:'timestamp'})
    created_at: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updated_at:Date;


}