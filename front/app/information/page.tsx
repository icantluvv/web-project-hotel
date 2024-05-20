"use server"

import React from "react"
import styles from "../styles/info.module.scss"
import { getGalleryCategory } from "../actions/getGalleryCategory"
import GalleryCards from "./GalleryCards"

export default async function Information() {
    const GalleryCategory = await getGalleryCategory()

    return (
        <div className={styles.information}>
            <section className={styles.about_us}>
                <h1 className={styles.name_of}>О НАС</h1>
                <div className={styles.text_about}>
                    <p>
                        Номера в нашем Гостевом доме, расположенном на берегу
                        черного моря, соответствуют современным стандартам
                        гостиничного бизнеса: оснащены комфортными кроватями, с
                        хорошими матрацами, удобными санузлами с душем,
                        кондиционерами, LCD телевизорами. Кухонная зона со всем
                        необходимым оборудованием - набор посуды, холодильник,
                        микроволновая печь, чайник, индукционная панель.
                        Освежить свою одежду можно воспользовавшись
                        автоматической стиральной машиной, расположенной здесь
                        же.
                    </p>
                    <p>
                        У нас Вы можете выбрать размещение в номерах по Вашему
                        желанию и потребностям: одноместное; двухместное;
                        семейное трехместное; семейное четырехместное; в
                        некоторых номерах могут быть предоставлены
                        дополнительные места.
                    </p>
                    <p>
                        По просьбе гостей предоставляются туалетные и гладильные
                        принадлежности, фен, утюг, гладильная доска. И конечно
                        бесплатный Wi-Fi на всей территории мини-отеля.
                    </p>
                </div>

                <div className={styles.text_columns}>
                    <div className={styles.the_column}>
                        <h1>Удобства</h1>
                        <ul className={styles.list_text}>
                            <li>- Заезд 24 часа</li>
                            <li>
                                - Cистема бронирования через оператора или через
                                наш сайт
                            </li>
                            <li>
                                - Бесплатный паркинг для путеществующих на авто
                            </li>
                            <li>- Бесплатный WI-FI на территории</li>
                        </ul>
                    </div>

                    <div className={styles.the_column}>
                        <h1>Преимущества</h1>
                        <ul className={styles.list_text}>
                            <li>- Безопасность и конфиденциальность</li>
                            <li>
                                - Качественный сервис и высокий уровень комфорта
                            </li>
                            <li>
                                - Расположение в тихом районе Абхазии, 100 шагах
                                от моря
                            </li>
                            <li>- Индивидуальный подход к каждому гостю</li>
                        </ul>
                    </div>

                    <div className={styles.the_column}>
                        <h1>Сервис</h1>
                        <ul className={styles.list_text}>
                            <li>- Помощь в бронировании авиа и ж/д билетов</li>
                            <li>- Услуги корпоративным клиентам</li>
                            <li>- Визовые услуги</li>
                            <li>- Вызов такси</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.photo_gallery}>
                <h1>ФОТОГАЛЕРЕЯ</h1>
                {Array.isArray(GalleryCategory) &&
                    GalleryCategory.length > 0 &&
                    GalleryCategory.map((category) => (
                        <GalleryCards
                            key={category.id}
                            categoryphoto={category}
                        />
                    ))}
            </section>
        </div>
    )
}
