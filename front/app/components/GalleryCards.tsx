"use server"

import { getGalleryCategory } from "../actions/getGalleryCategory"
import { getGalleryPhoto } from "../actions/getPhotoGallery"
import styles from "../styles/info.module.scss"
import GalleryPhotos from "./GalleryPhotos"

const GalleryCards: React.FC<GalleryCategoryProps> = async ({
    categoryphoto,
}) => {
    const photo = await getGalleryPhoto()

    const filteredPhotos = photo.filter(
        (photo) => photo.photocategory.id === categoryphoto.id
    )

    return (
        <div className={styles.carousel}>
            <div className={styles.category_name}>
                <h2>{categoryphoto.name}</h2>
            </div>
            <div className={styles.photos_container}>
                <div className={styles.scroll}>
                    {filteredPhotos.map((photo) => (
                        <GalleryPhotos key={photo.id} photo={photo} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GalleryCards
