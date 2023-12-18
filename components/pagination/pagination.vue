<template>
  <vue-awesome-paginate
    :total-items="totalItems"
    :items-per-page="itemsPerPage"
    :max-pages-shown="maxPage"
    v-model="currentPage"
    :on-click="onClickHandler"
  />
</template>
  <script setup>
import { ref } from "vue";

const props = defineProps({
    currentPageNo:{
    type: Number,
    default: 0,
    },
  totalItems: {
    type: Number,
    default: 1,
  },
  itemsPerPage: {
    type: Number,
    default: 1,
  },
  maxPage:{
    type: Number,
    default: 5,
  }

});


const currentPage=ref(props.currentPageNo)
const emit = defineEmits(["clicked"]);

const onClickHandler = (page) => {
  emit("clicked", page);
 
};
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
