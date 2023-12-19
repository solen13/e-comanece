<template>
  <div>
    <bread-crumb
      v-if="productDetail"
      :breadCrumb="breadCrumbLink"
      :title="productDetail.title"
    />

    <div class="container mx-auto mt-5 ">
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

      <div class="mt-5">
        <div class="flex justify-between">
          <special-product title="Diğer Ürünler"/>
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

//seo
const route = useRoute();
const url = route.params.detail; 
const productDetails = await fetch(`https://dummyjson.com/products/${url}`).then(res => res.json()).then(data => data);
const title = `${productDetails.title} | ${productDetails.description}`;

  useServerSeoMeta({
    ogTitle: () => title,
    title: () => productDetails.title,
    description: () => productDetails.description,
    ogDescription: () => productDetails.description,
    ogImage: () => productDetails.thumbnail,
    ogImageUrl: () => productDetails.thumbnail,
    twitterCard: () => 'summary_large_image',
    twitterTitle: () => title,
    twitterDescription: () => productDetails.description,
    twitterImage: () => productDetails.thumbnail
  })
</script>

<style>
</style>
