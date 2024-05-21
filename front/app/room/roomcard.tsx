"use server"
import styles from "../styles/rooms/roomcard.module.scss"
import Image from "next/image"
import Link from "next/link"
import ButtonSelect from "./ButtonSelect"

const RoomCard: React.FC<RoomCardProps> = ({ card }) => {
    const baseUrlPhoto = `${process.env.baseApi}room/image/`
    return (
        <div className={styles.cards__card}>
            <div className={styles.card_info_container}>
                <div className={styles.card_info_container__img_container}>
                    <Image
                        src={baseUrlPhoto + card.image}
                        alt="room_main_photo"
                        layout="responsive"
                        className={styles.card_img}
                        width={100}
                        height={100}
                    />
                </div>

                <div className={styles.card_info_texts}>
                    <div className={styles.card_info_texts__info__text}>
                        <div className={styles.info__text__head}>
                            <Link href={`/room/${card.title}`}>
                                <h1>{card.title}</h1>
                            </Link>
                        </div>
                        <p className={styles.card_top_description}>
                            {card.description}
                        </p>

                        <div className={styles.info_text_from_server}>
                            <div
                                className={
                                    styles.info_text__description_container
                                }
                            >
                                <p className={styles.info_text__description}>
                                    <span>Площадь номера:</span>
                                    {card.square}м2
                                </p>
                            </div>

                            <div
                                className={
                                    styles.info_text__description_container
                                }
                            >
                                <p className={styles.info_text__description}>
                                    <span>Спальные места: </span>
                                    {card.sleep}
                                </p>
                            </div>

                            <div
                                className={
                                    styles.info_text__description_container
                                }
                            >
                                <p className={styles.info_text__description}>
                                    <span>
                                        Максимальное количество гостей:{" "}
                                    </span>
                                    {card.guest}
                                </p>
                            </div>

                            <div
                                className={
                                    styles.info_text__description_container
                                }
                            >
                                <p className={styles.info_text__description}>
                                    <span>Оснащение номера:</span>
                                    {card.aboutroom}
                                </p>
                            </div>

                            <div
                                className={
                                    styles.info_text__description_container
                                }
                            >
                                <p className={styles.info_text__description}>
                                    <span>Оплата:</span>
                                    {card.pay}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.card_info_container__choose_buttons}>
                    <div className={styles.choose_buttons__food_type}>
                        <p>Начиная с</p>
                        <h3>{card.prices[0]} руб</h3>
                        <p>за 1 ночь, за номер</p>
                        <ButtonSelect card={card} choose={0}></ButtonSelect>
                        <p>Без питания</p>
                    </div>
                    <div className={styles.wall_between}></div>
                    <div className={styles.choose_buttons__food_type}>
                        <p>Начиная с</p>
                        <h3>{card.prices[1]} руб</h3>
                        <p>за 1 ночь, за номер</p>
                        {/* <button className={styles.button_select}>Выбрать</button> */}
                        <ButtonSelect card={card} choose={1}></ButtonSelect>
                        {/* <Link href={link} className={styles.button_select}>Выбрать</Link> */}
                        <p>{card.food}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomCard
