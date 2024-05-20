export async function deleteCart(): Promise<any> {
    const response = await fetch("http://127.0.0.1:7777/api/cart", {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            accept: "application/json",
            "Content-Type": "application/json",
        },
        cache: "no-store",
        credentials: "same-origin",
    })

    const data = await response.json()

    return data
}
