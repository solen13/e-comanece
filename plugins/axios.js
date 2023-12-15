import axios from "axios";

export default defineNuxtPlugin(async () => {
    axios.defaults.baseURL = 'https://dummyjson.com/'
    return {
        provide: {
            api: axios
        }
    }
})
