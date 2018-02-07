<template>
  <div class="image-stream">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>

.image-stream {
  float: none;
  margin: 0 -3px;

}
.image-stream::after {
  content: " ";
  display: block;
  clear: both;
  float: none;
}

.image-stream > div {
 float: left;
}
.image-stream *:focus {
  outline: none;
}

.image-stream a {
  width: 100%;
  height: 100%;
  display: block;
  padding: 0;
  margin: 0;
}

.image-stream img {
  margin: 3px;
}

</style>


