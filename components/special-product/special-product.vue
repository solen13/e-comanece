<template>
  <div class="special-product">
    <div class="head">
      <h2>Özel ürünler</h2>
      <p class="">
        Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
      </p>
    </div>
    <div class="flex justify-center gap-7">
        <product-card  v-for="(item,index) in productSpecial" :key="index"  :product="item"/>    
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

onMounted(()=>{
    product.getSelectedProduct(pageNo,limit)
})
 const productSpecial=computed(()=>{
   return product.allProducts.slice(0, 4)

 })

</script>

<style lang="scss" src="./special-product.scss"></style>
