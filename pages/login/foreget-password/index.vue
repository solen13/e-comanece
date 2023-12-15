<template>
    <div>
      <div class="mb-16" >
      <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />
      <foreget-password-card class="mt-10" />
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const breadCrumbTitle = ref("Giriş yap");
  const breadCrumbLink = ref([
    {
      title: "Ana sayfa",
      link: "/",
    },
    {
      title: "Giriş yap",
      link: "/",
    },
    {
      title: "Parolamı unutum",
      link: "/",
    },
  ])
  </script>
  
  <style>
  
  </style>
  