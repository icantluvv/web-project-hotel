import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { RoomEntity } from './entities/room.entity';
import { CategoryModule } from 'src/category/category.module';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([RoomEntity, CategoryEntity]),
    CategoryModule,
    JwtModule,
  ],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
})
export class RoomModule {}
