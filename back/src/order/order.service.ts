import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/order/entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UsersService } from 'src/users/users.service';
import { CartService } from 'src/cart/cart.service';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    private readonly cartService: CartService,
    private readonly userService: UsersService,
    private readonly categotyService: CategoryService,
  ) {}

  async CreateOrder(req: any, dto: CreateOrderDto) {
    const userBasket = await this.cartService.getUserBasket(req.user);

    if (userBasket.cartItems.length == 0) {
      throw new BadRequestException(
        'You cannot create an order with an empty cart',
      );
    }

    const user = await this.userService.findOne(req.user.id);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const orderEntity = new OrderEntity();
    Object.assign(orderEntity, dto);

    orderEntity.user = user;

    const category = await this.categotyService.findOne(
      userBasket.cartItems[0].room.category.id,
    );

    if (!category) {
      throw new BadRequestException(`Таких номеров нет`);
    }

    const cart = await this.cartService.findOneByUser(req.user);
    const choose = cart.cartItems[0].choose;

    if (choose == 1) {
      orderEntity.choose_foode = 'С питанием';
    } else {
      orderEntity.choose_foode = 'Без питания';
    }

    orderEntity.category = category;
    orderEntity.quantity = cart.cartItems[0].Quantity;

    await this.orderRepository.save(orderEntity);

    await this.cartService.delete(req.user);
    return orderEntity;
  }
  async getOrders(req: any) {
    const userOrder = await this.orderRepository.find({
      where: {
        user: req.user,
      },
    });
    return userOrder;
  }
}
