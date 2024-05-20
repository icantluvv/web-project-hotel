"use client"

import React, { useEffect, useState } from "react"
import styles from "../styles/minicart.module.scss"
import Image from "next/image"
import { GetCart } from "../lib/getCart"
import MiniCartItemModule from "./MiniCartItem"
import { useRouter } from "next/navigation"

const MiniCartModule = () => {
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

    const [show, setShow] = useState("none")
    const [showCart, setShowCart] = useState("")

    const router = useRouter()
    const close = () => {
        setShow("none")
        setShowCart("")
    }

    const open = () => {
        setShow("")
        setShowCart("none")
    }

    function goToOrder() {
        router.push(`/order`)
    }
    return (
        <div className={styles.minicart}>
            <button
                onClick={open}
                className={styles.minicart_close}
                style={{
                    display: `${showCart}`,
                }}
            >
                <Image
                    src="/images/home/images/shop_bag.svg"
                    alt="open_cart"
                    width={70}
                    height={70}
                    layout="responsible"
                ></Image>
            </button>
            <div
                style={{ display: `${show}` }}
                className={styles.minicart_open}
            >
                <button onClick={close} className={styles.close_button}>
                    <Image
                        src="/images/home/images/close.svg"
                        alt="close"
                        width={20}
                        height={20}
                        layout="responsible"
                    ></Image>
                </button>
                <h1 className={styles.title}>Корзина</h1>
                <div className={styles.product_carts}>
                    <div className={styles.product_cart}>
                        <MiniCartItemModule />
                    </div>
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
                        <div className={styles.text_price}>
                            {/* <p>Финальная стоимость:</p> */}
                            {/* <p className={styles.price}>1312р</p> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MiniCartModule
