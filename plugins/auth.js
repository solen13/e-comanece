import axios from "axios";


export default defineNuxtPlugin((nuxtApp) => {

    const token = useCookie("token");
    const tokenVal = token._rawValue
    if (tokenVal) {
        console.log(tokenVal)
        const config = {
            headers: {
                'Authorization': `Bearer ${tokenVal}`,
                'Content-Type': 'application/json'
            }
        };

        //axios.get("https://dummyjson.com/auth/RESOURCE", config)
        // .then(response => {
        //     console.log(response.data);
        // })
        // .catch(error => {
        //     console.error('Hata oluştu:', error);
        // });

    } else {



        token.value = null
    }
})
