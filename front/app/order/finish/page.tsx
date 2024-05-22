"use server"

import React from "react"
import styles from "../../styles/finish.module.scss"
import EndOrderButton from "../../components/EndOrderButton"

const page = () => {
    return (
        <div className={styles.finish_order}>
            <h1 className={styles.title_finish}>
                <div>Сведения об оплате</div>
            </h1>
            <div className={styles.info_container}>
                <div className={styles.upper_lower}>
                    <div className={styles.info_place}>
                        <div>Ваше полное имя: </div>
                        <div>Оплатить позже</div>
                    </div>
                    <div className={styles.info_place}>
                        <div>Email:</div>
                        <div>Оплатить позже</div>
                    </div>
                    <div className={styles.info_place}>
                        <div>Мобильный телефон:</div>
                        <div>Оплатить позже</div>
                    </div>
                </div>
                <div className={styles.upper_lower}>
                    <div className={styles.info_place}>
                        <div>Заезд:</div>
                        <div>Оплатить позже</div>
                    </div>
                    <div className={styles.info_place}>
                        <div>Выезд:</div>
                        <div>Оплатить позже</div>
                    </div>
                    <div className={styles.info_place}>
                        <div>Метод оплаты: </div>
                        <div>Оплатить позже</div>
                    </div>
                </div>
            </div>
            <div className={styles.about_room}>
                <div className={styles.type}></div>
                <div className={styles.days}></div>
                <div className={styles.money}></div>
            </div>
            <EndOrderButton></EndOrderButton>
        </div>
    )
}

export default page
