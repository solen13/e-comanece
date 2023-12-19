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
  definePageMeta({
  middleware: "auth",
});
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
  useSeoMeta({
    ogTitle: () =>"Kullanıcı",
    title: () =>"kullanıcı",
    description: () =>"kullanıcı işlemleri",
       
})
  </script>
  
  <style>
  
  </style>
  