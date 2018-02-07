<template>
  <div class="home-slider">
    <div class="mbar">
      <div class="fill" :style="{ width: `${percentage}%`}"></div>
    </div>
    <swiper :options="swiperOptions" ref="sliderRef">
      <slot/>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="thumbnail-wrapper">
      <swiper :options="thumbnailOptions" ref="thumbnailRef">
      <slot name="thumbnail"/>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'homeslidercomponent',
  data () {
    return {
      percentage: 0,
      timer: 0,
      progress: 0,
      interval: 0,
      duration: 24000,
      swiperOptions: {
        init: false,
        // effect: 'fade',
        watchOverflow: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay:24000,
          disableOnInteraction: false
        }
      },
      thumbnailOptions: {

      }
    }
  },
  methods: {
    play () {
      this.timeKeeper()
      const slider = this.$refs.sliderRef.swiper
      slider.init()
    },
    timeKeeper () {
      this.timer = new Date().getTime()
      this.progress = setInterval(this.going, this.duration / 1000)
    },
    going () {
      var time = new Date().getTime();
      this.percentage = 100 * (time - this.timer) / this.duration;
    },
    resetPlay () {
      clearInterval(this.progress);
      this.play();
    },
    stop () {
      clearInterval(this.interval);
      clearInterval(this.progress);
    }
  },
  mounted () {
    this.$nextTick(
      () => {
        const slider = this.$refs.sliderRef.swiper

        const thumbnail = this.$refs.thumbnailRef.swiper
        slider.controller.control= thumbnail
        thumbnail.controller.control = slider

        this.play()
        slider.on('slideChange', () => {
          // console.log(this)
          this.resetPlay()
        })
      }
    )
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../css/swiper.css";
  .home-slider {
    position: relative;
    overflow: hidden;
  }
  .mbar {
    height: 2px;
    width: 100%;
    background: rgba(0, 0, 0, .2);
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .fill {
    height: 100%;
    background: pink;
  }
  .thumbnail-wrapper {
    height: auto;
    background: rgba(black,.2);
    width: 50%;
    bottom: 0;
    left: 0;
    display: flex;
    position: absolute;
    z-index: 100;
    padding: 5px;
  }
</style>


