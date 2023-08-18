<script>
import buttonMixins from "../components/mixins/accordionClick";

export default {
  mixins: [buttonMixins],
  props: ["ToggleEcotnyk"],
};
</script>

<template>
  <div class="popup">
    <div class="popup-inner blur-effect">
      <!-- <slot /> -->

      <div class="wrapper">
        <h4>EcoTynk - Bootstrap</h4>
        <div class="accordion">
          <!-- 1 -->
          <div class="accordion-panel" @click="handleAccordionClick">
            <h2 id="panel1-heading">
              <button
                class="accordion-trigger"
                aria-controls="panel1-content"
                aria-expanded="true"
              ></button>
            </h2>

            <div
              class="accordion-content"
              id="panel1-content"
              aria-labelledby="panel1-heading"
              aria-hidden="false"
              role="region"
            >
              <img
                class="accordion-image"
                src="../assets/img/ecotynk1.png"
                alt="Plaster website demo"
              />
            </div>
          </div>
          <!--  2-->
          <div class="accordion-panel" @click="handleAccordionClick">
            <h2 id="panel2-title">
              <button
                class="accordion-trigger"
                aria-expanded="false"
                aria-controls="panel2-content"
              ></button>
            </h2>

            <div
              role="region"
              aria-labelledby="panel2-title"
              aria-hidden="true"
              class="accordion-content"
              id="panel2-content"
            >
              <img
                class="accordion-image"
                src="../assets/img/ecotynk2.png"
                alt="Plaster website demo"
              />
            </div>
          </div>
          <!-- 3 -->
          <div class="accordion-panel" @click="handleAccordionClick">
            <h2 id="panel3-title">
              <button
                class="accordion-trigger"
                aria-expanded="false"
                aria-controls="panel3-content"
              ></button>
            </h2>

            <div
              role="region"
              aria-labelledby="panel3-title"
              aria-hidden="true"
              class="accordion-content"
              id="panel3-content"
            >
              <img
                class="accordion-image"
                src="../assets/img/ecotynk3.png"
                alt="Plaster website demo"
              />
            </div>
          </div>
          <!-- 4  -->
          <div class="accordion-panel" @click="handleAccordionClick">
            <h2 id="panel3-title">
              <button
                class="accordion-trigger"
                aria-expanded="false"
                aria-controls="panel3-content"
              ></button>
            </h2>

            <div
              role="region"
              aria-labelledby="panel3-title"
              aria-hidden="true"
              class="accordion-content"
              id="panel3-content"
            >
              <img
                class="accordion-image"
                src="../assets/img/ecotynk4.png"
                alt="Plaster website demo"
              />
            </div>
          </div>
        </div>
        <button class="popup-close" @click="ToggleEcotnyk()">Close</button>
        <button>
          <a
            href="https://github.com/PaulaaPP/EkotynkBoostrapVersion"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_styleSingleProjects";
// all styles in _styleSingleProjects.scss file
</style>
