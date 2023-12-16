<template>
  <div class="user-nav-card">
    <div class="mt-3 border-b-2 border-gray-100">
      <h2 class="mb-4 font-bold text-xl">Ahmet Bulut</h2>
    </div>

    <div class="flex flex-col gap-6 h-full text-lg mt-3 font-semibold">
      <nuxt-link v-for="item in profilLink" :key="item.id" :to="item.link" class="text-gray-200">{{ item.name }}</nuxt-link>
      
    </div>
    <div class="h-24 border-t-2 border-gray-100 flex items-center">
      <button @click="logout" class="text-textRed font-bold">
        <Icon name="ic:twotone-keyboard-backspace" size="24" />
        <span class="ml-2">Çıkış</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import {profilLink} from "@/constant/accountLinkList"

import {useAuthStore} from "@/stores/auth"
 const authStore=useAuthStore()
const logout=()=>{

    authStore.logout()
}

</script>

<style lang="scss" src="./user-nav-card.scss"></style>
