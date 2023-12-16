
export default defineNuxtRouteMiddleware((to, from) => {
    const tokens = useCookie("token");

    if (tokens.value === undefined) {
        return navigateTo("/")
    }



})
