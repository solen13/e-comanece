import { defineStore } from 'pinia';

import axios from "axios"

export const useAuthStore = defineStore("useAuthStore", {

    state: () => ({
        userData: {}
    }),

    actions: {
        async login(emailText, passwordText) {
            try {
                const response = (await axios.post('https://dummyjson.com/auth/login', {
                    username: emailText,
                    password: passwordText,

                }))?.data

                const { token } = response
                console.log(response)

                const tokens = useCookie("token");
                tokens.value = token
                this.userData = response



                const user = useCookie("user");
                user.value = response

                console.log(user)

                return true
            } catch (error) {
                console.error(error);
                return false
            }


        },
        async checkUser(userInfo) {
            this.userData = userInfo
        },
        async logout() {
            const router = useRouter()
            const user = useCookie("user")
            const token = useCookie("token")
            token.value = null
            user.value = null
            this.userData = {}
            router.push("/")
        }
    },
});
