"use server"

import React from "react"
import styles from "./styles/home.module.scss"
import Image from "next/image"
import PromoCard from "./components/PromoCard"
import { getPromo } from "./actions/getPromo"

export default async function Home() {
    const Promo = await getPromo()
    return (
        <div className={styles.homepage}>
            <section className={styles.date_section}>
                <div className={styles.background}>
                    <Image
                        src="/images/home/images/date_background.svg"
                        width={100}
                        height={100}
                        alt="date_background"
                        layout="responsive"
                        className={styles.background_image}
                    />
                </div>
                {/* <div className={styles.calendar}></div> */}
            </section>

            <section className={styles.promo_section}>
                <h1 className={styles.name_promo}>НАШИ НОМЕРА</h1>
                <div className={styles.photo_container}>
                    <div className={styles.container_cards}>
                        {Array.isArray(Promo) &&
                            Promo.length > 0 &&
                            Promo.map((promo) => (
                                <PromoCard key={promo.id} promo={promo} />
                            ))}
                    </div>
                </div>
            </section>
            <section className={styles.about_company}>
                <div className={styles.company_container}>
                    <div className={styles.company_name}>
                        <h1>ГОСТЕВОЙ ДОМ </h1>
                        <h1> «Valentina Guest House», Абхазия</h1>
                    </div>
                    <div className={styles.company_picture_text}>
                        <div className={styles.company_picture}>
                            <Image
                                width={100}
                                height={100}
                                src="/images/home/images/women.svg"
                                alt="women"
                                layout="responsive"
                                className={styles.women}
                            />
                        </div>
                        <div className={styles.company_text}>
                            <p>Дорогие гости,</p>
                            <p>
                                Безопасность и комфорт гостей и персонала – это
                                приоритет нашей работы.
                            </p>
                            <p>
                                Мы круглосуточно следим за тем, что Министерство
                                здравоохранения Российской Федерации,
                                Федеральная служба по надзору в сфере защиты
                                прав потребителей и Всемирная организация
                                здравоохранения сообщают о распространении
                                нового типа коронавируса (COVID-19) и
                                беспрекословно выполняем рекомендации этих
                                организаций и местных органов здравоохранения.
                            </p>
                            <p>
                                Мы искренне сочувствуем всем, кого коснулось это
                                бедствие и с огромным уважением относимся к
                                врачам, местным сообществам и правительствам,
                                которые задействованы в прямой борьбе с
                                распространением коронавируса.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.comments}>
                <h1 className={styles.name_comments}>ОТЗЫВЫ О НАС</h1>
                <div className={styles.comment_box}>
                    <div className={styles.comments_texts}>
                        <p>
                            Все было прекрасно! Отличный номер, уютный и
                            комфортный, в номере чисто, все в рабочем состоянии!
                        </p>
                    </div>
                    <div className={styles.swap_text}>
                        <div className={styles.left_arrow}>
                            <Image
                                src="/images/home/images/left.svg"
                                width={16}
                                height={36}
                                layout="responsible"
                                alt="comments"
                                className="left_arrow_img"
                            ></Image>
                        </div>
                        <div className={styles.people}>
                            <Image
                                src="/images/home/images/man.svg"
                                width={80}
                                height={80}
                                layout="responsible"
                                alt="comments"
                                className="people_img"
                            ></Image>
                        </div>
                        <div className={styles.right_arrow}>
                            <Image
                                src="/images/home/images/right.svg"
                                width={16}
                                height={36}
                                layout="responsible"
                                alt="comments"
                                className="img"
                            ></Image>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
