/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        baseApi: "http://127.0.0.1:7777/api/",
        YANDEX_MAPS_API_KEY: "91dedc19-6d5d-468c-9715-0268910488da",
    },
    images: {
        domains: ["icons8.com"],
    },
}

export default nextConfig
