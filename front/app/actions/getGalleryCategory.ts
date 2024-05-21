export async function getGalleryCategory(): Promise<GalleryCategory[]> {
    const response = await fetch(`${process.env.baseApi}photocategory`, {
        cache: "no-store",
        credentials: "same-origin",
    })
    const data = await response.json()

    const galleryCategories: GalleryCategory[] = data.map((item: any) => ({
        id: item.id,
        name: item.name,
    }))

    return galleryCategories
}
