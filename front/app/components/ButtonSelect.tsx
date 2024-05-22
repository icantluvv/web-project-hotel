"use client"
import styles from "../styles/rooms/roomcard.module.scss"

export default function ProductButton({ card, choose }: any) {
    const goToCart = (productId: number, choose: number) => {
        const startDateInput = document.getElementById(
            "first_date"
        ) as HTMLInputElement
        const endDateInput = document.getElementById(
            "second_date"
        ) as HTMLInputElement

        const startDate = startDateInput.value
        const endDate = endDateInput.value

        if (!startDate || !endDate) {
            alert("Пожалуйста, выберите обе даты")
            return
        }

        fetch(`${process.env.baseApi}cart/addProductToCart`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productId: productId,
                startDate: startDate,
                endDate: endDate,
                choose: choose,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ошибка при отправке запроса")
                }
                return response.json()
            })
            .then((data) => {
                console.log("Успешный ответ:", data)
                // Обработка успешного ответа от сервера
            })
            .catch((error) => {
                console.error("Ошибка:", error)
            })
    }

    return (
        <button
            onClick={() => goToCart(card.id, choose)}
            className={styles.button_select}
        >
            Выбрать
        </button>
    )
}
