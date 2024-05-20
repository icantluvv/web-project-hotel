import { BadRequestException, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';

import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { GalleryEntity } from './entities/gallery.entity';
import { PhotoCategoryEntity } from 'src/photocategory/entities/photocategory.entity';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(GalleryEntity)
    private galleryRepository: Repository<GalleryEntity>,

    @InjectRepository(PhotoCategoryEntity)
    private photocategoryrepository: Repository<PhotoCategoryEntity>,
  ) {}

  async create(
    dto: CreateGalleryDto,
    image: Express.Multer.File,
  ): Promise<GalleryEntity> {
    const gallery = new GalleryEntity();
    gallery.image = image.filename;

    const newGallery = await this.galleryRepository.save(gallery);

    const category = await this.photocategoryrepository.findOne({
      where: { id: dto.photocategoryId },
      relations: ['gallery'],
    });

    category.gallery.push(gallery);

    await this.photocategoryrepository.save(category);

    return newGallery;
  }

  async findAll(): Promise<GalleryEntity[]> {
    return this.galleryRepository.find();
  }

  async findByCategoryId(photocategoryId: number): Promise<GalleryEntity[]> {
    return this.galleryRepository
      .createQueryBuilder('gallery')
      .leftJoinAndSelect('gallery.photocategory', 'gallery')
      .where('gallery.photocategoryId = :photocategoryId', { photocategoryId })
      .getMany();
  }

  async update(
    id: number,
    dto: UpdateGalleryDto,
    image: Express.Multer.File,
  ): Promise<GalleryEntity> {
    const toUpdate = await this.galleryRepository.findOneBy({ id });
    if (!toUpdate) {
      throw new BadRequestException(`Записи с id=${id} не найдено`);
    }
    if (dto.photocategoryId) {
      const category = await this.photocategoryrepository.findOne({
        where: { id: dto.photocategoryId },
        relations: ['gallery'],
      });
      toUpdate.photocategory = category;
    }
    if (image) {
      if (toUpdate.image !== image.filename) {
        fs.unlink(`db_images/gallery/${toUpdate.image}`, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
      toUpdate.image = image.filename;
    }

    return this.galleryRepository.save(toUpdate);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.galleryRepository.delete(id);
  }
}
