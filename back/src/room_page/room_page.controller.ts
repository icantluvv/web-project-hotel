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
import { ApiTags, ApiConsumes, ApiBearerAuth } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

import { RoomPageService } from './room_page.service';
import { fileStorage } from './storage';
import { CreateRoomPageDto } from './dto/create-room_page.dto';
import { UpdateRoomPageDto } from './dto/update-room_page.dto';
import { RoomPageEntity } from './entities/room_page.entity';
import { DeleteResult } from 'typeorm';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/decorators/role.decorator';

@ApiTags('room_page')
@Controller('room_page')
@ApiBearerAuth()
export class RoomPageController {
  constructor(private readonly roomPageService: RoomPageService) {}
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  create(
    @Body() dto: CreateRoomPageDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<RoomPageEntity> {
    return this.roomPageService.create(dto, image);
  }

  @Get()
  findAll() {
    return this.roomPageService.findAll();
  }

  @Get('/image/:path')
  download(@Param('path') path: string, @Response() response) {
    return response.sendFile(path, { root: './db_images/room_page' });
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<RoomPageEntity> {
    return this.roomPageService.findOne(+id);
  }
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateRoomPageDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<RoomPageEntity> {
    return this.roomPageService.update(+id, dto, image);
  }
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.roomPageService.delete(+id);
  }
}
