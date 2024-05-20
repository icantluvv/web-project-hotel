import styles from "../styles/rooms/rooms.module.scss"
import Image from "next/image"
import RoomCard from "./roomcard"
import { getRoomCards } from "../actions/getRoomCard"
import Calendar from "./Calendar"

export default async function Rooms() {
    const Cards = await getRoomCards()

    return (
        <main className={styles.main_rooms}>
            <div className={styles.container__main_rooms}>
                <div className={styles.order_score}>
                    <div className={styles.score_container}>
                        <Image
                            src={"/images/roomcard/images/score.svg"}
                            alt="score"
                            layout="responsive"
                            width={100}
                            height={100}
                            className={styles.score}
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
                </div>
                <Calendar></Calendar>
                <div className={styles.cards}>
                    {Array.isArray(Cards) &&
                        Cards.length > 0 &&
                        Cards.map((card) => (
                            <RoomCard key={card.id} card={card} />
                        ))}
                </div>
                <div className={styles.rules}>
                    <div className={styles.first_rule}>
                        <h1 className={styles.uslugi}>Услуги и оснащение</h1>

                        <div className={styles.text__first_rule}>
                            <p>
                                <span>Общие:</span> Кондиционер, Отопление,
                                Семейные номера, Номера для некурящих
                            </p>
                        </div>

                        <div className={styles.text__first_rule}>
                            <p>
                                <span>Активный отдых:</span> Детская игровая
                                площадка
                            </p>
                        </div>

                        <div className={styles.text__first_rule}>
                            <p>
                                <span>Услуги:</span>Общий лаундж/гостиная с
                                телевизором, Услуги по глажению одежды
                                (оплачивается отдельно), Прачечная (оплачивается
                                отдельно).
                            </p>
                        </div>
                        <div>
                            <div className={styles.text__first_rule}>
                                <p>
                                    <span>Интернет:</span>Wi-Fi предоставляется
                                    в номерах отеля бесплатно.
                                </p>
                            </div>

                            <div className={styles.text__first_rule}>
                                <p>
                                    <span>Парковка: </span>Бесплатная частная
                                    парковка на месте.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.second_rule}>
                        <h1>Правила</h1>
                        <div className={styles.text__seconde_rule}>
                            <p>
                                <span>Заезд:</span>С 16:00
                            </p>
                        </div>
                        <div className={styles.text__seconde_rule}>
                            <p>
                                <span>Выезд:</span>До 12:00
                            </p>
                        </div>
                        <div className={styles.text__seconde_rule}>
                            <p>
                                <span>Отмена / Предоплата:</span>Оплата
                                бронирования гостевого дома производится после
                                подтверждения бронирования. Вы можете сделать
                                предоплату в размере 30% от суммы бронирования
                                или полностью. При оплате 30% проживания доплату
                                за оставшиеся сутки можно произвести по прибытии
                                в наш гостевой дом. В случае отмены
                                бронирования, предоплата не возвращается. В
                                низкий сезон, а также при наличии Договора на
                                корпоративное обслуживание бронирование
                                гостевого дома возможно без предоплаты. Все
                                возможные вытекающие обязательства и права
                                Сторон возникают исключительно между
                                отправителем и получателем платежа — клиентом и
                                гостевым домом.
                            </p>
                        </div>
                        <div className={styles.text__seconde_rule}>
                            <p>
                                <span>
                                    Дети и дополнительные спальные места:
                                </span>{" "}
                                Разрешается проживание детей любого возраста.
                                При размещении всех детей младше 2 лет на
                                детских кроватках проживание им предоставляется
                                бесплатно . При размещении всех детей младше 6
                                лет на дополнительных кроватях взимается RUB
                                1000 за ночь. При дополнительном размещении всех
                                детей старшего возраста или взрослых на
                                дополнительных кроватях взимается RUB 1000 за
                                ночь. Максимальное количество дополнительных
                                кроватей в номере - 1. Дополнительные кровати и
                                детские кроватки предоставляются по запросу.
                                Требуется подтверждение со стороны отеля о
                                предоставлении данной услуги. Дополнительные
                                услуги не включаются автоматически в общую
                                стоимость и оплачиваются отдельно во время
                                вашего проживания.
                            </p>
                        </div>
                        <div className={styles.text__seconde_rule}>
                            <p>
                                <span>Животные</span> Размещение домашних
                                животных допускается по предварительному
                                запросу. Данная услуга может быть платной.
                            </p>
                        </div>

                        <div className={styles.text__seconde_rule}>
                            <p>
                                <span>Принимаемые кредитные карты:</span>Этот
                                объект размещения принимает только наличные.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
