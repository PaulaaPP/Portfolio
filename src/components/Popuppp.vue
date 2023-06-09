<script>
import Carousel from "./Carousel.vue";
import CarouselSlide from "./CarouselSlide.vue";

// foto for carusel slide
import demo1 from "@/assets/img/demo1.jpg";
import ecotynk2 from "@/assets/img/ecotynk2.png";
import ecotynk3 from "@/assets/img/ecotynk3.png";

export default {
  props: ["ToggleEcotnyk"],
  data() {
    return {
      slides: [demo1, ecotynk2, ecotynk3],
      visibleSlide: 0,
    };
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    },
  },

  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
    },
  },
  components: {
    Carousel: Carousel,
    CarouselSlide: CarouselSlide,
  },
};
</script>

<template>
  <div class="popup">
    <div class="popup-inner blur-effect">
      <slot />

      <!--  -->
      <div>
        <carousel @next="next" @prev="prev">
          <CarouselSlide
            v-for="(slide, index) in slides"
            :key="slide"
            :index="index"
            :visibleSlide="visibleSlide"
            class="carousel-slider"
          >
            <img :src="slide" :alt="slide" />
          </CarouselSlide>
        </carousel>
      </div>
      <!--  -->
      <button class="popup-close" @click="ToggleEcotnyk()">Zamknij</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 800px;
  }
}

.popup-inner {
  background: rgba(59, 49, 110, 0.205);
  padding: 100vh;

  button {
    margin: 10px 10px;
    padding: 10px;
    font-size: 20px;
    border: 2px solid $green;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    border-color: $green;
    background-color: transparent;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      background-color: transparent;
      border-color: $green;
      color: $bright_green;
      transform: scale(1.1);
    }
  }
}
.blur-effect {
  backdrop-filter: blur(5px);
}
</style>
