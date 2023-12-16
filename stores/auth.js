import { defineStore } from 'pinia';

import axios from "axios"

export const useAuthStore = defineStore("useAuthStore", {

    state: () => ({
        userData: {}
    }),

    actions: {
        async login(emailText, passwordText) {
            try {
                const response = await axios.post('https://dummyjson.com/auth/login', {
                    username: emailText,
                    password: passwordText,

                });
                const token = response.data.token
                console.log(response)

                const tokens = useCookie("token");
                tokens.value = token
                this.userData = response.data
                return true
            } catch (error) {
                console.error(error);
                return false
            }


        },
        async repetLogin(userInfo) {
            this.userData = userInfo
        }
    },
});
