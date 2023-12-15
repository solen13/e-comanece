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
      <button class="text-textRed font-bold">Çıkış Yap</button>
    </div>
  </div>
</template>

<script setup>
const profilLink = ref([
  {
    id: 1,
    name: "Profil Bilgilerim",
    link: "/account/profile",
  },
  {
    id: 2,
    name: "Adreslerim",
    link: "/account/address",
  },

  {
    id: 3,
    name: "Siparişlerim",
    link: "/account/order",
  },
  {
    id: 4,
    name: "Ürün iadesi",
    link: "/account/product-return",
  },
]);
</script>

<style lang="scss" src="./account-list-card.scss">
</style>
