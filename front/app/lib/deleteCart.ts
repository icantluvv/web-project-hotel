export async function deleteCart(): Promise<any> {
    const response = await fetch(`${process.env.baseApi}cart`, {
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
