import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Cart } from './cart.entity';
import { RoomEntity } from 'src/room/entities/room.entity';

@Entity('cartitem')
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Quantity: number;

  @ManyToOne(() => RoomEntity, (room) => room.cartItem)
  @JoinColumn()
  room: RoomEntity;

  @ManyToOne(() => Cart, (cart) => cart.cartItems)
  cart: Cart;

  @Column()
  choose: number;

  @Column()
  price: number;

  // @OneToOne(() => OrderEntity, (order) => order.room)
  // cartItem: CartItem;
}
