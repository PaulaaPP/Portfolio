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
  width: 74vw;
  height: 70vh;
  overflow: hidden;
}

button {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50% - 20px);
  border-color: $green;
  color: white;
  background-color: $green;

  &:hover,
  &:active {
    color: $bright_green;
    outline: none;
    cursor: pointer;
    transition: all 0.5s;
  }
}

.next {
  right: 0;
}
.prev {
  left: 0;
}

// ** Media queries **

// Big
@media (max-width: 2560px) {
  .carousel {
    width: 70vw;
  }
}

@media (max-width: 1500px) {
  .carousel {
    width: 74vw;
    height: 73vh;
  }
}

@media (max-width: 1300px) {
  .carousel {
    height: 65vh;
  }
}

@media (max-width: 1024px) {
  .carousel {
    height: 32vh;
  }
}

// medium
@media (max-width: 950px) {
  .carousel {
    height: 47vh;
  }
}

@media (max-width: 885px) {
  .carousel {
    height: 35vh;
  }
}

@media (max-width: 768px) {
  .carousel {
    height: 32vh;
  }
}

// small
@media (max-width: 425px) {
  .carousel {
    height: 25vh;
  }

  button {
    height: 34px;
    width: 20px;
  }
}

@media (max-width: 414px) {
  .carousel {
    height: 23vh;
  }
}
</style>
