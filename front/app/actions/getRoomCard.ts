export async function getRoomCards(): Promise<RoomCard> {
    const response = await fetch(`${process.env.baseApi}room`, {
        cache: "no-store",
        credentials: "same-origin",
    })
    const data = await response.json();
    const RoomCards: RoomCard = data.map((item: any) => ({
        id: item.id,
        image: item.image,
        free: item.number,
        title: item.title,
        description: item.description,
        square: item.square,
        sleep: item.sleep,
        guest: item.guest,
        aboutroom: item.aboutroom,
        pay: item.pay,
        prices: item.prices,
        food: item.food,
        category: {
          id: item.category.id,
          name: item.category.name,
          count: item.category.count,
        },
    }));
    
    return RoomCards;
}