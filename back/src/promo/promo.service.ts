import { BadRequestException, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';

import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { PromoEntity } from './entities/promo.entity';
import { Logger } from '@nestjs/common';

@Injectable()
export class PromoService {
  private readonly logger = new Logger(PromoService.name);
  constructor(
    @InjectRepository(PromoEntity)
    private promoRepository: Repository<PromoEntity>,
  ) {}

  async create(
    dto: CreatePromoDto,
    image: Express.Multer.File,
  ): Promise<PromoEntity> {
    return this.promoRepository.save({
      image: image.filename,
      name: dto.name,
      text: dto.text.split(','),
    });
  }

  async findAll(): Promise<PromoEntity[]> {
    return this.promoRepository.find();
  }

  async findOne(id: number): Promise<PromoEntity> {
    return this.promoRepository.findOneBy({ id });
  }

  async update(id: number, dto: UpdatePromoDto, image: Express.Multer.File) {
    // this.logger.log(image);
    const toUpdate = await this.promoRepository.findOneBy({ id });
    // this.logger.log(id);

    if (!toUpdate) {
      throw new BadRequestException(`Записи с id=${id} не найдено`);
    }

    if (dto.text !== undefined && dto.text.length > 0) {
      toUpdate.text = dto.text.split(',');
    }

    if (dto.name) {
      toUpdate.name = dto.name;
    }

    if (image) {
      if (toUpdate.image !== image.filename) {
        fs.unlink(`db_images/promo/${toUpdate.image}`, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
      toUpdate.image = image.filename;
    }

    return this.promoRepository.save(toUpdate);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.promoRepository.delete(id);
  }
}
