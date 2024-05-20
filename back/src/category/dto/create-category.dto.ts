import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  count: number;
}
