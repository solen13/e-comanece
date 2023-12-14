<template>
  <div v-if="basketList" class="basket-list" 
  :class="{'border-none':borderDel[0] === borderDel[1]+1 }" >
 
    <div class="flex">
      <input type="checkbox" id="item.id" name="item.category" />
      <div class="h-[80px] w-max-[100px] ml-6">
        <img
          class="h-full w-max-[100px]"
          :src="basketList.image"
        />
      </div>
      <div class="ml-4 flex flex-col">
        <h2 class="font-bold">{{ basketList.title }}</h2>
        <span class="text-gray-200">{{ basketList.category }}</span>
        <span class="mt-1 text-green font-bold">{{basketList.price}}TL</span>
      </div>
    </div>
    <div>
        <div class="flex">
            <div class="border border-gray-100 px-3 rounded-md py-2">
        <button class="text-gray-200 text-xl px-3">-</button>
        <span class="">1</span>
        <button class="px-3 text-xl  text-green">+</button>
      </div>
      <button  class="border border-gray-100 font-semibold px-3 rounded-md py-1 ml-3 "><Icon name="mdi:delete-outline" size="20"/></button>
        </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
    basketList: {
    type: Object,
    default: {},
  },
  borderDel:{
    type: Array,
    default: [],
  }
})
</script>

<style lang="scss" src="./basket-card.scss">
</style>
