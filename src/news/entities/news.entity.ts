import { Comment } from "src/comments/entities/comment.entity";
import { Like} from "src/likes/entities/likes.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class NewsEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    image:string;

    @Column({nullable:false})
    headline:string;


    @Column({nullable:false})
    article:string;

    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at:Date;

    @UpdateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at:Date;

}