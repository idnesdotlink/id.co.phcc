<template>
  <div class="page-container" :style="isPageNavigationOpen ? 'transform: translateX(-300px);' : ''" v-bar>
    <div class="page-container-child">
      <slot/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  import NavigationButtonComponent from './NavigationButtonComponent'
  Vue.component('navigation-button-component', NavigationButtonComponent)
  export default {
    name: 'PageContainerComponent',
    computed: {
      ...mapGetters(['isPageNavigationOpen'])
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .page-container {
    height: 100vh;
    width: 100vw;
    flex: 1;
    display: flex;
    flex-direction: column;
    transition: transform ease .5s;
  }
</style>

