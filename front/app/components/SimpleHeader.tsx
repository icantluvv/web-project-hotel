"use server"

import Link from "next/link"
import Image from "next/image"
import styles from "../styles//header/header.module.scss"
import React from "react"
import BurgerHeader from "./BurgerHeader"
import '../styles/fonts.module.scss'

export async function SimpleHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.container_upper_lower}>
                <section className={styles.upper}>
                    <div className={styles.address_container}>
                        <div className={styles.container_img}>
                            <Image
                                src="/images/header/images/home_icon.svg"
                                alt="home_icon"
                                layout="responsive"
                                className={styles.home_img}
                                width={100}
                                height={100}
                            />
                        </div>
                        <p>Абхазия, Цандрыпш, ул.Октябрьская, д.492</p>
                    </div>

                    <div className={styles.mail_phone_container}>
                        <div className={styles.mail_container}>
                            <div className={styles.container_img}>
                                <Image
                                    src="/images/header/images/mail.svg"
                                    alt="mail_icon"
                                    layout="responsive"
                                    className={styles.mail_img}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <Link href={""}>
                                <p>booking@valentinahouse.ru</p>
                            </Link>
                            {/* <p>booking@valentinahouse.ru</p> */}
                        </div>

                        <div className={styles.phone_container}>
                            <div className={styles.container_img}>
                                <Image
                                    src="/images/header/images/phone.svg"
                                    alt="phone_icon"
                                    layout="responsive"
                                    className={styles.phone_img}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p>8 (862) 279-56-89</p>
                        </div>
                    </div>
                </section>

                <nav className={styles.lower}>
                    <div className={styles.logo_container}>
                        <h1>Valentina</h1>
                        <h1>Guest House</h1>
                    </div>
                    <ul className={styles.list_navigation}>
                        <Link href="/">ГЛАВНАЯ</Link>
                        <Link href="/room">НОМЕРА И ЦЕНЫ</Link>
                        <Link href="/articles">СТАТЬИ</Link>
                        <Link href="/information">ИНФОРМАЦИЯ</Link>
                        <Link href="/account">АККАУНТ</Link>
                    </ul>

                    <ul className={styles.list_links}>
                        <Link
                            href="https://web.telegram.org/k/"
                            className={styles.img_link}
                        >
                            <Image
                                width={100}
                                height={100}
                                src="/images/header/images/telegram.svg"
                                alt="telegram"
                                layout="responsive"
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com/?locale=ru_RU"
                            className={styles.img_link}
                        >
                            <Image
                                width={100}
                                height={100}
                                src="/images/header/images/facebook.svg"
                                alt="telegram"
                                layout="responsive"
                            />
                        </Link>
                        <Link
                            href="https://vk.com/"
                            className={styles.img_link}
                        >
                            <Image
                                width={100}
                                height={100}
                                src="/images/header/images/vk.svg"
                                alt="telegram"
                                layout="responsive"
                            />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            className={styles.img_link}
                        >
                            <Image
                                width={100}
                                height={100}
                                src="/images/header/images/inst.svg"
                                alt="telegram"
                                layout="responsive"
                            />
                        </Link>
                        <Link href="89003431232" className={styles.img_link}>
                            <Image
                                width={100}
                                height={100}
                                src="/images/header/images/whatsapp.svg"
                                alt="telegram"
                                layout="responsive"
                            />
                        </Link>
                    </ul>
                </nav>
            </div>
            <BurgerHeader></BurgerHeader>
        </header>
    )
}
