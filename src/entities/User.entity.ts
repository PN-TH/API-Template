import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Material } from './Material.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: false, default: 'USER' })
  role: string;

  @Column({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Material, (material) => material.user)
  materials: Material[];
}
