<template>
  <div
    v-if="product"
    class="slider-card"
  >
    <div class="w-1/2">
      <div>
        <h1 class="text-darkGreen text-3xl font-bold text-left">
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
    <div class="img-content ">
      <img  :src="product.image" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
});
</script>

<style lang="scss" src="./slider-card.scss"></style>
