<template>
    <div class="search-modal" >
     
      <button @click="openModal" class="mr-3">
          <Icon name="mdi:magnify" size="24" />
        </button>
      <div ref="myModal" id="myModal" class="modal" v-if="isModalVisible">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <form class="search-input" autocomplete="off" @submit.prevent="submitForm">
            <label>{{ title }}</label>
            <div class="search-input">
              <input type="text" autocomplete="off">
  
              <input
                  v-model="searchInput"
                  type="text"
                  placeholder="smartphone,laptops,fragrances,groceries..."
                  name="search"
                  autocomplete="off"
  
              />
              <button
                  type="submit"
                  class="w-full bg-darkGreen text-white-100 py-2 rounded-lg"
              >
                {{ btnTitle }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const props = defineProps({
    title: {
      type: String,
      default: "Arama Yap",
    },
    btnTitle: {
      type: String,
      default: "Ara",
    },
  });
  
  const myModal = ref(null);
  const isModalVisible = ref(false);
  const searchInput = ref('');
  const emit = defineEmits(["search"]);
  
  const openModal = () => {
    isModalVisible.value = true;
  };
  
  const submitForm=()=>{
    emit("search",searchInput.value) 
    searchInput.value=""
    closeModal()
  }
  
  const closeModal = () => {
    isModalVisible.value = false;
  };

  </script>
  
  <style  lang="scss" src="./search-modal.scss">
  </style>
