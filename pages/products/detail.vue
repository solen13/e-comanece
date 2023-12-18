<template>
  <div>
    <bread-crumb
      v-if="productDetail"
      :breadCrumb="breadCrumbLink"
      :title="productDetail.title"
    />

    <div class="container mx-auto mt-16 ">
      <div class="flex ">
        <product-slider :product="productDetail" />
        <div class="w-1/2 ml-6">
          <product-detail-right-card :product="productDetail" />
        </div>
      </div>
      <div >
        <div class="border-b border-gray-100 flex font-bold">
          <div class="border-b border-darkGreen px-3 pb-2">Açıklama</div>
          <div class="ml-3 text-gray-200">Yorumlar(0)</div>
        </div>
        <div>
          <p v-if="productDetail" class="font-semibold mt-3">
            {{ productDetail.description }}
          </p>
        </div>
      </div>

      <div class="mt-[200px]">
        <h3 class="text-center font-bold text-xl mb-6">Diğer Ürünler</h3>
        <div class="flex justify-between">
          <product-card v-for="item in productSpecial" :key="item" :product="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { category } from "@/stores/category.js";
import { useRoute } from "vue-router";

const product = category();

const pageNo=1
const limit=4

product.getSelectedProduct(pageNo,limit)
 const productSpecial=computed(()=>{

   return product.allProducts.slice(4, 8)
 })

onMounted(() => {
  const route = useRoute();
  const url = route.params.detail;
    
  product.productDetails(url);
});
const productDetail = computed(() => {
  return product.productDetailsList;
});

const breadCrumbLink = computed(() => {
  const api = [
    {
      title: "Ana sayfa",
      link: "/",
    },
    {
      title: "Ürünler",
      link: "/products",
    },

    {
      title: productDetail.value.title,
      link: "",
    },
  ];
  return api;
});
</script>

<style>
</style>
