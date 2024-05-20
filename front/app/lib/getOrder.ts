// export default async function GetOrders(): Promise<any> {
//     return new Promise<>() => {
//     fetch("http://127.0.0.1:7777/api/order/getOrders", {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // Добавляем токен в заголовок Authorization
//         },
//     })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Ошибка при отправке запроса")
//             }
//             return response.json()
//         })
//         .then((data) => {
//             resolve(data)
//         })
//         .catch((error) => {
//             console.error("Ошибка:", error)
//             reject(error)
//         })
// }
