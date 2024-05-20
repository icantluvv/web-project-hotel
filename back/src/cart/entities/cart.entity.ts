import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItem } from './cartItem.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserEntity, (user) => user.cart)
  @JoinColumn()
  user: UserEntity;

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart)
  cartItems: CartItem[];
}
