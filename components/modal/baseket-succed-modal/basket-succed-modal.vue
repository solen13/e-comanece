<template>
  <div v-if="isBasketStatus" class="basket-succed-modal">
    <div class="w-[30%] h-60 bg-white-100 ">
        <h2 class="text-center text-xl font-bold mt-3">Sepete Başarlı Şeklide Eklendi</h2>
        <div class="success-checkmark">
  <div class="check-icon mt-10">
    <span class="icon-line line-tip"></span>
    <span class="icon-line line-long"></span>
    <div class="icon-circle"></div>
    <div class="icon-fix"></div>
  </div>
</div>
    </div>
  </div>
</template>

<script setup>
 import {ref,computed} from "vue"
 import { basket } from "@/stores/basket.js";

const basketStaus = basket();
 const isBasketStatus=computed(()=>{
    setTimeout(() => {
        basketStaus.basketSuccess(false)
    }, 1200);
   return basketStaus.isBasketSuccess
 })
 
</script>

<style lang="scss" src="./basket-succed-modal.scss"> 

</style>
