<template>
  <div>
    <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />
   
    <div class="container mx-auto">
        <order-panel />
      <div class="flex justify-between mt-5">
        <category-filter-card
          :category="categoryList"
          @filterCategory="filterCategory"
        />

        <div class="flex flex-wrap w-9/12">
          <div v-for="item in 5" :key="item">
            <product-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  components: {},
  setup() {
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

    return {
      breadCrumbTitle,
      breadCrumbLink,
      categoryList,
      filterCategory,
    };
  },
};
</script>

<style></style>
