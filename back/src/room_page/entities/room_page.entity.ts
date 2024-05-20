import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from 'src/category/entities/category.entity';

@Entity('room_page')
export class RoomPageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @ManyToOne(() => CategoryEntity, (chosecard) => chosecard.roompage, {
    eager: true,
  })
  @JoinColumn()
  chosecard: CategoryEntity;

  // @ApiHideProperty()
  // @OneToMany(() => ProductInfoEntity, (info) => info.roompage)
  // info: ProductInfoEntity[];
}
