import axios from "axios";
import { useAuthStore } from "@/stores/auth"


export default defineNuxtPlugin((nuxtApp) => {

    const token = useCookie("token");
    const authStore = useAuthStore()
    const tokenVal = token._rawValue
    if (tokenVal) {
        const user = useCookie("user")
        authStore.repetLogin(tokenVal).then(res => {
            if (res) {
                authStore.checkUser(user.value)
            } else {
                token.value = null
            }
        })
    } else {
        token.value = null
    }
})
