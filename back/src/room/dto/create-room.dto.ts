import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateRoomDto {
  @ApiProperty({
    type: 'file',
    properties: {
      file: {
        type: 'string',
        format: 'binary',
      },
    },
  })
  image: Express.Multer.File;

  @IsNumberString()
  free: number;

  @IsString()
  title: string = 'Имя номера';

  @IsString()
  description: string = 'Описание номера';

  @IsNumberString()
  square: number;

  @IsString()
  sleep: string;

  @IsNumberString()
  guest: number;

  @IsString()
  aboutroom: string;

  @IsString()
  pay: string;

  @IsString()
  prices: string = 'Цена';

  @IsString()
  food: string;

  @IsNumberString()
  categoryId: number;
}
