"use server";

import React from "react";
import styles from "../styles/home.module.scss";
import Image from "next/image";

const PromoCard: React.FC<PromoProps> = ({ promo }) => {

  const BaseUrl = `${process.env.baseApi}promo/image/`
  return (
    <div className={styles.container_card__card}>
      <div className={styles.container_for_image_promo}>
        <div className={styles.photo}>
          <Image
            width={100}
            height={100}
            src={BaseUrl + promo.image}
            alt="room images"
            layout="responsive"

            className={styles.image_promo}
          />
        </div>
        <div className={styles.text}>
          <h2>{promo.name}</h2>
          {promo.text.map((item, index) => (
            <div className={styles.promo_descriptions} key={index}>
              {index > 0 }
              <p>-{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
