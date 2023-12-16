<template>
  <swiper class="z-9"
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
  >
    <swiper-slide v-for="item in bannerData" :key="item">
      <slider-card :product="item" />
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const bannerData = ref([
      {
        image:
          "https://cdn.dsmcdn.com/ty1013/product/media/images/prod/SPM/PIM/20231011/15/02bffba1-6c35-3f6d-bac8-e04e91cefeba/1_org_zoom.jpg",
        title: "Instax Mini Film Rulo",
        description:
          "Instax Tüm Mini Makinalar ile Uyumlu 20'li Film Instax mini film, tüm instax mini fotoğraf makineleri ",
      },
      {
        title: "Samsung Galaxy A14 128 GB Siyah Cep",
        image:
          "https://cdn.dsmcdn.com/ty648/product/media/images/20221216/11/239162243/651796613/1/1_org_zoom.jpg",
        description:
          "Değerli Müşterimiz, öncelikle göstermiş olduğunuz ilgi için teşekkür ederiz. Ürün hakkında değerlendirme yapılmaması  ",
      },
      {
        image:
          "https://cdn.dsmcdn.com/ty161/product/media/images/20210819/22/120333872/230410884/1/1_org_zoom.jpg",
        title: "Monster Abra A7 V13.3.3 Intel Core I7 11800h 16gb 500gb Ssd",
        description:
          "6,6 inç FHD+ ekran, en sevdiğiniz filmler, oyunlar ve anılar için size bolca alan sunar. ",
      },
    ]);
    return {
      modules: [Pagination, Navigation],
      bannerData,
    };
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
</style>
