<template>
  <div>
    <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />
    <div class="container mx-auto mt-16">
      <div class="flex">
        <product-slider />
        <div class="w-1/2 ml-6">
          <product-detail-right-card />
        </div>
      </div>
      <div>
       <div class=" border-b border-gray-100 flex font-bold">
        <div class="border-b border-darkGreen px-3 pb-2">Açıklma</div>
        <div class="ml-3 text-gray-200">Yorumlar(0)</div>
       </div>
       <div>
        <p class="font-semibold mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>    
    
    </div>
    </div>

    <div class="mt-[200px]">
        <h3 class="text-center font-bold text-xl">Diğer Ürünler</h3>
        <div class="flex justify-between ">
<product-card v-for="item in 4" :key="item" />
        </div>
    </div>
    </div>
  
  </div>
</template>

<script setup>
const breadCrumbTitle = ref("ürün detay");
const breadCrumbLink = ref([
  {
    title: "Ana sayfa",
    link: "/",
  },
  {
    title: "Ürünler",
    link: "/",
  },
  {
    title: "kaplumbağa",
    link: "/",
  },
]);
</script>

<style>
</style>
