<script>
import Carousel from "./Carousel.vue";
import CarouselSlide from "./CarouselSlide.vue";
// foto for carusel slide
import form from "@/assets/img/form.png";
import form2 from "@/assets/img/form2.png";
import form3 from "@/assets/img/form3.png";
import form4 from "@/assets/img/form4.png";
import form5 from "@/assets/img/form5.png";
import form6 from "@/assets/img/form6.png";

import buttonMixins from "../components/mixins/sliderbutton";

export default {
  mixins: [buttonMixins],
  props: ["ToggleForm"],
  data() {
    return {
      slides: [form, form2, form3, form4, form5, form6],
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
      <button class="popup-close" @click="ToggleForm()">Zamknij</button>
      <button>
        <a href="https://github.com/PaulaaPP/registration-form" target="_blank">
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
