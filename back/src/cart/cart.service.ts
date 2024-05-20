import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';
import { Cart } from './entities/cart.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { RoomService } from 'src/room/room.service';
import { CartItem } from './entities/cartItem.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
    private readonly productService: RoomService,
  ) {}

  async createCart(user: UserEntity): Promise<Cart> {
    const cart = new Cart();
    cart.user = user;
    await this.cartRepository.save(cart);
    return cart;
  }

  async getUserCartTotalPrice(userId: number) {
    const cart = await this.cartRepository.findOne({
      where: { user: { id: userId } },
      relations: {
        cartItems: {
          room: true,
        },
      },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found for user with ID: ' + userId);
    }
    if (cart.cartItems == null) {
      return 0;
    }
    let sum = 0;
    cart.cartItems.forEach(
      (a) => (sum += a.room.prices[a.choose] * a.Quantity),
    );
    return sum;
  }

  async addProductToCart(
    dto: CreateCartDto,
    user: any,
    startDate: Date,
    endDate: Date,
  ) {
    const product = await this.productService.getProductById(dto.productId);
    if (!product) {
      throw new BadRequestException(`Такого товара нет`);
    }

    const userCart = await this.cartRepository.findOne({
      relations: {
        cartItems: {
          room: true,
        },
      },
      where: {
        user: user,
      },
    });

    if (!userCart) {
      // Создаем новую корзину, если ее не существует
      throw new NotFoundException(`Cart not found ${user.id}`);
    }
    if (userCart.cartItems.length != 0) {
      throw new BadRequestException(`Корзина заполнена`);
    }
    const quantity = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    );
    const sum = product.prices[dto.choose] * quantity;

    const cartItem = this.cartItemRepository.create({
      room: product,
      Quantity: quantity,
      choose: dto.choose,
      cart: userCart,
      price: sum,
    });

    return await this.cartItemRepository.save(cartItem);
  }

  async findOneByUser(user: any) {
    const userCart = await this.cartRepository.findOne({
      relations: {
        cartItems: {
          room: true,
        },
      },
      where: {
        user: user,
      },
    });
    return userCart;
  }

  async findOne(productId: number, user: any) {
    const userCart = await this.cartRepository.findOne({
      relations: {
        cartItems: {
          room: true,
        },
      },
      where: {
        user: user,
      },
    });

    const product = userCart.cartItems;

    if (!product) {
      throw new NotFoundException(
        'Cart does not have product ID: ' + productId,
      );
    }

    return product;
  }

  async delete(user: any) {
    const userCart = await this.cartRepository.findOne({
      relations: {
        cartItems: {
          room: true,
        },
      },
      where: {
        user: user,
      },
    });

    if (!userCart) {
      throw new NotFoundException(`Cart not found for user`);
    }
    await this.cartItemRepository
      .createQueryBuilder()
      .delete()
      .where('cartId = :cartId', { cartId: userCart.id })
      .execute();

    return await this.cartRepository.save(userCart);
  }

  async getUserBasket(user: any) {
    const userCart = await this.cartRepository.findOne({
      relations: {
        cartItems: {
          room: true,
        },
      },
      where: {
        user: user,
      },
    });
    return userCart;
  }
}
