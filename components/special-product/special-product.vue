<template>
  <div class="special-product">
    <div class="head">
      <h2>Özel ürünler</h2>
      <p class="">
        Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
      </p>
    </div>
    <div class="flex justify-center gap-7">
      <product-card v-for="item in 4" />
    </div>
    <div class="flex justify-center w-full">
      <button class="border-2 border-darkGreen px-3 py-2 rounded-md">Tümünü görüntüle</button>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" src="./special-product.scss"></style>
