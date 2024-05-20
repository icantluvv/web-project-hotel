import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorators/role.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guards';

@ApiTags('article')
@Controller('article')
@ApiBearerAuth()
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.articleService.delete(+id);
  }
}
