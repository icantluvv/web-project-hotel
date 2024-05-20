"use client"

import React, { useEffect } from "react"
import styles from "../styles/account_page/account.module.scss"
import { useState } from "react"
import SignUpForm from "./(forms)/SignUpForm"
import Image from "next/image"
import UserMenu from "./(forms)/UserModule"
import OrderMenu from "./(forms)/OrderModule"
import CartMenu from "./(forms)/CartModule"

const SideMenuAccount = () => {
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            setShowForm(true)
        } else {
            setShowForm(false)
        }
    }, [])

    const [isUserVisible, setIsUserVisible] = useState(true)
    const [isCartVisible, setIsCartVisible] = useState(false)
    const [isOrderVisible, setIsOrderVisible] = useState(false)

    const toggleUserMenu = () => {
        setIsUserVisible(true)
        setIsCartVisible(false)
        setIsOrderVisible(false)
    }

    const toggleCartMenu = () => {
        setIsCartVisible(true)
        setIsUserVisible(false)
        setIsOrderVisible(false)
    }

    const toggleOrderMenu = () => {
        setIsOrderVisible(true)
        setIsCartVisible(false)
        setIsUserVisible(false)
    }

    return (
        <div className={styles.account}>
            {showForm ? (
                <SignUpForm />
            ) : (
                <div className={styles.account}>
                    <div className={styles.sidebar}>
                        <nav className={styles.navigation_bar}>
                            <button
                                className={styles.button}
                                onClick={toggleUserMenu}
                            >
                                <div className={styles.image_container}>
                                    <Image
                                        className={styles.image}
                                        src="https://www.svgrepo.com/show/311063/person.svg"
                                        alt=""
                                        width={100}
                                        height={100}
                                        layout="responsive"
                                    ></Image>
                                </div>
                                <label className={styles.button_text}>
                                    Профиль
                                </label>
                            </button>

                            <button
                                className={styles.button}
                                onClick={toggleCartMenu}
                            >
                                <div className={styles.image_container}>
                                    <Image
                                        className={styles.image}
                                        src="https://www.svgrepo.com/show/533042/cart-plus.svg"
                                        alt=""
                                        width={100}
                                        height={100}
                                        layout="responsive"
                                    ></Image>
                                </div>
                                <label className={styles.button_text}>
                                    Корзина
                                </label>
                            </button>
                            <button
                                className={styles.button}
                                onClick={toggleOrderMenu}
                            >
                                <div className={styles.image_container}>
                                    <Image
                                        className={styles.image}
                                        src="https://www.svgrepo.com/show/493952/order-completed.svg"
                                        alt=""
                                        width={100}
                                        height={100}
                                        layout="responsive"
                                    ></Image>
                                </div>
                                <label className={styles.button_text}>
                                    Заказы
                                </label>
                            </button>
                        </nav>
                    </div>

                    <div className={styles.main}>
                        {isUserVisible && <UserMenu />}
                        {isCartVisible && <CartMenu />}
                        {isOrderVisible && <OrderMenu />}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SideMenuAccount
