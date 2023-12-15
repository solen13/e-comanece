// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt", "nuxt-swiper",
 
],
  
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  ssr: false,


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '@/components',
      pathPrefix: false,
      extensions: ['vue'],
      extendComponent(component) {
        /**
         
        Remove 'Component' suffix for generated component names
        e.g.
        components/Xyz.component.vue
        XyzComponent -> Xyz*/
        component.pascalName = component.pascalName.replace('Component', '')
        component.kebabName = component.kebabName.replace('component', '')
        }
    }
    ],
  hooks: {
    'pages:extend'(routes) {
      routes.push(
        {
          name: 'urunler',
          path: '/urunler',
          file: '@/pages/products/index.vue'
        },
        {
          path: '/urunler/:detail',
          file: '@/pages/products/detail.vue'
        },
    //     {
    //         name: 'hesabim',
    //         path: '/hesabim',
    //         file: '@/pages/account/index.vue'
    //    },
       
    //     {
    //         name: 'profil',
    //         path: '/hesabim/profil',
    //         file: '@/pages/account/profile.vue'
    //    },
 

      )
    }
  },
  
});
