<template>
  <div class="account-list-card">
    <div class="mb-6 mt-3">
      <h2 class="font-bold text-xl">Hesabım</h2>
    </div>
    <ul class="border-y border-gray-100 text-gray-200">
      <li class="mt-4 mb-2" v-for="item in profilLink" :key="item.id">
        <NuxtLink :to="item.link" active-class="active">
          {{ item.name }}</NuxtLink
        >
      </li>
    </ul>
    <div class="py-6">
      <button @click="logout" class="text-textRed font-bold">Çıkış Yap</button>
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

<style lang="scss" src="./account-list-card.scss">
</style>
