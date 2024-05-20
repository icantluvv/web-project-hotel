import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { GalleryEntity } from './entities/gallery.entity';
import { PhotoCategoryModule } from 'src/photocategory/photocategory.module';
import { PhotoCategoryEntity } from 'src/photocategory/entities/photocategory.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([GalleryEntity, PhotoCategoryEntity]),
    PhotoCategoryModule,
    JwtModule,
  ],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule {}
