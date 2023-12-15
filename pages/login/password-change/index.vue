<template>

    <div class="mb-16" >
      <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />
    <password-chanege-card/>
    </div>
  
</template>

<script setup>
  const breadCrumbTitle = ref("Parola Yenileme");
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
      title: "Parola Yenileme",
      link: "/",
    },
  ])
</script>

<style>

</style>
