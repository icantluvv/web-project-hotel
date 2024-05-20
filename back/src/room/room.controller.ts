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
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiConsumes, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

import { RoomService } from './room.service';
import { fileStorage } from './storage';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomEntity } from './entities/room.entity';
import { DeleteResult } from 'typeorm';
import { Roles } from 'src/decorators/role.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guards';

@ApiTags('room')
@Controller('room')
@ApiBearerAuth()
export class RoomController {
  constructor(private readonly cardService: RoomService) {}
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  create(
    @Body() dto: CreateRoomDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<RoomEntity> {
    return this.cardService.create(dto, image);
  }

  @Get()
  @ApiQuery({ name: 'categoryId', required: false })
  findAll(@Query('categoryId') categoryId: number): Promise<RoomEntity[]> {
    if (categoryId) return this.cardService.findByCategoryId(categoryId);
    else return this.cardService.findAll();
  }

  @Get('/image/:path')
  download(@Param('path') path: string, @Response() response) {
    return response.sendFile(path, { root: './db_images/cards' });
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<RoomEntity> {
    return this.cardService.findOne(+id);
  }
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateRoomDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<RoomEntity> {
    return this.cardService.update(+id, dto, image);
  }
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.cardService.delete(+id);
  }
}
