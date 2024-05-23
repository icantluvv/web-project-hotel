"use client"
import styles from "../styles/rooms/rooms.module.scss"
import React, { useState } from "react"

const Calendar = () => {
    const [firstDate, setFirstDate] = useState("")
    const [secondDate, setSecondDate] = useState("")

    const handleFirstDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputDate = new Date(e.target.value)
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        yesterday.setHours(0, 0, 0, 0)
        inputDate.setHours(0, 0, 0, 0)

        if (inputDate > yesterday) {
            setFirstDate(e.target.value)
            if (secondDate && new Date(secondDate) <= inputDate) {
                setSecondDate("")
            }
        } else {
            alert("Дата заезда не может быть прошедшим числом")
        }
    }

    const handleSecondDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputDate = new Date(e.target.value)
        const firstInputDate = new Date(firstDate)
        inputDate.setHours(0, 0, 0, 0)
        firstInputDate.setHours(0, 0, 0, 0)

        const firstDateForComparison = new Date(firstInputDate)
        firstDateForComparison.setDate(firstDateForComparison.getDate() + 1)

        if (inputDate >= firstDateForComparison) {
            setSecondDate(e.target.value)
        }
    }

    const handleFirstDateFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const currentDate = new Date().toISOString().split("T")[0]
        if (e.target.value === currentDate) {
            e.target.value = ""
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
                onFocus={handleFirstDateFocus}
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
