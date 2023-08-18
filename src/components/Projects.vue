<script>
import EcotynkProject from "./EcotynkProject.vue";
import FormProject from "./FormProject.vue";
import GaleryProject from "./GaleryProject.vue";
import { ref } from "vue";

export default {
  name: "Projects",
  components: {
    EcotynkProject,
    FormProject,
    GaleryProject,
  },
  setup() {
    const popupEcotynk = ref({
      ecotynkTrigger: false,
    });

    const popupForm = ref({
      formTrigger: false,
    });

    const popupGalery = ref({
      galeryTrigger: false,
    });
    // ecotynk
    const ToggleEcotnyk = ecotynkTrigger => {
      popupEcotynk.value[ecotynkTrigger] = !popupEcotynk.value[ecotynkTrigger];
    };
    // form
    const ToggleForm = formTrigger => {
      popupForm.value[formTrigger] = !popupForm.value[formTrigger];
    };
    const ToggleGalery = galeryTrigger => {
      popupGalery.value[galeryTrigger] = !popupGalery.value[galeryTrigger];
    };

    return {
      EcotynkProject,
      ToggleEcotnyk,
      popupEcotynk,
      popupForm,
      ToggleForm,
      ToggleGalery,
      popupGalery,
    };
  },
};
</script>

<template>
  <section id="projects" class="portfolio section">
    <div class="heading-skilss animation text-center py-3">
      <h2>Portfolio</h2>
      <div class="underline"></div>
    </div>

    <div class="container pt-5">
      <div class="row gap-5 align-items-center p-3">
        <!-- box for projects-->
        <div class="col box ecoTynk animation">
          <div
            @click="() => ToggleEcotnyk('ecotynkTrigger')"
            class="box-efects"
          >
            <div class="shows">
              <p>EcoTynk</p>
              <button>Discover more</button>
            </div>
          </div>
        </div>
        <!-- box for projects-->
        <div class="col box js animation">
          <div @click="() => ToggleForm('formTrigger')" class="box-efects">
            <div class="shows">
              <p>Registration form</p>
              <button>Discover more</button>
            </div>
          </div>
        </div>
        <!-- box for projects-->

        <div class="col box galery animation">
          <div @click="() => ToggleGalery('galeryTrigger')" class="box-efects">
            <div class="shows">
              <p>My Gallery</p>
              <button>Discover more</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Popup whith carousel Projects  -->
    <EcotynkProject
      v-if="popupEcotynk.ecotynkTrigger"
      :ToggleEcotnyk="() => ToggleEcotnyk('ecotynkTrigger')"
    >
      <!-- <h2>EcoTynk - Bootstrap</h2> -->
    </EcotynkProject>

    <!-- Popup whith carousel Projects  -->
    <FormProject
      v-if="popupForm.formTrigger"
      :ToggleForm="() => ToggleForm('formTrigger')"
    >
      <!-- <h2>Registration form - Java Script</h2> -->
    </FormProject>

    <!-- Popup whith carousel Projects  -->
    <GaleryProject
      v-if="popupGalery.galeryTrigger"
      :ToggleGalery="() => ToggleGalery('galeryTrigger')"
    >
      <h2>My Gallery - Custom WordPress Theme(FSE) - wordpress</h2>
    </GaleryProject>
  </section>

  <!--  -->
  <!--  -->
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

section {
  height: 100vh;
  padding-top: 12%;
}
h2 {
  color: white;
  font-size: 18px;
}

.lol {
  background-color: red;
}

/***   heading ****/
.heading-skilss {
  h2 {
    color: $green;
    font-size: 40px;
  }
  // class for underlie is in app.vue
}

.box-efects {
  margin: 4% 0;
  height: 91%;
  border-radius: 0.5rem;
  display: grid;
  grid-template-rows: 0fr;
  transition: all 0.5s;
  overflow: hidden;

  .shows {
    margin-top: 60px;
    text-align: center;
    place-items: center;
  }

  div {
    overflow: hidden;
  }
  p {
    padding-left: 12px;
  }

  &:hover {
    grid-template-rows: 1fr;
    background: rgba(59, 49, 110, 0.604);
    transition: grid-template-rows 1s;
  }
}

.box {
  z-index: 1;
  height: 300px;
  width: 300px;
  font-size: 20px;
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
  background-image: url("../assets/img/ecotynk1.png");
  background-position: center;
  background-size: cover;
}

.js {
  background-image: url("../assets/img/form.png");
  background-position: center;
  background-size: cover;
}

.galery {
  background-image: url("../assets/img/galery1.png");
  background-position: center;
  background-size: cover;
}

/**  media queries  ***/

@media (max-width: 1399px) {
  .box-efects {
    margin: 5% 0;
  }
}

@media (max-width: 1199px) {
  p {
    font-size: 19px;
  }
}

@media (max-width: 1024px) {
  section {
    padding-top: 33%;
  }
}
@media (max-width: 998px) {
  .box-efects {
    margin: 9% 0;
    height: 90%;
  }
  .box {
    button {
      margin: 25px 7px;
      padding: 13px;
      font-size: 19px;
    }
  }
}

//medium screen
@media (max-width: 885px) {
  section {
    padding-top: 27%;
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 14px;
  }
  // a {
  //   font-size: 21px;
  // }
  .box-efects {
    margin: 5% 0;
    height: 91%;
  }
  .box {
    button {
      margin: 10px 30px;
    }
  }
}

@media (max-width: 688px) {
  section {
    padding-bottom: 41%;
    height: 91%;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 5px;
  }

  .box-efects {
    margin: 4% 0;
    height: 90%;
  }
  .box {
    button {
      margin: 52px 11px;
      padding: 19px;
    }
  }
}

//small screen
@media (max-width: 414px) {
  section {
    height: 158vh;
  }
  // a {
  //   margin: 0 6px;
  //   font-size: 17px;
  // }

  .box-efects {
    .shows {
      margin-top: 47px;
      p {
        font-size: 15px;
      }
    }
  }
  .box {
    height: 202px;
    button {
      margin: 8px 13px;
      padding: 11px;
      font-size: 15px;
    }
  }
}

@media (max-width: 393px) {
  section {
    height: 150vh;
  }

  .box {
    height: 180px;
    width: 290px;
    button {
      margin: 0 13px;
    }
  }
}
@media (max-width: 330px) {
  section {
    height: 210vh;
    // padding-bottom: 20%;
  }
  .box-efects {
    .shows {
      margin-top: 40px;
    }
  }

  .box {
    height: 180px;
    width: 250px;
    button {
      margin: 0 13px;
    }
  }
}
</style>
