"use client"

import React, { useEffect, useState } from "react"
import styles from "../../styles/account_page/user.module.scss"
import SignUpForm from "./SignUpForm"

const UserMenu = () => {
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            setShowForm(true)
            console.log(token)
        }
    }, [])

    function logout() {
        localStorage.removeItem("token")
        window.location.reload()
    }

    return (
        <div className={styles.user}>
            {showForm ? (
                <SignUpForm />
            ) : (
                <div className={styles.user__info_container}>
                    <button className={styles.button_logout} onClick={logout}>
                        Выйти из профиля
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserMenu
