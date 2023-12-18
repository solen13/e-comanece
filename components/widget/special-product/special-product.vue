<template>
  <div class="special-product">
    <div class="head">
      <h2>Özel ürünler</h2>
      <p class="">
        Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
      </p>
    </div>
   
    <div class="flex justify-center gap-7">
     <client-only>
        <product-card  v-for="(item,index) in productSpecial" :key="index"  :product="item"/>    
    </client-only>
    </div>
    <div class="flex justify-center w-full">
      <nuxt-link to="/products" class="border-2 border-darkGreen px-3 py-2 rounded-md">Tümünü görüntüle</nuxt-link >
    </div>
  </div>
</template>

<script setup>
import { ref,computed,onMounted } from "vue";
import { category } from "@/stores/category.js";
const pageNo=1
const limit=4
const product = category();

let randomNumber = Math.floor(Math.random() * 90) + 1;

const productSpecial=computed(()=> product.allProducts.slice(randomNumber, randomNumber+4))

const { pending, refresh } = await useAsyncData('product', async () =>  product.getSelectedProduct(pageNo,limit))
// onMounted(()=>{
//     product.getSelectedProduct(pageNo,limit)
// })


</script>

<style lang="scss" src="./special-product.scss"></style>
