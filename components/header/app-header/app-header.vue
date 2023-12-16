<template>
  <div class="app-header">
    <div>logo</div>
    <div class="flex gap-3 text-textBack font-bold">
      <nuxt-link> Kupa bardak</nuxt-link>
      <nuxt-link> Kupa bardak</nuxt-link>
      <nuxt-link> Kupa bardak</nuxt-link>
      <nuxt-link> Kupa bardak</nuxt-link>
    </div>
    <div class="text-darkGreen">
      <span class="border-r border-gray-100 mr-2 pr-1">
        <button class="mr-3">
          <Icon name="mdi:magnify" size="24" />
        </button>
        <button @click="$router.push('/sepetim')">
          <Icon name="mdi:cart" size="24" />
        </button>
      </span>
    
      <NuxtLink v-if="!isUserLogged" to="/login"
        class="border-2 py-1 border-darkGreen px-2 rounded-lg font-medium"
      >
        <Icon name="radix-icons:arrow-right" size="24" />
        <span class="ml-2">Giriş yap</span>
      </NuxtLink>
      <button v-else @click="isUserCard = !isUserCard"  class="border-2 rounded-full p-2">
        <Icon name="ic:baseline-person" size="24" />
      </button>
    </div>
  </div>
  <user-nav-card
    v-if="isUserCard"
    class="absolute top-0 right-0 z-999 mt-16 mr-24"
  />
</template>

<script setup>
 import { computed, ref } from "vue";
import {useAuthStore} from "@/stores/auth"

const isUserCard=ref(false)
const authStore=useAuthStore()

const isUserLogged=computed(()=>authStore.userData.firstName)
console.log(isUserLogged)
</script>

<style  lang="scss" src="./app-header.scss"></style>
