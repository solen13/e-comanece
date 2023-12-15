import { defineStore } from 'pinia';


// import axios from '@/plugins/axios'


// // const $axios = axios().provide.axios

// // const { $authStore, $generalStore, $axios } = useNuxtApp()
// // // const axios =useNuxtApp().$axios



export const useAuthStore = defineStore("useAuthStore", {

    state: () => ({

    }),

    actions: {
        async login(emailText, passwordText) {
            try {
                const response = await axios.post('auth/login', { mode: 'cors' }, {
                    username: emailText,
                    password: passwordText,

                });
                const token = response.data.token
                console.log(token)


            } catch (error) {
                console.error(error);
            }
            const response = await axios.get('products')
            console.log(response)

        }
    },
});
