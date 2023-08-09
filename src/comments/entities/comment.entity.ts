import { NewsEntity } from "src/news/entities/news.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('Comments')
export class Comment{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    comment:string;

    @ManyToOne(()=> NewsEntity, (news)=> news.id)
    news_id:number;

    //only a user will be allow to comment
   // @ManyToMany(()=> User, (user)=> user.id)
    //user:User;


    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at:Date;

    @UpdateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at:Date;

}