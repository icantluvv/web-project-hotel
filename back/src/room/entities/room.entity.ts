import { CartItem } from 'src/cart/entities/cartItem.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('room')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  free: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  square: number;

  @Column()
  sleep: string;

  @Column()
  guest: number;

  @Column()
  aboutroom: string;

  @Column()
  pay: string;

  @Column('int', { array: true })
  prices: number[];

  @Column()
  food: string;

  @OneToMany(() => CartItem, (cartItem) => cartItem.room)
  cartItem: CartItem[];

  @ManyToOne(() => CategoryEntity, (category) => category.room, {
    eager: true,
  })
  @JoinColumn()
  category: CategoryEntity;
}
