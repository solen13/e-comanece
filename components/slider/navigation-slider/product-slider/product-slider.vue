<template>
  <div v-if="product" class="w-1/2">

    <swiper
    :style="{
      '--swiper-navigation-color': '#1b98ff',
      '--swiper-pagination-color': '#1f1a1a',
    
    }"

    :loop="true"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2  rounded-lg "
  >
    <swiper-slide v-for="item in product.images" 
      ><img 
        :src="item" /></swiper-slide
    >
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :loop="true"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
  <swiper-slide v-for="item in product.images" 
      ><img 
        :src="item" class="images"/></swiper-slide
    >
  </swiper>
  </div>
</template>

<script>
 import { ref, computed ,onMounted} from "vue";
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';

  import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
  export default {
    props:{
        product: {
    type: Object,
    default: () => {},
  }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
       


      const thumbsSwiper = ref(null);

      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };
 
      return {
        thumbsSwiper,
        setThumbsSwiper,
        modules: [FreeMode, Navigation, Thumbs],
     
      };
    },
  };
</script>


<style lang="scss" src="./product-slider.scss">

</style>
