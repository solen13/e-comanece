<template>
  <div class="mb-16">
    <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />

    <div class="container mx-auto">
      <order-panel />
      <div class="flex justify-between mt-5">
        <category-filter-card
          :category="stockCategories"
          @clicked="filterCategory"
          :defaultCategory="defaultCategory"
        />
        <div class="2xl:w-[80%] w-[75%]">
          <div class="flex flex-wrap gap-5 bg- justify-start">
            <div v-for="item in productList" :key="item.id">
              <product-card :product="item" />
            </div>
          </div>

          <div class="flex justify-center">
            <pagination @perPage="perPage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { category } from "@/stores/category.js";


const product = category();

const breadCrumbTitle = ref("ürünler");
const router=useRouter()

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

const defaultCategory=ref("")
const stockCategories=computed(()=>{
  return  product.convertedStockCategories
})

const route = useRoute();
const productList = computed(() => {
  return product.allProducts;
});


product.getAllStockByCategories()


if (route.query.category) {
    product.productCategory(route.query.category);  
    defaultCategory.value=route.query.category
  } else {
    product.allProduct(1);
  }

  watch(()=>route.query.category,(query)=>{
    product.productCategory(query);  
    defaultCategory.value=query
  })

  

const perPage=(page)=>{
  product.allProduct(page);
}

const filterCategory = (item) => {
  console.log(item.category);

  router.push("/products?category="+item.category)
};
</script>

<style></style>
