<script>
export default {
  data() {
    return {};
  },

  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<template>
  <div class="carousel">
    <slot></slot>
    <button @click.prevent="next" class="btn btn-next next">
      <i class="fa fa-angle-right right"></i>
    </button>
    <button @click.prevent="prev" class="btn btn-prev">
      <i class="fa fa-angle-left"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";
.carousel {
  position: relative;
  width: 800px;
  height: 500px;
  overflow: hidden;
}

button {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50% - 20px);
  background-color: blueviolet;
}

button:active,
button:hover {
  outline: none;
  cursor: pointer;
}

.next {
  right: 0;
  background-color: blueviolet;
}
.prev {
  left: 0;
  background-color: blueviolet;
}
</style>
