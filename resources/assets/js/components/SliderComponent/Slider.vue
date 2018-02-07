<script>
import Vue from 'vue'
import _ from 'lodash'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'slider-component',
  props: [
    'thumbnail'
  ],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      slides: null,
      activeSlide: null,
      sliderOptions: {
        effect: 'fade',
        // init: false,
      },
      thumbnailOptions: {
        // init: false
      },
      slideRef: null
    }
  },
  render (createElement) {
    let slides = this.createSlides(createElement)
    let thumbnails = this.createThumbnails(createElement)
    let captions = this.createCaptions(createElement)
    return createElement(
      'div',
      {
        'class': 'slider'
      },
      [
        slides,
        createElement(
          'div',
          {
            'class': {
              'wrapper': true
            }
          },
          [
            thumbnails,
            captions
          ]
        )
      ]
    )
  },
  methods: {
    onInit () {
      console.log('init')
    },
    onSlideChange () {
      console.log('slide change')
    },
    onResize () {
      console.log('on Resize')
    },
    createSlides (createElement) {
      return createElement(
        'swiper',
        {
          'ref': 'sliderRef',
          'props': {
            options: this.sliderOptions
           },
           on: {
             'slideChange': this.onSlideChange,
             'init': this.onInit
           }
        },
        _.map(
          this.slides,
          slide => {
            let img = slide.children.filter(vnd => vnd.tag === 'img')
            return createElement(
              'swiper-slide',
              {
                'class': 'slider-image'
              },
              [img]
            )
          }
        )
      )
    },
    createThumbnails (createElement) {
      return createElement(
        'swiper',
        {
          'ref': 'sliderThumbnailRef',
          'class': 'slider-thumbnail',
          props: this.thumbnailOptions
        },
        _.map(
          this.slides,
          slide => {
            let img = slide.children.filter(vnd => vnd.tag === 'img')
            //img.elm.classList.add('test-class')
            img.forEach(img => { Vue.set(img.data.attrs, 'class', 'img-fluid') })
            return createElement(
              'swiper-slide',
              {
                'class': 'slider-thumbnail-image'
              },
              [img]
            )
          }
        )
      )
    },
    createCaptions (createElement) {
      return createElement(
        'div',
        {
          'ref': 'sliderCaptionRef',
          'class': 'slider-caption-wrapper'
        },
        _.map(
          this.slides,
          captions => {
            let caption = captions.children.filter(vnd => vnd.tag === 'p')
            console.log(caption)
            caption = createElement(
              'div',
              {
                'class': 'slider-captions'
              },
              [caption]
            )
            return createElement(
              'transition',
              {},
              [caption]
            )
          }
        )
      )
    },
    setSlides () {
      this.slides = this.$slots.default.filter(vnd => vnd.tag !== undefined)
    },
    addNativeEventListener () {
      window.addEventListener('resize', this.onResize)
    },
    removeNativeEventListener () {
      window.removeEventListener('resize', this.onResize)
    }
  },
  created () {
    this.setSlides()
  },
  mounted () {
    this.addNativeEventListener()
    this.$nextTick(
      () => {
        const slider = this.$refs.sliderRef.swiper
        const thumbnails = this.$refs.sliderThumbnailRef.swiper
        // const captions = this.$refs.sliderCaptionRef.swiper

        slider.controller.control = thumbnails
        thumbnails.controller.control = slider
        // swscaptions.controller.control = thumbnails
        thumbnails.controller.control = slider
        this.slideRef = this.$refs.sliderRef.swiper
      }
    )
  },
  beforeDestroy () {
    this.removeNativeEventListener()
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../css/swiper.css";
  .slider {
    position: relative;
    overflow: hidden;
  }
  .wrapper {
    position: absolute;
    height: 100px;
    width:100%;
    bottom: 0;
    left: 0;
    display: flex
  }
  .slider-thumbnail {
    flex: 1;
  }
  .slider-caption-wrapper{
    flex: 2;
    position: relative
  }
  .slider-captions {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }
</style>
