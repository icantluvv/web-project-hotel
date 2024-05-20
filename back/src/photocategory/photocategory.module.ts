import { Module } from '@nestjs/common';
import { PhotoCategoryService } from './photocategory.service';
import { PhotoCategoryController } from './photocategory.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoCategoryEntity } from './entities/photocategory.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([PhotoCategoryEntity]),
    JwtModule,
  ],
  controllers: [PhotoCategoryController],
  providers: [PhotoCategoryService],
})
export class PhotoCategoryModule {}
