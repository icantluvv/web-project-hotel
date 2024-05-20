import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePhotoCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
