<template>
    <div >
      <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />
     <div class="flex justify-center container mx-auto gap-5 my-16  ">
      <account-list-card/>
      <NuxtPage />
    
    </div>
    </div>
  </template>
  
  <script setup>
  const breadCrumbTitle = ref("PROFİL BİLGİLERİM");
  const breadCrumbLink = ref([
    {
      title: "Ana sayfa",
      link: "/",
    },
    {
      title: "Profil Bilgilerim",
      link: "/",
    },
   
  ]);
  
  </script>
  
  <style>
  
  </style>
  