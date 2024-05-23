"use client"

import React from "react"
import styles from "../styles/finish.module.scss"

const EndOrderButton = () => {
    const makeAnOrder = () => {}
    return (
        <button className={styles.end_order_button} onClick={makeAnOrder}>
            Сделать заказ
        </button>
    )
}

export default EndOrderButton
