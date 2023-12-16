<template>
  <vue-awesome-paginate
    :total-items=productListLength
    :items-per-page="5"
    :max-pages-shown="5"
    v-model="currentPage"
    :on-click="onClickHandler"
  />
  </template>
  <script setup>
  import { ref ,onMounted} from "vue";
  import { useRoute } from "vue-router";
  import {category} from "@/stores/category.js"


const currentPage = ref(1);
const products= category()

  const onClickHandler = (page) => {

    products.allProduct(page)
  };
const productListLength=ref(0)
 
onMounted(()=>{
    const route = useRoute();
   
     if(route.query.category){
        console.log(route.query.category)
        products.productCategory(route.query.category)
        productListLength.value=  products.allProducts.length +1
   
     }else{
        products.allProduct(1)
        productListLength.value= 50
   
     }
})

  </script>
  
  <style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>
