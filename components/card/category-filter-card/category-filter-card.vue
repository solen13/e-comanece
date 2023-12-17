<template>
    <div class="category-filter-card">
      <div>
        <h3 class="text-xl font-bold mb-10 mt-4">Kategoriler</h3>
      </div>
      <div class="border-y-[1px] border-gray-100 py-8 px-3">
        <label v-for="item in category" :key="item.category">
          <div
              @click="selectCategory(item)"
              class="flex cursor-pointer text-lg text-gray-200 font-semibold"
          >
            <input
                type="radio"
                :id="item.category"
                :name="'categoryFilter'"
                ref="radioButtons"
                :checked="item.category === defaultCategory"
            />
            <label class="ml-2" :for="item.category">{{ item.name }}</label>
            <span class="ml-1"> ({{ item.stock }}) </span>
          </div>
        </label>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const props = defineProps({
    category: {
      type: Array,
      default: () => [],
    },
    defaultCategory: {
      type: String, 
      default: "furniture",
    },
  });
  const emit = defineEmits(["clicked"]);
  const radioButtons = ref([]);
  
  const selectCategory = (item) => {
    radioButtons.value.forEach((radio) => {
      if (radio.id === item.category) {
        radio.checked = true;
      } else {
        radio.checked = false;
      }
    });
    emit("clicked", item);
  };
  </script>
  
  <style lang="scss" src="./category-filter-card.scss"></style>
  