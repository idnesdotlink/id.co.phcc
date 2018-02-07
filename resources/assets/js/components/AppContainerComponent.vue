<template>
  <div class="app-container">
    <slot/>
    <transition name="push">
    <div>
    <div class="navigation" v-if="isPageNavigationOpen"></div>
    <div class="overlay" v-if="isPageNavigationOpen" @click="setpagenavigationclose"></div>
    </div>
    </transition>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'AppContainerComponent',
    computed: {
      ...mapGetters(['isPageNavigationOpen'])
    },
    mounted () {
      window.addEventListener('resize', this.setpagenavigationclose)
      window.addEventListener('keyup', this.globalClick)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.setpagenavigationclose)
    },
    methods: {
      ...mapActions(['setpagenavigationclose']),
      globalClick (e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-container {
    height: 100vh;
    width: 100vw;
    flex: 1;
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background: rgba(0,0,0,.5);
    transform: translateX(-300px);
  }
  .navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    z-index: 11;
    background: rgba(255,255,0,.5);
  }
  .push-enter {
    opacity: 0;
    transform: translateX(0px);

  }
  .push-enter-to {
    transform: translateX(-300px);
  }
  .push-leave {
    transform: translateX(-300px);
  }
  .push-enter-active {
    transition: all ease .5s;
  }
  .push-leave-to {
    opacity: 0;
    transform: translateX(0px);
  }
  .push-leave-active{
    transition: all ease .5s;
  }
</style>

