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
import { PhotoCategoryService } from './photocategory.service';
import { CreatePhotoCategoryDto } from './dto/create-photocategory.dto';
import { UpdatePhotoCategoryDto } from './dto/update-photocategory.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorators/role.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guards';

@ApiTags('photocategory')
@Controller('photocategory')
@ApiBearerAuth()
export class PhotoCategoryController {
  constructor(private readonly categoryService: PhotoCategoryService) {}
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createCategoryDto: CreatePhotoCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdatePhotoCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.delete(+id);
  }
}
