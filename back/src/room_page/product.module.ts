import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { RoomPageService } from './room_page.service';
import { RoomPageController } from './room_page.controller';
import { RoomPageEntity } from './entities/room_page.entity';
import { RoomModule } from 'src/room/room.module';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([RoomPageEntity, CategoryEntity]),
    RoomModule,
    JwtModule,
  ],
  controllers: [RoomPageController],
  providers: [RoomPageService],
})
export class RoomPageModule {}
