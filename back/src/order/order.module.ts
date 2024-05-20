import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { UserModule } from 'src/users/users.module';
import { OrderEntity } from './entities/order.entity';
import { CartModule } from 'src/cart/cart.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from 'src/room/room.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity]),
    UserModule,
    CartModule,
    RoomModule,
    CategoryModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
