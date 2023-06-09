<script>
import Popup from "./Popup.vue";
import Popuppp from "./Popuppp.vue";

import { ref } from "vue";

export default {
  name: "Projects",
  components: {
    Popup,
    Popuppp,
  },
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });
    const popupEcotynk = ref({
      ecotynkTrigger: false,
    });

    const TogglePopup = trigger => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const ToggleEcotnyk = ecotynkTrigger => {
      popupEcotynk.value[ecotynkTrigger] = !popupEcotynk.value[ecotynkTrigger];
    };

    return {
      Popup,
      Popuppp,
      popupTriggers,
      TogglePopup,
      ToggleEcotnyk,
      popupEcotynk,
    };
  },
};
</script>

<template>
  <section id="projects" class="portfolio section">
    <div class="heading-skilss animation text-center py-5">
      <h2>Portfolio</h2>
      <div class="underline"></div>
    </div>

    <div class="container pt-5">
      <div class="row gap-5 align-items-center">
        <!--  -->

        <div class="col box ecoTynk animation">
          <div class="box-efects">
            <div>
              <button @click="() => TogglePopup('buttonTrigger')">
                Zobacz wiecej
              </button>
              <p>EcoTynk -wordpress</p>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="col box js animation">
          <div class="box-efects">
            <div class="shows">
              <button @click="() => ToggleEcotnyk('ecotynkTrigger')">
                Zobacz wiecej
              </button>
              <p>Java Script</p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col box galery animation">
          <div class="box-efects">
            <div class="shows">
              <button @click="() => TogglePopup('buttonTrigger')">
                Zobacz wiecej
              </button>
              <p>Moja Galeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Popup
      v-if="popupTriggers.buttonTrigger"
      :TogglePopup="() => TogglePopup('buttonTrigger')"
    >
      <h2>My Button Popup</h2>
    </Popup>

    <!--  -->

    <Popuppp
      v-if="popupEcotynk.ecotynkTrigger"
      :ToggleEcotnyk="() => ToggleEcotnyk('ecotynkTrigger')"
    >
      <h2>Java Script</h2>
    </Popuppp>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

section {
  height: 100vh;
  padding-top: 7%;
}
h2 {
  color: white;
}

/* heading*/
.heading-skilss {
  h2 {
    color: $green;
    font-size: 40px;
  }
  .underline {
    margin: 0 auto;
    width: 100px;
    height: 5px;
    background: linear-gradient(
      to right,
      $dark_green,
      $bright_green,
      $green,
      $violet,
      $bright_violet,
      $dark_violet
    );
    background-size: 240% 240%;
    animation: gradient-animation 3s ease infinite;
  }
}

.box-efects {
  margin: 40% 0;
  height: 40%;
  border-radius: 0.5rem;
  display: grid;
  grid-template-rows: 0fr;
  transition: all 0.5s;
  overflow: hidden;

  div {
    overflow: hidden;
  }

  &:hover {
    grid-template-rows: 1fr;
    background: rgba(59, 49, 110, 0.404);
    transition: grid-template-rows 1s;
  }
}

.box {
  z-index: 1;
  height: 300px;
  width: 300px;
  background-color: rgb(175, 145, 107);
  border-radius: 10px;
  transition: transform 1s;
  box-shadow: -8px 5px 13px 1px #0e0d0dab;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(226, 43, 202, 0.329);
    transform: scale(1.04);
  }

  button {
    margin: 10px;
    padding: 10px;
    border: 2px solid $green;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    border-color: $green;
    background-color: transparent;

    &:hover {
      background-color: transparent;
      border-color: $green;
      color: $bright_green;
      transition: color 0.3s;
    }
  }
}

.ecoTynk {
  background-image: url("../assets/img/ecotynk0.png");
  background-position: center;
  background-size: cover;
}

.js {
  background-image: url("../assets/img/demo1.jpg");
  background-position: center;
  background-size: cover;
}

.galery {
  background-image: url("../assets/img/form-image.jpg");
  background-position: center;
  background-size: cover;
}

/* media queries  */
//small screen
@media (max-width: 600px) {
  .row {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

/* animations underline */
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
