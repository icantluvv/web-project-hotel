"use client"
import styles from "../styles/rooms/rooms.module.scss"
import React, { useState } from "react"

const Calendar = () => {
    const [firstDate, setFirstDate] = useState("")
    const [secondDate, setSecondDate] = useState("")

    const handleFirstDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputDate = new Date(e.target.value)
        const tomorrow = new Date()
        tomorrow.setHours(0, 0, 0, 0)
        inputDate.setHours(0, 0, 0, 0)

        const nextDay = new Date()
        nextDay.setDate(tomorrow.getDate() + 1)
        nextDay.setHours(0, 0, 0, 0)

        if (inputDate >= nextDay) {
            setFirstDate(e.target.value)
        } else {
            alert("Дата должна быть не раньше завтрашнего дня")
        }
    }

    const handleSecondDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputDate = new Date(e.target.value)
        const firstInputDate = new Date(firstDate)
        inputDate.setHours(0, 0, 0, 0)
        firstInputDate.setHours(0, 0, 0, 0)

        if (inputDate > firstInputDate) {
            setSecondDate(e.target.value)
        } else {
            alert("Дата должна быть позже первой даты")
        }
    }

    return (
        <div className={styles.user_choose}>
            <input
                className={styles.input_date}
                type="date"
                id="first_date"
                value={firstDate}
                onChange={handleFirstDateChange}
            />

            <input
                className={styles.input_date}
                type="date"
                id="second_date"
                value={secondDate}
                onChange={handleSecondDateChange}
            />
        </div>
    )
}

export default Calendar
