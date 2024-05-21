export async function getPromo(): Promise<Promo[]> {
    const response = await fetch(`${process.env.baseApi}promo`, {
        cache: "no-store",
        credentials: "same-origin",
    })
    const data = await response.json()

    const Promo: Promo[] = data.map((item: any) => ({
        id: item.id,
        image: item.image,
        name: item.name,
        text: item.text,
    }))

    return Promo
}
