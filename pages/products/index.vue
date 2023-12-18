<template>
  <div class="mb-16">
    <bread-crumb :breadCrumb="breadCrumbLink" :title="breadCrumbTitle" />

    <div class="container mx-auto">
      <order-panel :categoryName="selectedCategory"  :categoryLength="limit"/>
      <div class="flex justify-center mt-5">
        <category-filter-card
          :category="stockCategories"
          @clicked="filterCategory"
          :defaultCategory="defaultCategory"
        />
        <div class="2xl:w-[65%] w-[75%] ml-10">
          <div class="flex flex-wrap gap-5 bg- justify-start">
            <div v-for="item in productList" :key="item.id">
              <product-card :product="item" />
            </div>
              <div v-if="productList.length===0">
               <div class="flex flex-wrap gap-5 bg- justify-start" >
                <skeleton-product-card v-for="item in 6" :key="item"/>
               </div>
              </div>
          </div>
        
          <div class="flex justify-center">
            <pagination
              @clicked="getPageItems"
              :itemsPerPage="6"
              :totalItems="limit"
              :currentPageNo="pageNo"
            />
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
import categoryPageMetaTag from "~/common/categoryPageMetaTag.js";

const product = category();
const maxShowCountPerPage = 6;

 const metaTag=ref({})
const breadCrumbTitle = ref("ürünler");
const router = useRouter();
const route = useRoute();
const pageNo = computed(() => {
  if (route.query.page) {
    return parseInt(route.query.page);
  } else {
    return 1;
  }
});
const limit = ref(100);
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
const defaultCategory = ref("");
const stockCategories = computed(() => product.convertedStockCategories);

const categoryQuery = computed(() => route.query.category);

const selectedCategory = computed(() => {
  if (categoryQuery.value) {
    return product.convertedStockCategories.find(
      (item) => item.category === categoryQuery.value
    );
  }else{
    return product.convertedStockCategories[0]
  }
});

const productList = ref([]);

const getProductCategory = (query) => {
  product.fetchProductCategory(query).then(() => {
    productList.value = product.allProducts.slice(0, maxShowCountPerPage);

    limit.value = product.allProducts.length;
metaTag.value=categoryPageMetaTag(productList.value[0])

  });
  defaultCategory.value = query;
};

const { pending, refresh, data } = await useAsyncData(async () => {
  product.getAllStockByCategoryList();

  if (categoryQuery.value) {
    getProductCategory(categoryQuery.value);
  } else {
    product.getSelectedProduct({ pageNo: 1, limit: limit.value }).then(() => {
      productList.value = product.allProducts.slice(0, maxShowCountPerPage);
    });
  }
});

watch(
  () => categoryQuery.value,
  (query) => {
    getProductCategory(query);
  }
);

onMounted(async () => {
  await nextTick();
  const pageNumberQuery = route.query.page;

  if (pageNumberQuery) {
    setTimeout(() => {
      getPageItems(parseInt(pageNumberQuery));
    }, 500);
  } 
});

const getPageItems = (pageNumber) => {

  const startIndex = (pageNumber - 1) * maxShowCountPerPage;
  const endIndex = startIndex + maxShowCountPerPage;
  productList.value = product.allProducts.slice(startIndex, endIndex);
 
  router.push("/products?page=" + pageNumber);
};

const filterCategory = (item) => {
  router.push("/products?category=" + item.category);
};
console.log(metaTag.value)


useServerSeoMeta({
    ogTitle: () => metaTag.value.title,
    title: () => metaTag.value.title,
    description: () => "productDetails.description",
    ogDescription: () => "productDetails.description",
    ogImage: () => "productDetails.thumbnail",
    ogImageUrl: () => "productDetails.thumbnail",
    twitterCard: () => 'summary_large_image',
    twitterTitle: () => "title",
    twitterDescription: () => "productDetails.description",
    twitterImage: () =>" productDetails.thumbnail"
  })

</script>

<style></style>
