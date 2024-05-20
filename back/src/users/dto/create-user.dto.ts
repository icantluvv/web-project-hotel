import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @MinLength(5, { message: 'Password must be more then 8 symbols' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be more then 8 symbols' })
  password: string;
}
