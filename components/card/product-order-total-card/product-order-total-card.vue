<template>
  <div class="product-order-total-card">
    <div class="pb-3">
      <h3 class="font-bold">Sepet Toplamı</h3>
    </div>
    <ul>
      <li>
        <span>Ara Toplam</span>
        <span>185,44 TL</span>
      </li>
      <li>
        <span>KDV(%18)</span>
        <span>15,44 TL</span>
      </li>
      <li>
        <span>Kargo Ücreti</span>
        <span>5,44 TL</span>
      </li>
      <li>
        <span>İndirim</span>
        <span>0 TL</span>
      </li>
    </ul>
    <div class="flex justify-between py-4 font-bold text-xl">
      <span>Toplam</span>
      <span>230 TL</span>
    </div>
    <div
      class="border border-gray-100 p-3 pr-6 rounded-lg flex flex-col justify-start"
    >
      <span class="font-bold">İndirim Kodu</span>
      <input
        v-model="discountText"
        type="text"
        class="border border-gray-100 rounded-lg px-2 mt-2 font-semibold py-2"
        placeholder="İndirim Kodunu Giriniz"
        :disabled="!isDiscountActive"
        :class="{'bg-darkGreen text-white-100':isDiscountActive}"
      />

      <div>
        <button v-if="!isDiscountActive" @click="isDiscountActiveBtn"
          class="border border-darkGreen rounded-lg font-bold mt-2 px-3 p-1"
        >
          Uygula
        </button>
        
        <button v-else @click="isDiscountActiveBtn"
          class="bg-textRed text-white-100 rounded-lg font-bold mt-2 px-3 p-1"
        >
          Kaldır
        </button>
      
      </div>
    </div>
    <div class="mt-4">
      <button class="bg-darkGreen text-white-100 w-full py-2 rounded-lg">
        Ödemeye Geç
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"

const discountText=ref("")

const isDiscountActive=ref(false)

const isDiscountActiveBtn=()=>{
    isDiscountActive.value = !isDiscountActive.value
    discountText.value=""
}
</script>

<style lang="scss" src="./product-order-total-card.scss" >
</style>
