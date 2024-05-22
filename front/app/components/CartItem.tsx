import React, { useEffect, useState } from "react"
import styles from "../styles/cartitem.module.scss"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { GetCart } from "../lib/getCart"
import { deleteCart } from "../lib/deleteCart"
import Link from "next/link"

const CartItem = () => {
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
    const router = useRouter()
    function goToOrder() {
        router.push(`/order`)
    }

    return (
        <div className={styles.cartitems}>
            <div className={styles.cartitem_container}>
                <div
                    className={styles.warning}
                    style={{ display: cart.length === 0 ? "flex" : "none" }}
                >
                    Корзина пуста.
                    <Link href="/room" className={styles.link}>
                        Перейти к комнатам?
                    </Link>
                </div>
                {cart.map((item, index) => (
                    <div className={styles.item_container} key={index}>
                        <div className={styles.image_container}>
                            <Image
                                src={`${process.env.baseApi}room/image/${item.room.image}`}
                                layout="responsible"
                                width={100}
                                height={100}
                                alt="product_image"
                                className={styles.image}
                            />
                        </div>

                        <div className={styles.info}>
                            <p className={styles.description}>
                                {item.room.description}
                            </p>
                            <p className={styles.days}>
                                Бронирование на {item.Quantity} дня(-ей)
                            </p>
                        </div>
                        <div className={styles.button_container}>
                            <div className={styles.price}>
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

            <div className={styles.go_to_order}>
                <button
                    type="button"
                    className={styles.button_go_order}
                    onClick={goToOrder}
                >
                    Перейти к оформлению
                </button>
                <form className={styles.finally_price}>
                    <input
                        type="text"
                        placeholder="Ввести промокод"
                        className={styles.promokod}
                    />
                    <div className={styles.go_code}>
                        <button type="button" className={styles.go_code_button}>
                            Применить{" "}
                        </button>
                    </div>
                    <div className={styles.text_price}>
                        <p>Финальная стоимость:</p>
                        {cart.length > 0 ? (
                            cart.map((item, index) => (
                                <p key={index} className={styles.price}>
                                    {item.price || 0}р
                                </p>
                            ))
                        ) : (
                            <p className={styles.price}>0р</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CartItem
