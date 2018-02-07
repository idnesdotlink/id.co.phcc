<template>
  <swiper-slide class="item home-slider-slide">
    <img :src="background">
  </swiper-slide>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    props: ['background'],
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../css/swiper.css";
  .home-slider-slide {
    background-size: cover;
    height: 100%;
  }
</style>
