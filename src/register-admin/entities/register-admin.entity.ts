import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Role } from "src/register-admin/role.enum";
import { Gallery } from "src/gallery/entities/gallery.entity";
import { Event } from "src/event/entities/event.entity";
import { Blog } from "src/post-blog/entities/post-blog.entity";
import { BlogEntity } from "src/blog/entities/blog.entity";


@Entity()
export class Admin{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    first_name: string;

    @Column({nullable:false})
    last_name: string;

    @Column({unique:true, nullable:false})
    email: string;

    @Column({nullable:true, })
    phone_number: number;

    @Column({nullable:false})
    password:string;

    @Column({ type: 'enum', enum: Role, default: Role.Admin})
    role: Role[];
 
    @Column({ nullable: false })
    image: string;

    @CreateDateColumn({ type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date;

    @OneToMany(() => BlogEntity, blog => blog.id)
    categoryId: BlogEntity[];

    @OneToMany(() => Gallery, gallery => gallery.id)
    galleryId: Gallery[];

    @OneToMany(() => Blog, blog => blog.id)
    blogId: Blog[];

    @OneToMany(() => Event, event => event.id)
    eventId: Event[];

    @OneToMany(() => Event, event => event.id)
    category: Event[];

    @BeforeInsert()
    async hashpassword(){ 

        this.password = await bcrypt.hash(this.password,10);
    }

}