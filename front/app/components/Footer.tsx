import styles from "../styles/footer.module.scss"
import Image from "next/image"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.information}>
                <div className={styles.container_for_geo_and_contacts}>
                    <div className={styles.geolocation}>
                        <h1>Геолокация</h1>
                        <div>
                            <a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"></a>
                            <a href="https://yandex.ru/maps/?ll=40.249220%2C43.315796&mode=search&sctx=ZAAAAAgBEAAaKAoSCWhaYmU03ENAEZ%2BUSQ1tnEdAEhIJs3xdhv900j8RWWyTisbavz8iBgABAgMEBSgKOABAqFBIAWoCcnWdAc3MTD2gAQCoAQC9AXnbE23CAQWKm7%2FsA4ICHdCz0LDQs9GA0LjQv9GIINCw0LHRhdCw0LfQuNGPigIAkgIFMjkzODaaAgxkZXNrdG9wLW1hcHM%3D&sll=40.249220%2C43.315796&sspn=0.012923%2C0.005976&text=%D0%B3%D0%B0%D0%B3%D1%80%D0%B8%D0%BF%D1%88%20%D0%B0%D0%B1%D1%85%D0%B0%D0%B7%D0%B8%D1%8F&utm_medium=mapframe&utm_source=maps&z=16.48"></a>
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=40.249220%2C43.315796&mode=search&sctx=ZAAAAAgBEAAaKAoSCWhaYmU03ENAEZ%2BUSQ1tnEdAEhIJs3xdhv900j8RWWyTisbavz8iBgABAgMEBSgKOABAqFBIAWoCcnWdAc3MTD2gAQCoAQC9AXnbE23CAQWKm7%2FsA4ICHdCz0LDQs9GA0LjQv9GIINCw0LHRhdCw0LfQuNGPigIAkgIFMjkzODaaAgxkZXNrdG9wLW1hcHM%3D&sll=40.249220%2C43.315796&sspn=0.012923%2C0.005976&text=%D0%B3%D0%B0%D0%B3%D1%80%D0%B8%D0%BF%D1%88%20%D0%B0%D0%B1%D1%85%D0%B0%D0%B7%D0%B8%D1%8F&z=16.48"
                                width="100%"
                                height="auto"
                            ></iframe>
                        </div>
                    </div>

                    <div className={styles.contacts}>
                        <div className={styles.title_contacts_container}>
                            <h1 className={styles.title_contacts}>Контакты</h1>
                        </div>
                        <ul className={styles.list_contacts}>
                            <li className={styles.number}>
                                <div className={styles.image_container}>
                                    <Image
                                        src="/images/footer/phone_footer.svg"
                                        width={100}
                                        height={100}
                                        alt="phone number"
                                        className={styles.img}
                                    />
                                </div>
                                <p>8 (862) 279-56-89</p>
                            </li>
                            <li className={styles.city}>
                                <div className={styles.image_container}>
                                    <Image
                                        src="/images/footer/home_footer.svg"
                                        alt="home"
                                        width={100}
                                        height={100}
                                        className={styles.img}
                                    />
                                </div>
                                <p>Абхазия, Цандрыпш</p>
                            </li>
                            <li className={styles.street}>
                                <div className={styles.image_container}>
                                    <Image
                                        src="/images/footer/location_footer.svg"
                                        width={100}
                                        height={100}
                                        alt="location"
                                        className={styles.img}
                                    />
                                </div>
                                <p>ул.Октябрьская, д.492</p>
                            </li>
                            {/* <li className={styles.enternet_mail}>
                <div className={styles.image_container}>
                  <Image
                    src="/images/footer/mail_footer.svg"
                    alt="mail"
                    width={100}
                    height={100}
                    className={styles.img}
                  />
                </div>
                <p>booking@valentinahouse.ru</p>
              </li> */}
                        </ul>
                    </div>
                </div>

                <div className={styles.container_for_coming_and_weather}>
                    <div className={styles.coming}>
                        <h1>Информация</h1>
                        <ul>
                            <li>
                                <p>Заезд: с 16:00</p>
                            </li>

                            <li>
                                <p>Выезд: до 12:00</p>
                            </li>

                            <li>
                                <p>Бесплатный WI-FI</p>
                            </li>

                            <li>
                                <p>Бесплатная парковка</p>
                            </li>

                            <li>
                                <a href="/information">О нас</a>
                            </li>

                            <li>
                                <a href="">Условия бронирования</a>
                            </li>

                            <li>
                                <a href="">Политика конфиденциальности</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.weather}>
                        <h1>Погода</h1>
                        <p>Яндекс.Погода : +17</p>
                        <ul className={styles.links}>
                            <li>
                                <a href="">
                                    <img
                                        src="./src/public/images/telegram.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src="./src/public/images/whatsapp.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src="./src/public/images/facebook.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src="./src/public/images/vk.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src="./src/public/images/inst.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styles.copy}>
                <p>© 2015–2021 – VALENTINA GUEST HOUSE</p>
            </section>
        </footer>
    )
}
