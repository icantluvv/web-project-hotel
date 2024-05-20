"use client"

import { useState } from "react"
import styles from "../../styles/account_page/registration.module.scss"
import { Register } from "../../lib/registerPostData"
import SignInForm from "./SignInForm"

function SignUpForm() {
    var [isEmailFieldEmpty, setisEmailFieldEmpty] = useState(false)
    var [isUserFieldEmpty, setisUserFieldEmpty] = useState(false)
    var [isPasswordFieldEmpty, setisPasswordFieldEmpty] = useState(false)

    const [email, setEmail] = useState("")
    const [username, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const handleNameChange = (event: any) => {
        setName(event.target.value)
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    }

    const isInputValid = () => {
        setisEmailFieldEmpty(false)
        setisUserFieldEmpty(false)
        setisPasswordFieldEmpty(false)

        if (email == "") {
            setisEmailFieldEmpty(true)
            throw new Error(`Email is not valid`)
        }

        if (username == "") {
            setisUserFieldEmpty(true)
            throw new Error(`Username is not valid`)
        }

        if (password == "") {
            setisPasswordFieldEmpty(true)
            throw new Error(`Password is not valid`)
        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        try {
            isInputValid()
            Register(email, username, password)
                .then((data) => {
                    localStorage.setItem("token", data.token)
                    console.log(data.token)
                    window.location.reload()
                })
                .catch((error) => {
                    console.error("Login failed:", error)
                })
        } catch (error) {
            console.error("Form validation failed:", error)
        }
    }

    const [ShowLoginModule, setShowLoginModule] = useState(false)

    const goLogin = () => {
        if (ShowLoginModule == false) {
            return setShowLoginModule(true)
        }
        return setShowLoginModule(false)
    }

    const buttonText = () => {
        if (ShowLoginModule == true) {
            return "Нет аккаунта? Регистрация"
        }
        return "Есть аккаунт? Войти"
    }

    return (
        <div className={styles.input_container}>
            {ShowLoginModule ? (
                <SignInForm />
            ) : (
                <div className={styles.show_container}>
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
                        type="text"
                        placeholder="Имя"
                        className={styles.input_container__input_text}
                        value={username}
                        onChange={handleNameChange}
                        style={{
                            border: isUserFieldEmpty
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
                        <button
                            className={styles.button_signup}
                            onClick={handleSubmit}
                        >
                            Регистрация
                        </button>
                    </div>
                </div>
            )}

            <div className={styles.swith_sign}>
                <button className={styles.button_signup} onClick={goLogin}>
                    {buttonText()}
                </button>
            </div>
        </div>
    )
}
export default SignUpForm
