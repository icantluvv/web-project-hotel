import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth-guards';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorators/role.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guards';

@ApiTags('cart')
@ApiBearerAuth()
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Post('addProductToCart')
  async addProductToCart(@Body() dto: CreateCartDto, @Request() req: any) {
    const startDate = new Date(dto.startDate);
    const endDate = new Date(dto.endDate);
    return this.cartService.addProductToCart(dto, req.user, startDate, endDate);
  }

  @UseGuards(JwtAuthGuard)
  @Get('getUserCartTotalPrice')
  getUserCartTotalPrice(@Request() req: any) {
    return this.cartService.getUserCartTotalPrice(req.user.id);
  }
  @Roles('admin')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req: any) {
    return this.cartService.findOne(+id, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findUserCart(@Request() req: any) {
    return this.cartService.findOneByUser(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  delete(@Request() req: any) {
    return this.cartService.delete(req.user);
  }
}
