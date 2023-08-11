import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

Entity();
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  image: string;

  @Column({ nullable: false })
  title: string;
}
