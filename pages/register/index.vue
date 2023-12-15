<template>
  <div>
    <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />
    <div class="container mx-auto">
      <register-card />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const breadCrumbTitle = ref("Kayıt Ol");
const breadCrumbLink = ref([
  {
    title: "Ana sayfa",
    link: "/",
  },
  {
    title: "Kayıt Ol",
    link: "/",
  },
]);
</script>

<style>
</style>
