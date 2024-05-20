import { BadRequestException, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';

import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomEntity } from './entities/room.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private cardRepository: Repository<RoomEntity>,

    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(
    dto: CreateRoomDto,
    image: Express.Multer.File,
  ): Promise<RoomEntity> {
    const card = new RoomEntity();
    card.image = image.filename;
    card.title = dto.title;
    card.free = dto.free;
    card.square = dto.square;
    card.sleep = dto.sleep;
    card.aboutroom = dto.aboutroom;
    card.guest = dto.guest;
    card.description = dto.description;
    card.pay = dto.pay;
    card.prices = dto.prices.split(',').map((x) => +x);
    card.food = dto.food;

    const newCard = await this.cardRepository.save(card);

    const category = await this.categoryRepository.findOne({
      where: { id: dto.categoryId },
      relations: ['room'],
    });

    category.room.push(card);

    await this.categoryRepository.save(category);

    return newCard;
  }

  async findAll(): Promise<RoomEntity[]> {
    return this.cardRepository.find();
  }

  async findOne(id: number): Promise<RoomEntity> {
    return this.cardRepository.findOneBy({ id });
  }

  async findByCategoryId(categoryId: number): Promise<RoomEntity[]> {
    return this.cardRepository
      .createQueryBuilder('card')
      .leftJoinAndSelect('card.category', 'category')
      .where('card.categoryId = :categoryId', { categoryId })
      .getMany();
  }

  async update(
    id: number,
    dto: UpdateRoomDto,
    image: Express.Multer.File,
  ): Promise<RoomEntity> {
    const toUpdate = await this.cardRepository.findOneBy({ id });
    if (!toUpdate) {
      throw new BadRequestException(`Записи с id=${id} не найдено`);
    }
    if (dto.title) toUpdate.title = dto.title;
    if (dto.food) toUpdate.food = dto.food;
    if (dto.pay) toUpdate.pay = dto.pay;
    if (dto.free) toUpdate.free = dto.free;
    if (dto.square) toUpdate.square = dto.square;
    if (dto.sleep) toUpdate.sleep = dto.sleep;
    if (dto.aboutroom) toUpdate.aboutroom = dto.aboutroom;
    if (dto.guest) toUpdate.guest = dto.guest;
    if (dto.description) toUpdate.description = dto.description;
    if (dto.prices) toUpdate.prices = dto.prices.split(',').map((x) => +x);
    if (dto.categoryId) {
      const category = await this.categoryRepository.findOne({
        where: { id: dto.categoryId },
        relations: ['room'],
      });
      toUpdate.category = category;
    }
    if (image) {
      if (toUpdate.image !== image.filename) {
        fs.unlink(`db_images/cards/${toUpdate.image}`, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
      toUpdate.image = image.filename;
    }

    return this.cardRepository.save(toUpdate);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.cardRepository.delete(id);
  }

  async getProductById(id: number) {
    return await this.cardRepository.findOneBy({ id: id });
  }
}
