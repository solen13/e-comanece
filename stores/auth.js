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

                const tokens = useCookie("token");
                tokens.value = token
                this.userData = response
                const user = useCookie("user");
                user.value = response
                return true

            } catch (error) {
                console.error(error);
                return false
            }


        },
        async checkUser(userInfo) {
            this.userData = userInfo
        },
        async register(userInfo) {

            axios.post('https://dummyjson.com/users/add', {
                firstName: userInfo.username,
                username: userInfo.username,
                lastName: userInfo.surname,
                email: userInfo.email,
                addressTitle: userInfo.addressTitle,
                id: userInfo.phoneNumber,
                password: userInfo.password,
                addresss: {
                    city: `${userInfo.city}-${userInfo.district}`,
                    address: `${userInfo.fullAddress}`,
                }

            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {

                })
                .catch(error => {
                    console.error('Hata oluştu:', error);
                });
        },
        async logout() {
            const router = useRouter()
            const user = useCookie("user")
            const token = useCookie("token")
            token.value = null
            user.value = null
            this.userData = {}
            router.push("/")
        },

        async repetLogin(tokenVal) {
            try {
                const response = await axios.get('https://dummyjson.com/auth', {
                    headers: {
                        'Authorization': `Bearer ${tokenVal}`, // Bearer token'ı Authorization başlığına ekle
                        'Content-Type': 'application/json'
                    }
                });

                return true;
            } catch (error) {
                console.error('Hata:', error);
                return false;
            }

        }
    },
});
