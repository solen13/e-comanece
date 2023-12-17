import tr from '@/lang/tr'
import en from '@/lang/en'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'tr',
    strategy: 'prefix_except_default',
    defaultLocale: 'tr',
    detectBrowserLanguage: false,
    parsePages: false,
    sortRoutes: true,
    lazy: true,
    messages: {
        tr , en
    }
}))
