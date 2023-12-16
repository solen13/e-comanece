<template>
 
    <profile-information-card />

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
