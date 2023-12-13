<template>
<div >
    <div class="flex flex-col justify-center  items-center mt-16">
        <h2 class="text-3xl font-bold text-textBack">Özel ürünler</h2>
        <p class="text-gray-200 mt-2">Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in</p>
    </div>
    <div class="flex max-auto w-fulll   justify-center gap-6">
    <product-card v-for="item in 4" />
  </div>
  <div class="flex justify-center ">
    <button class="border-2 border-darkGreen px-3 py-2 rounded-md">
        Tümünü görüntüle
    </button>
  </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" src="./special-product.scss"></style>
