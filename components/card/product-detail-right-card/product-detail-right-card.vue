<template>
  <div v-if="product" class="product-detail-right-card">
    <span class="border-b-[1px] border-gray-100 pb-2 ">
      <h1 class="font-bold text-3xl mb-1">{{ product.title }}</h1>
      <span class="text-green font-bold text-xl ">{{product.price}}TL</span>
     
    </span>
    <div class="font-bold flex flex-col mt-2 mb-4">
      <span>
        <span >Ürün Kodu:</span>
        <span>OIIB54</span>
      </span>
      <span>
        <span>Stok Durumu</span>
        <span>{{ product.stock }}</span>
      </span>
    </div>


    <div class="flex">
      <div class="border border-gray-100 px-3 rounded-md py-1">
        <button @click="decreaseItemQuantity" class="text-gray-200 text-xl pr-2">-</button>
        <span v-if="quantity">{{ quantity }}</span>
        <span v-else="quantity" >0</span>
        <button @click="increaseItemQuantity" class="pl-2 text-xl  text-green">+</button>
      </div>
      <button v-if="!quantity" @click="addBasketBtn"  class="border font-semibold px-3 rounded-md py-1 w-[220px] ml-3 ">Sepete Ekle</button>
    </div>
  </div>
</template>

<script setup>
import { basket } from "@/stores/basket.js";

const productAdd = basket();
const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },

});

const addBasketBtn = () => {
  productAdd.addBasket(props.product);
  productAdd.basketSuccess(true)

};

const quantity=computed(()=>{
   const productList= productAdd.basketItmes.find(item => item.id === props.product.id);
if(productList){
    return productList.quantity
}
  
})


const increaseItemQuantity = () => {
    productAdd.increaseItemQuantity(null,props.product);
};
const decreaseItemQuantity = () => {
    productAdd.decreaseItemQuantity(null,props.product);
};
const removeBtn=()=>{
    product.removeItme(props.indexNum)
}
</script>

<style lang="scss" src="./product-detail-right-card.scss">
</style>
