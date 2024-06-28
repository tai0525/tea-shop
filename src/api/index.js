// api/sever.js

import { setIsAdmin } from "@/utils/localStorage";
import axios from "axios";

const instance = axios.create({
    baseURL: '/mock',
    timeout: 5000
})
let admin = {
    username: 'admin@gmail.com',
}
instance.interceptors.request.use((config) => {
    if (config.data?.username === admin.username) { // 判斷是否為 admin
        setIsAdmin(true)
    } else {
        setIsAdmin(false)
    }
    return config
})

instance.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    return console.error(err)
});

export default instance