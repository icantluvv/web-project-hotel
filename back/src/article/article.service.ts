import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from './entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private repository: Repository<ArticleEntity>,
  ) {}

  async create(dto: CreateArticleDto) {
    // dto.text = iconv.decode(iconv.encode(dto.text, 'UTF-8'), 'ISO-8859-5');
    return this.repository.save(dto);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateArticleDto) {
    const toUpdate = await this.repository.findOneBy({ id });
    if (!toUpdate) {
      throw new BadRequestException(`Запись с id=${id} не найдена`);
    }

    if (dto.text) {
      // dto.text = iconv.decode(iconv.encode(dto.text, 'UTF-8'), 'ISO-8859-5');
      toUpdate.text = dto.text;
    }

    if (dto.title) {
      toUpdate.title = dto.title;
    }
    return this.repository.save(toUpdate);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}
