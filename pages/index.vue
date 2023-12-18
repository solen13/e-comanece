<template>
  <div class="w-full">
    <div class="2xl:w-3/4 container mx-auto " >
       <navigation-slider   />
    </div>
    <service-card  />
   <special-product/>
   <serial-banner-card class="mt-10 mb-10"/>


  </div>
</template>

<script setup>
useHead({
    title: 'Nuxt: The Intuitive Web Framework',
    meta: [
      {
        name: 'ana sayfa',
        content: 'Build your next Vue.js application with confidence using Nuxt....' 
      },
    ],
  });
</script>

<style></style>
