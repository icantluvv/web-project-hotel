export function Register(
    email: string,
    username: string,
    password: string
): Promise<{ token: string }> {
    return new Promise<{ token: string }>((resolve, reject) => {
        fetch(`${process.env.baseApi}auth/register`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                username,
                password,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ошибка при отправке запроса")
                }
                return response.json()
            })
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                console.error("Ошибка:", error)
                reject(error)
            })
    })
}
