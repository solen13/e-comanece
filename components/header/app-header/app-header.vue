<template>
  <div class="app-header">
    <NuxtLink to="/">
      <img src="../../../assets/image/Logo.png" />
    </NuxtLink>
    <div class="flex gap-3 text-textBack font-bold">
      <div
        v-for="(item, index) in menuListLeft"
        :key="item.id"
        class="cursor-pointer"
      >
        <div @click="gotoCategory(item)" class="hover:text-textRed">
          {{ item.name }}
        </div>
      </div>
      <dropdown-menu-list
        :list="menuListDropdown"
        title="..."
        :showIcon="false"
        @clicked="gotoCategory"
        class="cursor-pointer"

      />
    </div>
    <div class="text-darkGreen flex">
      <span
        class="flex justify-center border-r border-gray-100 mr-2 pr-1 items-center"
      >
        <search-modal @search="search" @click="isUserCard = false" />
        <button @click="$router.push('/my-orders')">
          <span
            v-if="baseketLength"
            class="bg-darkGreen text-white-100 rounded-full px-1"
            >{{ baseketLength }}</span
          >
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
        @click="openProfileDropdown"
        class="border-2 rounded-full p-2"
      >
        <Icon name="ic:baseline-person" size="24" />
      </button>
    </div>
  </div>
  <user-nav-card
    v-if="isDropdownActive"
    @clicked="gotoLink"
    @logout="logout"
    class="absolute top-0 right-0 z-999 mt-16 mr-24"
  />
</template>

<script setup>
import { computed, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import menuList from "@/constant/menuList.js";
import { basket } from "@/stores/basket.js";

const product = basket();
const authStore = useAuthStore();
const router = useRouter();

const isDropdownActive = ref(false);
const menuListLeft = ref(menuList.slice(0, 6));
const menuListDropdown = ref(menuList.slice(6));

const baseketLength = computed(() =>  product.basketItmes.length);
const isUserLogged = computed(() => authStore.userData.firstName);

const gotoLink = (item) => {
  router.push(item.link);
  isDropdownActive.value = false;
};

const openProfileDropdown = () => {
  isDropdownActive.value = !isDropdownActive.value;
};

const logout = () => {
  authStore.logout();
  isDropdownActive.value = false;
};

const search = (item) => {
  router.push("/products?category=" + item);
  isDropdownActive.value = false;
};

const gotoCategory = (item) => {
  router.push("/products?category=" + item.link);
  isDropdownActive.value = false;
};

</script>

<style  lang="scss" src="./app-header.scss"></style>
