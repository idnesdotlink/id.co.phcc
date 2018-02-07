<template>
  <button class="navbar-toggler" type="button" @click="togglepagenavigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions(['togglepagenavigation'])
    }
  }
</script>


<style lang="scss" scoped>

</style>

