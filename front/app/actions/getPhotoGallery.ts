export async function getGalleryPhoto(): Promise<GalleryPhoto[]> {
    const response = await fetch(`${process.env.baseApi}gallery`, {
        cache: "no-store",
        credentials: "same-origin",
    })
    const data = await response.json();
    
    const galleryPhotos: GalleryPhoto[] = data.map((item: any) => ({
        id: item.id,
        image: item.image,
        photocategory: item.photocategory
    }));
    
    return galleryPhotos;
}