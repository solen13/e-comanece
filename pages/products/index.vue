<template>
  <div class="mb-16">
    <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />

    <div class="container mx-auto">
      <order-panel />
      <div class="flex justify-between mt-5">
        <category-filter-card
          :category="categoryList"
          @filterCategory="filterCategory"
        />
        <div class="2xl:w-[80%] w-[75%]">
          <div class="flex flex-wrap gap-5 bg- justify-start">
            <div v-for="item in productList" :key="item.id">
              <product-card :product="item" />
            </div>
          </div>

          <div class="flex justify-center">
            <pagination />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed ,onMounted} from "vue";
import { category } from "@/stores/category.js";

const product = category();

const productList = computed(() => {
  return product.allProducts;
});

const categoryList = ref([
  {
    id: 1,
    category: "Telefon",
    stock: 20,
  },
  {
    id: 2,
    category: "bilgisay",
    stock: 20,
  },
  {
    id: 3,
    category: "termus",
    stock: 20,
  },
  {
    id: 4,
    category: "bilgisayar",
    stock: 20,
  },
  {
    id: 5,
    category: "klavye",
    stock: 20,
  },
]);

const filterCategory = (item) => {
  console.log(item.category);
};
const breadCrumbTitle = ref("ürünler");
const breadCrumbLink = ref([
  {
    title: "Ana sayfa",
    link: "/",
  },
  {
    title: "Ürünler",
    link: "/",
  },
]);
</script>

<style></style>
