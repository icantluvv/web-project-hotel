import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhotoCategoryEntity } from 'src/photocategory/entities/photocategory.entity';

@Entity('gallery')
export class GalleryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @ManyToOne(
    () => PhotoCategoryEntity,
    (photocategory) => photocategory.gallery,
    {
      eager: true,
    },
  )
  @JoinColumn()
  photocategory: PhotoCategoryEntity;
}
