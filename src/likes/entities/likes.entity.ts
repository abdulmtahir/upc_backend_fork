
import { NewsEntity } from "src/news/entities/news.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('likes')
export class Like{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    user_id:number;

    @ManyToOne(()=> NewsEntity, (news) => news.id)
    news_id: number;

    //only a user will be allow to comment
   // @ManyToMany(()=> User, (user)=> user.id)
    //user:User;


    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at:Date;

    @UpdateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at:Date;

}