import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User.entity';
import { jsonTransformer } from './utils/transformers';

@Entity()
export class Material extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  picture: string;

  @Column({ nullable: true })
  availablity: string;

  @Column({ type: 'longtext', nullable: true, transformer: jsonTransformer })
  tags: string[];

  @Column({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => User, (user) => user.materials)
  user: User;

  @JoinColumn()
  material: Material;
}
