import { ApiHideProperty } from '@nestjs/swagger';
import { OrderEntity } from 'src/order/entities/order.entity';
import { RoomEntity } from 'src/room/entities/room.entity';
import { RoomPageEntity } from 'src/room_page/entities/room_page.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  count: number;

  @ApiHideProperty()
  @OneToMany(() => RoomEntity, (room) => room.category)
  room: RoomEntity[];

  @ApiHideProperty()
  @OneToMany(() => RoomPageEntity, (product) => product.chosecard)
  products: RoomPageEntity[];

  @ApiHideProperty()
  @OneToMany(() => RoomPageEntity, (roompage) => roompage.chosecard)
  roompage: RoomPageEntity[];

  @OneToMany(() => OrderEntity, (orders) => orders.category)
  orders: OrderEntity;
}
