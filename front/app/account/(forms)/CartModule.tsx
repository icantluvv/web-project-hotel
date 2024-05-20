import React, { useEffect, useState } from "react"
import styles from "../../styles/account_page/cart.module.scss"
import { GetCart } from "../../lib/getCart"
import CartItem from "../../components/CartItem"

export default async function CartMenu() {
    return (
        <div className={styles.cart}>
            <CartItem></CartItem>
        </div>
    )
}
