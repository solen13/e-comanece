<template>
  <div class="product-card">
    <div class="img-content">
      <img
        class="img"
        src="https://cdn.dsmcdn.com/ty161/product/media/images/20210819/22/120333872/230410884/1/1_org_zoom.jpg"
      />
      <div class="hoverBasket ">
        <button class="bg-white-100 px-3 py-1 ">
          <Icon name="mdi:cart" size="24" />
          Sepete Ekle
        </button>
      </div>
    </div>
    <div class="flex justify-between">
      <span>
        <h2 class="text-lg font-bold">Anahtarlık</h2>
        <span class="mt-2 text-gray-200"
          >stok:<span class="text-green font-semibold">500</span></span
        >
      </span>
      <span class="font-bold text-green">30 TL</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" src="./product-card.scss">

</style>
