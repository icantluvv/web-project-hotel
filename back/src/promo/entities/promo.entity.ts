import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('promo')
export class PromoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column('simple-array')
  text: string[];
}
