export async function GetCart(): Promise<CartItem[]> {
    const response = await fetch(`${process.env.baseApi}cart`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            accept: "application/json",
            "Content-Type": "application/json",
        },
        cache: "no-store",
        credentials: "same-origin",
    })

    const data = await response.json()

    const cartItems: CartItem[] = data.cartItems.map((item: any) => ({
        Quantity: item.Quantity,
        choose: item.choose,
        price: item.price,
        room: {
            id: item.room.id,
            image: item.room.image,
            title: item.room.title,
            description: item.room.description,
        },
    }))

    return cartItems
}
