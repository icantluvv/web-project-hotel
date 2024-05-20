import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { ArticleEntity } from './entities/article.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([ArticleEntity, ArticleEntity]),
    ArticleModule,
    JwtModule,
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
