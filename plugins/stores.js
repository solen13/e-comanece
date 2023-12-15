import { useAuthStore } from "~/stores/auth";
import { useGeneralStore } from "~/stores/general";

export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: {
            authStore: useAuthStore(),
            generalStore: useGeneralStore()
        }
    }
})


