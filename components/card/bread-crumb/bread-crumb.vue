<template>
  <div
    v-if="breadCrumb.length"
    class="w-full h-60 bg-white-200 flex justify-center"
  >
    <div class="flex justify-start flex-col container mt-16">
      <h1 class="text-2xl font-bold mb-2 uppercase">
        {{ title }}
      </h1>
      <div class="flex">
        <template v-for="(item, index) in breadCrumb">
          <div
            @click="goToLink(item)"
            class="font-bold cursor-pointer whitespace-nowrap"
          >
            <span :class="{'text-green':breadCrumb.length - 1 !== index}">{{ item.title }}</span>
            <Icon
              v-if="breadCrumb.length - 1 !== index"
              name="mdi-light:chevron-right"
              size="14"
            ></Icon>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const router = useRouter();
const props = defineProps({
  breadCrumb: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: "",
  },
});

const goToLink = (item) => {
  console.log(item.link);
  router.push(item.link);
};
</script>

<style lang="scss" src="./bread-crumb.scss"></style>
