/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        colors: {

            darkGreen: "#233541",
            textBack: "#0B0F0E",
            textRed: "#E04124",
            green: "#1D9E34",
            gray: {
                100: "#C4C8CC",
                200: "#818B9C",
                300: "#F6F8FA"
            },
            white: {
                100: "#fff",
                200: "#F7F7F7",
                300: "#F1F1F1",

            }
        },

    },
    plugins: [],
}
