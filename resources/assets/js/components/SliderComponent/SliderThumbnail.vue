<template>
  <swiper-slide class="home-slider-thumbnail">
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
  .home-slider-thumbnail {
    flex: 1;
  }
  .home-slider-thumbnail img {
    width: 100%;
    opacity: .3;
  }
  .home-slider-thumbnail.swiper-slide-active img {
    opacity: 1;
  }
</style>
