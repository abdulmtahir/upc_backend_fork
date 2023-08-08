import { BlogEntity } from "src/blog/entities/blog.entity";
import { Admin } from "src/register-admin/entities/register-admin.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("Blog")
export class Blog{

    @PrimaryGeneratedColumn({ type: 'bigint'})
    id:number;

    @Column({nullable:true})
    head_line:string;

    @Column({nullable:false})
    blog:string;

    @Column()
    image:string;

    @CreateDateColumn({ type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date;

    @OneToMany(()=> BlogEntity, user => user.id)
    categoryId:number;

    @ManyToOne(()=> Admin, user => user.id)
    userId:number;
}