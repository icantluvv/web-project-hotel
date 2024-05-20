interface RoomCard {
    id: number
    image: string
    free: number
    title: string
    description: string
    square: number
    sleep: string
    guest: number
    aboutroom: string
    pay: string
    prices: number[]
    food: string
    category: {
        id: number
        name: string
        count: number
    }
}
interface RoomCardProps {
    card: RoomCard
}

interface GalleryPhoto {
    id: number
    image: string
    photocategory: {
        id: number
        name: string
    }
}
interface GalleryPhotoProps {
    photo: GalleryPhoto
}

interface GalleryCategory {
    id: number
    name: string
    Photo: GalleryPhoto[]
}

interface GalleryCategoryProps {
    categoryphoto: GalleryCategory
}

interface Promo {
    id: number
    image: string
    name: string
    text: string[]
}
interface PromoProps {
    promo: Promo
}

interface UserCart {
    id: number
    cartItems: CartItem[]
}

interface CartItem {
    id: number
    Quantity: number
    room: RoomEntity
    cart: Cart
    choose: number
    price: number
}
