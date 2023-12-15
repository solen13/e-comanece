<template>
  <div >
    <app-header/>
  
    <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />

    <div class="flex flex-col justify-center items-center h-[400px]">
      <h1 class="text-5xl font-bold text-darkGreen">{{ error.statusCode }}</h1>
      <p class="mt-5 mb-8">
        Üzgünüz, aradığınız sayfayı bulamadık. Dilerseniz Ana Sayfa’ya
        dönebilirsiniz.
      </p>
      <button class="bg-darkGreen text-white-100 px-10 py-2 rounded-lg">
        Ana Sayfaya Dön
      </button>
    </div>
    
    <footer-card/>
  </div>
</template>

<script setup>
defineProps(["error"]);
import { ref } from "vue";
const breadCrumbTitle = ref("Sayfa yok");
const breadCrumbLink = ref([
  {
    title: "Ana sayfa",
    link: "/",
  },
  {
    title: "Yok",
    link: "/",
  },
]);
</script>

<style>
</style>
