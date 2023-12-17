import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from 'vee-validate'
import { required, email, confirmed, min, max, alpha_spaces, numeric, digits } from '@vee-validate/rules'
import { localize, setLocale } from "@vee-validate/i18n";

export default defineNuxtPlugin((nuxtApp) => {
    const $t = nuxtApp.$i18n.t;

    nuxtApp.vueApp.component('VeeForm', VeeForm)
    nuxtApp.vueApp.component('VeeField', VeeField)
    nuxtApp.vueApp.component('ErrorMessage', ErrorMessage)

    defineRule('email', email)
    defineRule('confirmed', confirmed)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alpha_spaces)
    defineRule('numeric', numeric);
    defineRule('digits', digits);
    defineRule('required', required)

    defineRule('tcNumber', value => {
        if (!value || !value.length) {
            return 'Bu alan zorunludur';
        } else if (value.length !== 11)
            return $t('validations.tcNumber', { length: 11 })
        return true;
    });


    configure({
        generateMessage: localize('tr', {
            messages: {
                required: "Bu alan zorunludur ",
                numeric: "Sadece rakam kullanınız",
                email: "E-mail adresi geçerli değil",
                confirmed: "Şifreler uyuşmuyor",
                alpha_spaces: "Sadece harf giriniz",
            },
        }),
    });


    setLocale("tr");

})
