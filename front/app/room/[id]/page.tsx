import styles from "../../styles/rooms/roompage.module.scss"
import Image from "next/image"
import React from "react"

const Room = () => {
    return (
        <div>
            <main className={styles.main_room}>
                <div className={styles.container__main_room}>
                    <section className={styles.order_section}>
                        <div className={styles.score_container}>
                            <Image
                                src={"/images/roomcard/images/score.svg"}
                                alt="score"
                                layout=""
                                className={styles.score}
                                width={100}
                                height={100}
                            />
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
                        </div>
                    </section>

                    <section className={styles.date_section}></section>

                    <section className={styles.info_section}>
                        <div className={styles.server_title}>
                            <h4>Server title</h4>
                        </div>

                        <div className={styles.description_texts}>
                            <div className={styles.left_column}>
                                <p>
                                    Идеальный выбор для семейного отдыха в
                                    Абхазии! Просторный трехместный номер с
                                    возможностью установки дополнительной
                                    кровати позволяет это!
                                </p>
                                <p>
                                    Для детей до 3-х лет бесплатно
                                    предоставляется детская кроватка (по
                                    предварительному запросу).
                                </p>
                            </div>

                            <div className={styles.right_column}>
                                <p>
                                    <span>Оснащение номера:</span>server request
                                </p>
                                <p>
                                    <span>Площадь номера:</span>server request
                                </p>
                                <p>
                                    <span>Спальные места:</span>server request
                                </p>
                                <p>
                                    <span>Оплата:</span>server request
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.photo_section}>
                        <div className={styles.left_arrow}>
                            <Image
                                alt="left_arrow"
                                className={styles.img_arrow}
                                src="../images/roompage/images/leftarrow.svg"
                                width={100}
                                height={100}
                            ></Image>
                        </div>
                        <div className={styles.carousel}>
                            <div className={styles.picture_of_room}></div>
                            <div className={styles.picture_of_room}></div>
                            <div className={styles.picture_of_room}></div>
                            <div className={styles.picture_of_room}></div>
                        </div>
                        <div className={styles.right_arrow}>
                            <Image
                                alt="right_arrow"
                                className={styles.img_arrow}
                                src="../images/roompage/images/rightarrow.svg"
                                width={100}
                                height={100}
                            ></Image>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Room
