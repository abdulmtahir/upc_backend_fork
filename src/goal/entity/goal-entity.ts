import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Goal {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  statement: string;

  @Column({ nullable: false })
  image: string;

  @Column()
  title: string;
}
