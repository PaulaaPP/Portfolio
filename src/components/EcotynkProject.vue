<script>
import Carousel from "./Carousel.vue";
import CarouselSlide from "./CarouselSlide.vue";
// foto for carusel slide

import ecotynk1 from "@/assets/img/ecotynk1.png";
import ecotynk2 from "@/assets/img/ecotynk2.png";
import ecotynk3 from "@/assets/img/ecotynk3.png";
import ecotynk4 from "@/assets/img/ecotynk4.png";
import ecotynk5 from "@/assets/img/ecotynk5.png";
import ecotynk6 from "@/assets/img/ecotynk6.png";
import ecotynk7 from "@/assets/img/ecotynk7.png";
import ecotynk8 from "@/assets/img/ecotynk8.png";

import buttonMixins from "../components/mixins/sliderbutton";

export default {
  mixins: [buttonMixins],
  props: ["ToggleEcotnyk"],
  data() {
    return {
      slides: [
        ecotynk1,
        ecotynk2,
        ecotynk3,
        ecotynk4,
        ecotynk5,
        ecotynk6,
        ecotynk7,
        ecotynk8,
      ],
      visibleSlide: 0,
    };
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
      <button>
        <a href="https://github.com/PaulaaPP/EcoTynk" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_styleSingleProjects";
// all styles in _styleSingleProjects.scss file
</style>
