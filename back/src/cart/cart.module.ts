import { Module } from '@nestjs/common';
import { CartService } from './cart.service';

import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cartItem.entity';
import { RoomModule } from 'src/room/room.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart, CartItem]),
    RoomModule,
    JwtModule,
    ConfigModule,
  ],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
