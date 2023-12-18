<template>
  <div class="mb-40">
    <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />
    <div class="container mx-auto flex  justify-center gap-10" >
      <div style="margin-top: -30px"
        class="border border-gray-100 bg-white-100 rounded-lg px-3 flex flex-col w-1/2 h-full"
      >
    <div v-if="basketList.length >0">
        <basket-card
          v-for="(item, index) in basketList"
          :key="item"
          :basketList="item"
         :indexNum="index"
        /> 
    </div >

        <p v-else class="text-center">Sepetin Boş</p>
      </div>
      <div class=" flex  justify-end" style="margin-top: -100px">
        <product-order-total-card />
      </div>
    </div>
  </div>
</template>

<script setup>
import{ref,computed} from "vue"
import { basket } from "@/stores/basket.js";

const product= basket();

const basketList=computed(()=>{

   return product.basketItmes
})

const breadCrumbTitle = ref("ürünler");
const breadCrumbLink = ref([
  {
    title: "Ana sayfa",
    link: "/",
  },
  {
    title: "Sepetim",
    link: "/sepetim",
  },
]);



</script>

<style>
</style>
