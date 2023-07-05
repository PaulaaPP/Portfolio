<script>
import Carousel from "./Carousel.vue";
import CarouselSlide from "./CarouselSlide.vue";
// foto for carusel slide
import galery1 from "@/assets/img/galery1.png";
import galery2 from "@/assets/img/galery2.png";
import galery3 from "@/assets/img/galery3.png";
import galery5 from "@/assets/img/galery5.png";
import galery6 from "@/assets/img/galery6.png";
import galery7 from "@/assets/img/galery7.png";
import galery8 from "@/assets/img/galery8.png";

import buttonMixins from "../components/mixins/sliderbutton";

export default {
  mixins: [buttonMixins],
  props: ["ToggleGalery"],
  data() {
    return {
      slides: [galery1, galery2, galery3, galery5, galery6, galery7, galery8],
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
      <button class="popup-close" @click="ToggleGalery()">Zamknij</button>
      <button>
        <a href="https://github.com/PaulaaPP/MyGalery" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_styleSingleProjects";
</style>
