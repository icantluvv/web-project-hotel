'use server'

import styles from "../styles/info.module.scss";
import Image from "next/image";

const GalleryPhotos: React.FC<GalleryPhotoProps> = ({ photo }) => {
  const baseUrl = 'http://127.0.0.1:7777/api/gallery/image/'

  return (
    <div className={styles.img}>
      <Image
        alt="gallery_photo"
        width={100}
        layout="responsive"
        height={100}
        className={styles.photo}
        src={baseUrl + photo.image}
      ></Image>
    </div>
  );
};

export default GalleryPhotos