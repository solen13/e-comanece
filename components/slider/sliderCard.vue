<template>
  <div
    v-if="product"
    class="flex justify-between items-center px-16 w-full h-[622px]"
  >
    <div class="w-1/2">
      <div>
        <h1 class="text-darkGreen text-5xl font-bold text-left">
          {{ product.title }}
        </h1>
        <p class="mt-7 text-gray-200 text-left">
          {{ product.description }}
        </p>
      </div>
      <div class="mt-6 flex justify-start">
        <button class="bg-darkGreen text-white-100 px-4 py-1 rounded-md">
          Tüm Ürünler
        </button>
        <button class="border-2 border-darkGreen px-4 py-1 rounded-md ml-3">
          Detaylar Görüntüler
        </button>
      </div>
    </div>
    <div class="w-1/2 h-full">
      <img class="object-contain w-full h-full" :src="product.image" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
});
</script>

<style></style>
