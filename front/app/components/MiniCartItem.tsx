import React, { useEffect, useState } from "react"
import styles from "../styles/minicartitem.module.scss"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { GetCart } from "../lib/getCart"
import { deleteCart } from "../lib/deleteCart"

const MiniCartItem = () => {
    const [textSize, setTextSize] = useState("14px")

    const router = useRouter()

    function goToOrder() {
        router.push(`/order`)
    }

    const [displayElement, setDisplayElement] = useState("")

    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        async function fetchCart() {
            try {
                const cartData = await GetCart()
                setCart(cartData)
                console.log(cartData)
            } catch (error) {
                console.error("Error fetching cart:", error)
            }
        }
        fetchCart()
    }, [])

    function deleteProduct() {
        deleteCart()
        location.reload()
    }

    return (
        <div className={styles.cartitems}>
            <div className={styles.cartitem_container}>
                {cart.map((item, index) => (
                    <div className={styles.item_container} key={index}>
                        <div className={styles.image_container}>
                            <Image
                                src=""
                                width={100}
                                height={100}
                                layout="responsible"
                                alt="product_image"
                            />
                        </div>

                        <div className={styles.info}>
                            <p
                                className={styles.description}
                                style={{ fontSize: `${textSize}` }}
                            >
                                2-х местный номер на двоих персон с включенным в
                                стоимость питанием
                            </p>
                            <p className={styles.days}>3 Дня</p>
                        </div>
                        <div className={styles.button_container}>
                            <div
                                className={styles.price}
                                style={{ display: `${displayElement}` }}
                            >
                                <p>Цена</p>
                                <p>
                                    <span>{item.price}</span> p
                                </p>
                            </div>
                            <button
                                className={styles.button_delete}
                                onClick={deleteProduct}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MiniCartItem
