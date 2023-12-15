import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {

    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://dummyjson.com/'

    return {
        provide: {
            axios: axios
        }
    }

})


