<script>
import Popup from "./Popup.vue";
import { ref } from "vue";

export default {
  name: "Projects",
  components: {
    Popup,
  },
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });

    const TogglePopup = trigger => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      Popup,
      popupTriggers,
      TogglePopup,
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

    <div class="container">
      <div class="row gap-3 align-items-center">
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
        <div class="col box ecoTynk animation">
          <div class="box-efects">
            <div class="shows">
              <button @click="() => TogglePopup('buttonTrigger')">
                Zobacz wiecej
              </button>
              <p>Java Script</p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col box ecoTynk animation">
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

    <!-- <button @click="() => TogglePopup('buttonTrigger')">Open Popup</button> -->
    <!-- <button @click="() => TogglePopup2('buttonTrigger2')">Open Popup2</button> -->
    <Popup
      v-if="popupTriggers.buttonTrigger"
      :TogglePopup="() => TogglePopup('buttonTrigger')"
    >
      <h2>My Button Popup</h2>
    </Popup>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

section {
  color: white;
  height: 100vh;
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
  cursor: pointer;

  &:hover {
    background-color: rgba(226, 43, 202, 0.329);
    transform: scale(1.04);
  }

  button {
    margin: 10px 10px;
    padding: 10px;
    border: 2px solid hsl(8%, 8%, 8%, 67%);
    border-radius: 10px;
    cursor: pointer;
    color: $green;
    border-color: $green;
    background-color: transparent;

    &:hover {
      background-color: transparent;
      border-color: $green;
      color: $bright_green;

      transform: scale(1.02);
    }
  }
}
.ecoTynk {
  background-image: url("../assets/img/demo1.jpg");
  background-position: center;
  background-size: cover;
}
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
