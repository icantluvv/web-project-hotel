/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePromoDto {
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

  @IsString()
  name: string = 'Название акции';

  @IsString()
  text: string;
}
