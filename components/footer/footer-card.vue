<template>
  <div class="h-[450px] w-full bg-white-200 flex flex-col justify-between "> 
   <div class="flex justify-between px-16 mt-16">
         <!-- left -->
         <div class="w-3/12">
            <NuxtLink to="/">
                 <img src="@/assets/image/Logo.png"/>
            </NuxtLink>
            <p class="  mt-10 font-semibold">
                The biggest marketplace managed by Ideologist corp, which provides various kinds of daily needs and hobbies.
            </p>
        </div>
        <!-- medium -->
        <div class="flex w-[68%] 2xl:w-[68%]">
          <div class="w-full">
            <h5>Müsteri servisi</h5>
            <ul>
                <li v-for="item in customerService" :key="item.name">
                    <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
                </li>
                
            </ul>
          </div>
          <div class="w-full">
            <h5>Extralar</h5>
            <ul>
                <li v-for="item in extra" :key="item.name">
                    <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
                </li>
              
            </ul>
          </div>
          <div class="w-full">
            <h5>Hesabım</h5>
            <ul>
                <li v-for="item in account" :key="item.name">
                    <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
                </li>
              
              
            </ul>
          </div>
          <div class="w-full" >
            <h5>İletişim</h5>
            <ul >
                <li>
                   <Icon name="fa-solid:align-center" size="20" />
                  <span class="text-xs  2xl:text-lg ml-2"> 
                     İçerenköy Mah. Eskievler Sk.
                    Çetin Ceylan Sitesi No:7 D:3 34752 Ataşehir/İstanbul
                  </span>
                </li>
                <li>
                  <Icon name="fa-solid:phone-alt" size="20" />
                  <span class="text-xs 2xl:text-lg  ml-2"> 
                     0850 303 21 03 - 0216 456 31 34
                    </span>
                </li>
                <li>
                    <Icon name="fa-solid:envelope" size="20" />
                  <span class="text-xs 2xl:text-lg  ml-2">ds@downturkiye.org</span>
                </li>
                
            </ul>
        </div>
        </div>
       
   </div>
   <div class="w-full  flex justify-between px-20 h-20 bg-white-300 items-center font-bold"> 
    <span>Tüm Hakları Saklıdır 2023</span>
    <span>Tasarım ve Altyapı: WEBUDI</span>
   </div>
    
  </div>
</template>

<script setup>

import {ref} from "vue"

const customerService=ref([
    {
        name:"KVKK",
        link:""
    },
    {
        name:"Hakımzda",
        link:""
    },
    {
        name:"İletişim",
        link:""
    },
    {
        name:"Ürün İadesi",
        link:""
    },
    {
        name:"Site Haritası",
        link:""
    },

])
const extra=ref([
    {
        name:"Marklar",
        link:""
    },
    {
        name:"Hediye Çeki",
        link:""
    },
    {
        name:"Kampanyalar",
        link:""
    },

])

const account=ref([
   {
        name:"Giriş yap",
        link:""
    },
    {
        name:"Kayıt Ol",
        link:""
    },
    {
        name:"Sepetim",
        link:""
    },
    {
        name:"Hesabım",
        link:""
    },
    {
        name:"Siparişler",
        link:""
    },
    {
        name:"Bülten Aboneliği",
        link:""
    }
])

</script>

<style lang="scss" src="./footer.scss"></style>
