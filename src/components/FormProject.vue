<script>
import buttonMixins from "../components/mixins/accordionClick";

export default {
  mixins: [buttonMixins],
  props: ["ToggleForm"],
};
</script>

<template>
  <div class="popup">
    <div class="popup-inner blur-effect">
      <div class="wrapper">
        <h4>Registration form - Java Script</h4>
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
                src="../assets/img/form.png"
                alt="Registration form"
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
                src="../assets/img/form2.png"
                alt="Registration form"
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
              aria-labelledby="panel4-title"
              aria-hidden="true"
              class="accordion-content"
              id="panel3-content"
            >
              <img
                class="accordion-image"
                src="../assets/img/form3.png"
                alt="Registration form"
              />
            </div>
          </div>
          <!-- 4  -->
          <div class="accordion-panel" @click="handleAccordionClick">
            <h2 id="panel3-title">
              <button
                class="accordion-trigger"
                aria-expanded="false"
                aria-controls="panel5-content"
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
                src="../assets/img/form4.png"
                alt="Registration form"
              />
            </div>
          </div>
        </div>
        <button class="popup-close" @click="ToggleForm()">Close</button>
        <button>
          <a
            href="https://github.com/PaulaaPP/registration-form"
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
