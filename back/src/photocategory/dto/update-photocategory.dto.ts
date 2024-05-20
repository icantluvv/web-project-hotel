import { PartialType } from '@nestjs/swagger';
import { CreatePhotoCategoryDto } from './create-photocategory.dto';

export class UpdatePhotoCategoryDto extends PartialType(
  CreatePhotoCategoryDto,
) {}
