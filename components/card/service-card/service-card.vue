<template>
  <div class="service-card">
    <div
      v-for="(item, index) in serviceData"
      :key="index"
      class="w-64 h-64 border-2 border-gray-100 rounded-xl flex justify-center items-center flex-col px-1"
    >
      <Icon :name="item.icon" size="50"></Icon>

      <h2 class="text-xl text-textBlack font-bold mt-8 text-center">
        {{ item.title }}
      </h2>
      <p class="text-center text-gray-200 mt-3 text-lg">
        {{ item.description }}
      </p>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from "vue";

const serviceData = ref([
  {
    icon: "fa6-solid:truck-fast",
    title: "AYNI GÜN KORGO",
    description: "Satın aldığınız ürünleri aynı iş günü kargoya veriyoruz.",
  },
  {
    icon: "lucide:package-search",
    title: "ÖZEL ÜRÜNLER",
    description:
      "Down Design markamızla kendi ürünlerimizi sizlere sunmaktayız.",
  },
  {
    icon: "material-symbols:payments-outline-rounded",
    title: "%100 GÜVENLİ ÖDEME",
    description:
      "256bit SSL sertifikası ve 3D ödeme şifresiyle güvenli alışveriş yapın.",
  },
  {
    icon: "material-symbols:headphones",
    title: "MÜŞTERİ HİZMETLERİ",
    description:
      "%100 müşterileri memnuniyeti için kesintisiz destek sunuyoruz",
  },
]);
</script>
 
<style lang="scss" src="./service-card.scss"></style>
