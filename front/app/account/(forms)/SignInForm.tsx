"use client"

import { useState } from "react"
import styles from "../../styles/account_page/login.module.scss"
import { Login } from "../../lib/loginPostData"

function SignInForm() {
    var [isEmailFieldEmpty, setisEmailFieldEmpty] = useState(false)
    var [isPasswordFieldEmpty, setisPasswordFieldEmpty] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    }

    const isInputValid = () => {
        setisEmailFieldEmpty(false)
        setisPasswordFieldEmpty(false)

        if (email == "") {
            setisEmailFieldEmpty(true)
            throw new Error(`Email is not valid`)
        }

        if (password == "") {
            setisPasswordFieldEmpty(true)
            throw new Error(`Password is not valid`)
        }
    }

    const [token, setToken] = useState("")

    const handleSubmit = (event: any) => {
        event.preventDefault()
        try {
            isInputValid()
            Login(email, password)
                .then((data) => {
                    setToken(data.token)
                    localStorage.setItem("token", data.token)
                    window.location.reload()
                    console.log(localStorage.getItem("token"))
                })
                .catch((error) => {
                    console.error("Login failed:", error)
                })
        } catch (error) {
            console.error("Form validation failed:", error)
        }
    }

    return (
        <div className={styles.input_container}>
            <input
                type="email"
                placeholder="Почта"
                className={styles.input_container__input_text}
                value={email}
                onChange={handleEmailChange}
                style={{
                    border: isEmailFieldEmpty
                        ? "2px solid red"
                        : "2px solid black",
                }}
            />
            <input
                type="password"
                placeholder="Пароль"
                className={styles.input_container__input_text}
                value={password}
                onChange={handlePasswordChange}
                style={{
                    border: isPasswordFieldEmpty
                        ? "2px solid red"
                        : "2px solid black",
                }}
            />

            <div className={styles.button_signup_container}>
                <button className={styles.button_signup} onClick={handleSubmit}>
                    Войти в аккаунт
                </button>
            </div>
        </div>
    )
}

export default SignInForm
