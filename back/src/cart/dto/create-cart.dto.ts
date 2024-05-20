import { IsDate, IsNotEmpty, IsNumber, Validate } from 'class-validator';
import { DateGreaterThan } from './date-greater-than.validator';
import { Transform } from 'class-transformer';

export class CreateCartDto {
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value)) // Трансформация строки в объект Date для startDate
  startDate: Date;

  @IsNotEmpty()
  @IsDate()
  @Validate(DateGreaterThan, ['startDate'])
  @Transform(({ value }) => new Date(value)) // Трансформация строки в объект Date для endDate
  endDate: Date;

  @IsNotEmpty()
  @IsNumber()
  choose: number;
}
