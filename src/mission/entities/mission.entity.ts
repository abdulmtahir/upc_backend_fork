import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: false })
  statement: string;

  @Column({ nullable: false })
  image: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  desc: string;
}
