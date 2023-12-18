<template>
  <dropdown-menu v-if="list.length" direction="right" :overlay="false">
    <template #trigger>
      <button
        class="border-[1px] border-gray-100 rounded-md px-2 py-1 font-semibold"
      >
        {{ title }} <Icon v-if="showIcon" name="simple-line-icons:arrow-down" size="12" />
      </button>
    </template>

    <template #body>
      <ul>
        <li class="mx-3" v-for="item in list" :key="item.id" @click="order(item)">
          <div>{{ item.name }}</div>
        </li>
      </ul>
    </template>
  </dropdown-menu>
</template>

<script setup>
import DropdownMenu from "v-dropdown-menu";
import "@/node_modules/v-dropdown-menu/dist/vue3/v-dropdown-menu.css";
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  title:{
    type: String,
    default: ""
  },
  showIcon:{
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(["clicked","dispatchEvent"]);
const dispatchEvent=(item)=>{
    emit("dispatchEvent", item);
}


const order = (item) => {
  emit("clicked", item);

  
};
</script>

<style>
</style>
