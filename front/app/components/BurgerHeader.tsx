"use client"

import { useState } from "react"
import styles from "../styles/header/burger.module.scss"
import Image from "next/image"
import Link from "next/link"

const BurgerHeader = () => {
    const [isVisible, setIsVisible] = useState(true)

    const ChangeVisibleNav = () => {
        if (isVisible == false) {
            setIsVisible(true)
            return "100%"
        }
        setIsVisible(false)
        return "0%"
    }

    return (
        <header className={styles.burger_container}>
            <div className={styles.logo_container}>
                <h1>Valentina</h1>
                <h1>Guest House</h1>
            </div>
            <button
                className={styles.visible_burger}
                onClick={ChangeVisibleNav}
            >
                <Image
                    src="/images/header/images/burger.svg"
                    width={24}
                    height={24}
                    layout="responsible"
                    alt="burger"
                ></Image>
            </button>
            <nav
                className={styles.burger_menu}
                style={{ top: isVisible ? "-100%" : "0%" }}
            >
                <Link href="/" className={styles.nav_button_burger}>
                    ГЛАВНАЯ
                </Link>
                <Link href="/room" className={styles.nav_button_burger}>
                    НОМЕРА И ЦЕНЫ
                </Link>
                <Link href="articles" className={styles.nav_button_burger}>
                    СТАТЬИ
                </Link>
                <Link href="information" className={styles.nav_button_burger}>
                    ИНФОРМАЦИЯ
                </Link>
                <Link href="account" className={styles.nav_button_burger}>
                    АККАУНТ
                </Link>
            </nav>
        </header>
    )
}

export default BurgerHeader
