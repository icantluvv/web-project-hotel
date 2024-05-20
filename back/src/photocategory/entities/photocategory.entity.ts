import { ApiHideProperty } from '@nestjs/swagger';
import { GalleryEntity } from 'src/gallery/entities/gallery.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('photocategory')
export class PhotoCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiHideProperty()
  @OneToMany(() => GalleryEntity, (gallery) => gallery.photocategory)
  gallery: GalleryEntity[];
}
