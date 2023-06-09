<script>
import Skills from "./Skills.vue";

export default {
  name: "About",
  components: {
    Skills,
  },
};
</script>

<template>
  <section id="about" class="py-5 pb-5">
    <article class="container">
      <div class="heading-about animation text-center py-4">
        <h2>O mnie</h2>
        <div class="underline"></div>
      </div>

      <div class="row py-5">
        <div class="title animation col-sm-4 col-md-4 text-start">
          <span>Nazywam sie</span>
          <h3 class="name">Paula Piskorz</h3>
          <p>Jestem fron-tend developerem</p>
        </div>

        <div class="paragraf col-sm-6 col-md-8 text-start">
          <p class="animation">
            Przez długi czas zastanawiałam się, jakby to było, gdybym sama mogła
            stworzyć swoją własną stronę internetową lub napisywać małe
            programy. Zawsze ciekawiły mnie te tematy, a nowinki technologiczne
            zwracały moją uwagę. Postanowiłam w końcu podjąć to wyzwanie i
            zaryzykować.
          </p>

          <p class="animation">
            W ostatnim roku skupiłam swoją uwagę na nauce tworzenia stron
            internetowych i programowania. Po przyswojeniu podstaw HTML i CSS
            odkryłam, że można w nich wykorzystać swoją kreatywność, co tylko
            jeszcze bardziej zachęciło mnie do pogłębiania swojej wiedzy na
            temat programowania.
          </p>

          <p class="animation">
            Przez półtora roku pracowałam w domowym zaciszu, rozwijając swoje
            umiejętności i zdobywając wiedzę, którą dziś z dumą prezentuję w
            moim portfolio. Teraz z niecierpliwością czekam na kolejny etap
            mojej kariery jako junior frontend developer, aby móc rozwijać swoje
            umiejętności w praktyce i zdobyć nowe doświadczenia.
          </p>
        </div>
      </div>
    </article>
    <!-- next component -->
    <Skills />
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

//heading
.heading-about {
  h2 {
    color: $green;
    font-size: 40px;
    margin-top: 40px;
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

.row {
  height: auto;
  color: white;

  .title {
    color: white;
    .name {
      color: $green;
      font-size: 45px;
    }
    span {
      color: $light_green;
    }
  }
  .paragraf {
    p {
      line-height: 28px;
    }
  }
}

/*  media queries */

//large
@media (max-width: 1024px) {
  .row {
    padding: 0 20px;
    p {
      font-size: 16px;
    }
    .name {
      font-size: 35px;
    }
  }
}

//medium
@media (max-width: 767px) {
  .row {
    display: grid;
    grid-template-rows: auto;
    place-items: center;
    grid-gap: 1rem;
    grid-template-columns: 1fr;

    .title {
      width: auto;
    }
    .paragraf {
      width: auto;
    }
  }
}

// small
@media (max-width: 425px) {
  .heading-about h2 {
    font-size: 35px;
  }
  .row {
    p {
      font-size: 14px;
      padding-top: 2px;
    }
    .name {
      font-size: 28px;
    }
  }
}

// animations
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
