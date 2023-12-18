<template>
  <div v-if="product" class="product-card">
    <div class="img-content">
      <img class="img" :src="product.images[0]" />
      <div class="hoverBasket">
        <button @click="addBasketBtn(product)" class="bg-white-100 px-3 py-1">
          <Icon name="mdi:cart" size="24" />
          Sepete Ekle
        </button>
      </div>
    </div>
    <div
      @click="$router.push(`/products/${product.id}`)"
      class="flex justify-between"
    >
 
        <span>
        <h2 class="text-lg font-bold title">{{ product.title }}</h2>
        <span class="mt-2 text-gray-200  flex justify-between"
          ><span>
            Kategori: <span class="text-green font-semibold">{{
            getProductName(product.category)
          }}</span>
          </span>
         
          </span
        >
      </span>

     
      <span class="font-bold text-green">{{ product.price }} TL</span>
    </div>
  </div>
</template>

<script setup>
import { basket } from "@/stores/basket.js";
import {turkishTranslations} from "@/constant/turkishTranslate"
const productAdd = basket();

const getProductName=(name)=>{
   return turkishTranslations[name] || name
}

const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});
const addBasketBtn = (item) => {
  productAdd.addBasket(item);
  productAdd.basketSuccess(true)
};



useHead({
    title: 'ürünler',
    meta: [
      {
        name: 'ürünler',
        content: props.product.title
      },
    ],
  });
</script>

<style lang="scss" src="./product-card.scss">
</style>
