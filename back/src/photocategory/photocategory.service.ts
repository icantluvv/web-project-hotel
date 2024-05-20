import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePhotoCategoryDto } from './dto/create-photocategory.dto';
import { UpdatePhotoCategoryDto } from './dto/update-photocategory.dto';
import { PhotoCategoryEntity } from './entities/photocategory.entity';

@Injectable()
export class PhotoCategoryService {
  constructor(
    @InjectRepository(PhotoCategoryEntity)
    private photocategoryrepository: Repository<PhotoCategoryEntity>,
  ) {}

  async create(dto: CreatePhotoCategoryDto) {
    return this.photocategoryrepository.save(dto);
  }

  async findAll() {
    return this.photocategoryrepository.find();
  }

  async findOne(id: number) {
    return this.photocategoryrepository.findOneBy({ id });
  }

  async update(id: number, dto: UpdatePhotoCategoryDto) {
    const toUpdate = await this.photocategoryrepository.findOneBy({ id });
    if (!toUpdate) {
      throw new BadRequestException(`Запись с id=${id} не найдена`);
    }
    if (dto.name) {
      toUpdate.name = dto.name;
    }
    return this.photocategoryrepository.save(toUpdate);
  }

  async delete(id: number) {
    return this.photocategoryrepository.delete(id);
  }
}
