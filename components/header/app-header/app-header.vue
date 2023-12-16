<template>
  <div class="app-header">
    <div>logo</div>
    <div class="flex gap-3 text-textBack font-bold">
      <!-- <nuxt-link :key="item.id" :to="item.link"> {{ item.name }}</nuxt-link> -->
      <div v-for="(item, index) in menuListLeft" :key="item.id">
        <div @click="gotoCategory(item)" class="hover:text-textRed">
          {{ item.name }}
        </div>
      </div>
      <dropdown-menu-list
        :list="menuListDropdown"
        title="..."
        :showIcon="false"
        @clicked="gotoCategory"
      />
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

      <NuxtLink
        v-if="!isUserLogged"
        to="/login"
        class="border-2 py-1 border-darkGreen px-2 rounded-lg font-medium"
      >
        <Icon name="radix-icons:arrow-right" size="24" />
        <span class="ml-2">Giriş yap</span>
      </NuxtLink>
      <button
        v-else
        @click="isUserCard = !isUserCard"
        class="border-2 rounded-full p-2"
      >
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
import { useAuthStore } from "@/stores/auth";
import menuList from "@/constant/menuList.js";

console.log(menuList);

const isUserCard = ref(false);
const authStore = useAuthStore();
const menuListLeft = ref(menuList.slice(0, 6));
const menuListDropdown = ref(menuList.slice(6));

const isUserLogged = computed(() => authStore.userData.firstName);


const gotoCategory = (item) => {
  console.log(item.link);


};
</script>

<style  lang="scss" src="./app-header.scss"></style>
