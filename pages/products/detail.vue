<template>
  <div>
    <bread-crumb v-if="productDetail" :breadCrumb="breadCrumbLink" :title="productDetail.title" />
    <div class="container mx-auto mt-16">
      <div class="flex">
        <product-slider :product="productDetail"/>
        <div class="w-1/2 ml-6">
          <product-detail-right-card  :product="productDetail"/>
        </div>
      </div>
      <div>
       <div class=" border-b border-gray-100 flex font-bold">
        <div class="border-b border-darkGreen px-3 pb-2">Açıklma</div>
        <div class="ml-3 text-gray-200">Yorumlar(0)</div>
       </div>
       <div>
        <p v-if="productDetail" class="font-semibold mt-3">
           {{ productDetail.description  }}      </p>    
    
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
import { ref, computed ,onMounted} from "vue";
import {category} from "@/stores/category.js"

import { useRoute } from "vue-router";

const product= category()


 onMounted(()=>{
    const route = useRoute();
    const url = route.params.detail;
    product.productDetails(url)
 })
 const productDetail=computed(()=>{
  
   return product.productDetailsList
 })


const breadCrumbLink = ref([
  {
    title: "Ana sayfa",
    link: "/",
  },
  {
    title: "Ürünler",
    link: "/urunler",
  },


]);


</script>

<style>
</style>
