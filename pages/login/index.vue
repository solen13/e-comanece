<template>
  <div class="mb-16" >
    <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />
    <login-card class="mt-10" />
  </div>
</template>

<script setup>
const axios = useNuxtApp().$api;
import { ref } from "vue";
const breadCrumbTitle = ref("Giriş yap");
const breadCrumbLink = ref([
  {
    title: "Ana sayfa",
    link: "/",
  },
  {
    title: "Giriş yap",
    link: "/login",
  },
]);

</script>

<style>
</style>
