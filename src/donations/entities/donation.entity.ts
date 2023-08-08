import { MembershipEntity } from 'src/membership/entities/membership.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class DonationEntity {
  @PrimaryGeneratedColumn({ type: 'bigint'})
  id: number;

  @Column({ nullable: false})
  first_name: string;

  @Column({ nullable: false})
  last_name: string;

  @Column({ nullable: false})
  age: number;

  @Column({ nullable: false, unique: true})
  email: string;

  @Column({ nullable: false})
  phone_number: string;

  @Column({ nullable: false})
  country: string;

  @Column({ nullable: false})
  address: string;

  @Column({ nullable: false})
  postal_code: string;

  @Column({ nullable: false})
  city: string;

  @Column({ nullable: false})
  state: string;

  @Column({ nullable: false})
  frequency: string;

  @Column({ nullable: false})
  amount: number;

  @CreateDateColumn({ type: 'timestamp'})
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated_at: Date;

  @ManyToOne(() => MembershipEntity, memberShipEntity =>  memberShipEntity.id, { onDelete: 'CASCADE'})
  @JoinColumn()
  memberShipId: MembershipEntity;
}
