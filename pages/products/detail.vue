<template>
  <div>
    <template v-if="pending"> veriler bekleniyor </template>
    <template v-else-if="error">
      sorun var
      <button @click="refresh">yeniden dene</button>
    </template>
    <template v-else>
       <bread-crumb
       v-if="productDetail"
      :breadCrumb="breadCrumbLink"
      :title="productDetail.title"
    /> 

      <div class="container mx-auto mt-5">
        <div class="flex">
          <product-slider :product="productDetail" />
          <div class="w-1/2 ml-6">
            <product-detail-right-card :product="productDetail" />
          </div>
        </div>
        <div>
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

        <div class="mt-5">
          <div class="flex justify-between">
            <special-product title="Diğer Ürünler" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { category } from "@/stores/category.js";

const product = category();

const pageNo = 1;
const limit = 4;


product.getSelectedProduct(pageNo, limit);

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

const route = useRoute();
const slug = route.params.detail;

const { pending, error, refresh } = useAsyncData("route", async () => {
  await product.productDetails(slug);
});

useSeoMeta({
    ogTitle: () =>product.productDetailsList.title,
    title: () =>product.productDetailsList.title,
    description: () => product.productDetailsList.description,
    ogImage: () => product.productDetailsList.thumbnail,
    ogImageUrl: () =>product.productDetailsList.thumbnail,
    
  })
</script>

<style>
</style>
