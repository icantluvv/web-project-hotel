import { Cart } from 'src/cart/entities/cart.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Cart, (cart) => cart.user)
  cart: Cart;

  @CreateDateColumn()
  createAt: Date;

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];

  @ManyToOne(() => Role, (role) => role.user)
  role: Role;
}
