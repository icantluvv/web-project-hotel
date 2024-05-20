import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class CreateRoomPageDto {
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
  chosecardId: number;
}
