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
            Dzięki obecnym możliwościom dostępu do wiedzy i technologii,
            postanowiłam wreszcie zaspokoić swoją ciekawość dotyczącą kodowania
            i tworzenia stron internetowych. Podjęłam wyzwanie i postanowiłam
            skorzystać z okazji, aby zdobyć kolejne nowe umiejętności.
          </p>

          <p class="animation">
            W ciągu ostatniego roku skoncentrowałam się na nauce tworzenia stron
            internetowych, rozpoczynając od absolutnych podstaw, takich jak HTML
            i CSS, a następnie posuwając się ku bardziej zaawansowanym
            zagadnieniom kodowania, takim jak JavaScript, Node.js i podstawy
            bazy danych Mongo DB. Rozwijałam także umiejętności korzystania z
            popularnych frameworków, takich jak Bootstrap, Tailwind i Vue.js. Na
            początku mojej nauki czerpałam wiedzę z darmowych i popularnych
            źródeł, takich jak YouTube, MDN i Stack Overflow. Jednak gdy
            opanowałam podstawy, zdecydowałam się inwestować w płatne kursy,
            które umożliwiły mi dogłębniejsze poznanie i rozwinięcie
            umiejętności.
          </p>

          <p class="animation">
            Przez półtora roku rozwijania się jako programistka zdobyłam nie
            tylko wiedzę teoretyczną, ale także zdobyłam praktyczne
            doświadczenie w tworzeniu stron internetowych, którą dziś z dumą
            prezentuję w moim portfolio. Teraz z niecierpliwością czekam na
            kolejny etap mojej kariery jako junior frontend developer, aby móc
            rozwijać swoje umiejętności w praktyce i zdobyć nowe doświadczenia.
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
  // class for underlie in app.vue
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
