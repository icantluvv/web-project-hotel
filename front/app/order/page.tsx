"use client"

import Image from "next/image"
import styles from "../styles/order.module.scss"
import { useRouter } from "next/navigation"

const OrderPage = () => {
    const router = useRouter()

    return (
        <div className={styles.order}>
            <div className={styles.order_container}>
                <section className={styles.score}>
                    <div className={styles.score_image_container}>
                        <Image
                            className={styles.score_image}
                            src="/images/order/score2.svg"
                            alt="score2"
                            width={1224}
                            height={23}
                            layout="responsible"
                        ></Image>
                    </div>

                    <div className={styles.points}>
                        <div className={styles.first_point}>
                            <p>Номер и Цена</p>
                        </div>
                        <div className={styles.second_point}>
                            <p>Бронь и Оплата</p>
                        </div>
                        <div className={styles.third_point}>
                            <p>Подтверждение</p>
                        </div>
                    </div>
                </section>

                <section className={styles.info}>
                    <div className={styles.info_head}>
                        <h1>
                            Valentina <br />
                            Guest House
                        </h1>
                    </div>
                    <div className={styles.input_text}>
                        <div className={styles.type_and_food}>
                            <div className={styles.type}>Двуместный</div>
                            <div className={styles.food}>Без еды</div>
                            <input
                                type="date"
                                id="inside"
                                className={styles.type}
                                placeholder="Дата заезда"
                            />
                            <input
                                id="outside"
                                type="date"
                                className={styles.type}
                                placeholder="Дата выезда"
                            />
                        </div>
                        <div className={styles.title_guest}>
                            <h1>Информация о госте</h1>
                        </div>
                        <div className={styles.guest}>
                            <div className={styles.main_info}>
                                <input
                                    type="text"
                                    placeholder="Фамилия"
                                    className={styles.input_imfo}
                                />
                                <input
                                    type="text"
                                    placeholder="Имя"
                                    className={styles.input_imfo}
                                />
                                <input
                                    type="text"
                                    placeholder="Отчество"
                                    className={styles.input_imfo}
                                />
                                <input
                                    type="text"
                                    placeholder="E-mail"
                                    className={styles.input_imfo}
                                />
                                <input
                                    type="text"
                                    className={styles.input_imfo}
                                    placeholder="Домашний телефон"
                                />
                                <input
                                    type="text"
                                    className={styles.input_imfo}
                                    placeholder="Мобильный телефон"
                                />
                                <input
                                    type="text"
                                    placeholder="Город"
                                    className={styles.input_imfo}
                                />
                            </div>
                            <div className={styles.special_wants}>
                                <input
                                    type="text"
                                    placeholder="Особые пожелания"
                                    className={styles.input_special}
                                />
                            </div>
                        </div>
                    </div>
                    <button className={styles.button_go_order}>
                        Добавить к заказу
                    </button>
                </section>
            </div>
        </div>
    )
}

export default OrderPage
