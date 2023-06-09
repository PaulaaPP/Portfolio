<script>
export default {
  props: ["visibleSlide", "index"],

  data() {
    return {};
  },
};
</script>

<template>
  <div v-show="visibleSlide === index" class="carousel-slide">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";
.carousel-slide {
  width: 300px;
  height: 300px;
  border-radius: 10px;
}
</style>
