export async function getGalleryCategory(): Promise<GalleryCategory[]> {
    const response = await fetch('http://127.0.0.1:7777/api/photocategory', {
        cache: "no-store",
        credentials: 'same-origin'
    });
    const data = await response.json();
    
    const galleryCategories: GalleryCategory[] = data.map((item: any) => ({
        id: item.id,
        name: item.name
    }));
    
    return galleryCategories;
}