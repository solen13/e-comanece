<template>
  <div class="mb-40">
    <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />
    <div class="container mx-auto flex  justify-center gap-10" >
      <div style="margin-top: -30px"
        class="border border-gray-100 bg-white-100 rounded-lg px-3 flex flex-col w-1/2 h-full"
      >
        <basket-card
          v-for="(item, index) in basketList"
          :key="item"
          :basketList="item"
          :borderDel="[basketList.length, index]"
        />
      </div>
      <div class=" flex  justify-end" style="margin-top: -100px">
        <product-order-total-card />
      </div>
    </div>
  </div>
</template>

<script setup>
import basketCard from "~/components/card/basket-card/basket-card.vue";

const breadCrumbTitle = ref("ürünler");
const breadCrumbLink = ref([
  {
    title: "Ana sayfa",
    link: "/",
  },
  {
    title: "Sepetim",
    link: "/",
  },
]);
const basketList = ref([
  {
    title: "kahverengi cam bardak",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSVJzPqOkhhgDS7YKx8-Jk9IePF7tOcba8Q&usqp=CAU",
    category: "bardak",
    price: 200,
  },
  {
    title: "kahverengi cam bardak",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfmQiDaonpAvfepmiToAk3aV2nr92VScDSw&usqp=CAU",
    category: "bardak",
    price: 200,
  },
  {
    title: "kahverengi cam bardak",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15FIBOVg8vuTdz8-sSdsjOXuC7FdZ0SUArw&usqp=CAU",
    category: "bardak",
    price: 200,
  },
]);
</script>

<style>
</style>
