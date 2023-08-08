import { Blog } from "src/post-blog/entities/post-blog.entity";
import { Admin } from "src/register-admin/entities/register-admin.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("createBlog")
export class BlogEntity{

    @PrimaryGeneratedColumn({ type: 'bigint'})
    id:number;

    @Column({nullable:false})
    category:string;

    @Column({ nullable: true})
    description:string;

    @CreateDateColumn({ type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date;

    @ManyToOne(() => Admin, admin => admin.id, { onDelete: 'SET NULL'})
    @JoinColumn()
    userId: Admin;

    @ManyToOne(() => Blog, blog => blog.id, { onDelete: 'SET NULL'})
    @JoinColumn()
    categoryId: Blog;
}