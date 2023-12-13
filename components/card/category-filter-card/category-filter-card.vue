<template>
  <div class="category-filter-card">
    <div>
      <h3 class="text-xl font-bold mb-10 mt-4">Kategoriler</h3>
    </div>
    <div class="border-y-[1px] border-gray-100 py-8 px-3">
      <label v-for="item in category" :key="item.id">
        <div
          @click="goToCategory(item)"
          class="flex cursor-pointer text-lg text-gray-200 font-semibold"
        >
          <input type="checkbox" :id="item.id" :name="item.category" />
          <label class="ml-2" :for="item.id">{{ item.category }}</label>
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
});
const emit = defineEmits(["filterCategory"]);
const goToCategory = (item) => {
  emit("filterCategory", item);
};
</script>

<style lang="scss" src="./category-filter-card.scss"></style>
