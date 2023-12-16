import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from 'vee-validate'
import { required, email, confirmed, min, max, alpha_spaces, numeric, digits } from '@vee-validate/rules'
import { localize, setLocale } from "@vee-validate/i18n";
import tr from "@vee-validate/i18n/dist/locale/tr.json";

export default defineNuxtPlugin((nuxtApp) => {

    configure({
        generateMessage: localize({
            tr
        }),
    });

    nuxtApp.vueApp.component('VeeForm', VeeForm)
    nuxtApp.vueApp.component('VeeField', VeeField)
    nuxtApp.vueApp.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('email', email)
    defineRule('confirmed', confirmed)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alpha_spaces)
    defineRule('numeric', numeric);

    defineRule('digits', digits);



    setLocale("tr");

})
