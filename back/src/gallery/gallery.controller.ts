import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Response,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeleteResult } from 'typeorm';

import { fileStorage } from './storage';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { GalleryEntity } from './entities/gallery.entity';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/decorators/role.decorator';

@ApiTags('gallery')
@Controller('gallery')
@ApiBearerAuth()
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  create(
    @Body() dto: CreateGalleryDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<GalleryEntity> {
    return this.galleryService.create(dto, image);
  }

  @Get()
  findAll(): Promise<GalleryEntity[]> {
    return this.galleryService.findAll();
  }

  @Get('/image/:path')
  download(@Param('path') path: string, @Response() response) {
    return response.sendFile(path, { root: './db_images/gallery' });
  }
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateGalleryDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<GalleryEntity> {
    return this.galleryService.update(+id, dto, image);
  }
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.galleryService.delete(+id);
  }
}
