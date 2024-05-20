import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  thirdname: string;

  @Column()
  email: string;

  @Column()
  homephone: string;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  info: string;

  @Column()
  choose_foode: string;

  @Column()
  quantity: number;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  @JoinColumn()
  user: UserEntity;

  // @ManyToOne(() => CategoryEntity, (category) => category.orders)
  // @JoinColumn()
  // category: CategoryEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.orders, {
    eager: true,
  })
  category: CategoryEntity;
}
