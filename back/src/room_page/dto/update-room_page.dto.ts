import { PartialType } from '@nestjs/swagger';
import { CreateRoomPageDto } from './create-room_page.dto';

export class UpdateRoomPageDto extends PartialType(CreateRoomPageDto) {}
