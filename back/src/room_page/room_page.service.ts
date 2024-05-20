import { BadRequestException, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';

import { CreateRoomPageDto } from './dto/create-room_page.dto';
import { UpdateRoomPageDto } from './dto/update-room_page.dto';
import { RoomPageEntity } from './entities/room_page.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';

@Injectable()
export class RoomPageService {
  constructor(
    @InjectRepository(RoomPageEntity)
    private RoomPageRepository: Repository<RoomPageEntity>,

    @InjectRepository(CategoryEntity)
    private chosecardRepository: Repository<CategoryEntity>,
  ) {}

  async create(
    dto: CreateRoomPageDto,
    image: Express.Multer.File,
  ): Promise<RoomPageEntity> {
    const product = new RoomPageEntity();
    product.image = image.filename;

    const newProduct = await this.RoomPageRepository.save(product);

    const chosecard = await this.chosecardRepository.findOne({
      where: { id: dto.chosecardId },
      relations: ['roompage'],
    });

    chosecard.roompage.push(product);

    await this.chosecardRepository.save(chosecard);

    return newProduct;
  }

  async findAll(): Promise<RoomPageEntity[]> {
    return this.RoomPageRepository.find();
  }

  async findOne(id: number): Promise<RoomPageEntity> {
    return this.RoomPageRepository.findOneBy({ id });
  }

  async findByCategoryId(chosecardId: number): Promise<RoomPageEntity[]> {
    return this.RoomPageRepository.createQueryBuilder('room_page')
      .leftJoinAndSelect('room_page.chosecard', 'room_page')
      .where('room_page.chosecardId = :chosecardId', { chosecardId })
      .getMany();
  }

  async update(
    id: number,
    dto: UpdateRoomPageDto,
    image: Express.Multer.File,
  ): Promise<RoomPageEntity> {
    const toUpdate = await this.RoomPageRepository.findOneBy({ id });
    if (!toUpdate) {
      throw new BadRequestException(`Записи с id=${id} не найдено`);
    }
    if (dto.chosecardId) {
      const chosecard = await this.chosecardRepository.findOne({
        where: { id: dto.chosecardId },
        relations: ['roompage'],
      });
      toUpdate.chosecard = chosecard;
    }
    if (image) {
      if (toUpdate.image !== image.filename) {
        fs.unlink(`db_images/room_page/${toUpdate.image}`, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
      toUpdate.image = image.filename;
    }

    return this.RoomPageRepository.save(toUpdate);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.RoomPageRepository.delete(id);
  }
}
