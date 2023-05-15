<template>
  <section id="about" class="about py-45">
    <article class="container">
      <div class="heading-about text-center py-5">
        <h2>O mnie</h2>
        <div class="underline"></div>
      </div>

      <div class="row py-5">
        <div class="col-sm-4 col-md-4 text-start">
          <span>Nazywam sie</span>
          <h3>Paula Piskorz</h3>
          <p>Jestem frontend developerem</p>
        </div>

        <div class="col-sm-6 col-md-8 text-start">
          <p>
            Przez długi czas zastanawiałam się, jakby to było, gdybym sama mogła
            stworzyć swoją własną stronę internetową lub napisywać małe
            programy. Zawsze ciekawiły mnie te tematy, a nowinki technologiczne
            zwracały moją uwagę. Postanowiłam w końcu podjąć to wyzwanie i
            zaryzykować.
            <br />
            <br />
            W ostatnim roku skupiłam swoją uwagę na nauce tworzenia stron
            internetowych i programowania. Po przyswojeniu podstaw HTML i CSS
            odkryłam, że można w nich wykorzystać swoją kreatywność, co tylko
            jeszcze bardziej zachęciło mnie do pogłębiania swojej wiedzy na
            temat programowania.
            <br />
            <br />
            Przez półtora roku pracowałam w domowym zaciszu, rozwijając swoje
            umiejętności i zdobywając wiedzę, którą dziś z dumą prezentuję w
            moim portfolio. Teraz z niecierpliwością czekam na kolejny etap
            mojej kariery jako junior frontend developer, aby móc rozwijać swoje
            umiejętności w praktyce i zdobyć nowe doświadczenia.
          </p>
        </div>
      </div>

      <div class="heading-skilss text-center py-5">
        <h2>Umiejętności</h2>
        <div class="underline"></div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

.about {
  height: 100vh;
  background: linear-gradient(
    148deg,
    rgba(21, 105, 115, 1) 0%,
    rgba(27, 49, 62, 1) 20%,
    rgba(29, 33, 42, 1) 35%,
    rgba(29, 33, 42, 1) 50%,
    rgb(35, 27, 41, 1) 60%,
    rgb(49, 36, 58) 75%,
    rgb(57, 42, 68) 85%,
    rgba(89, 61, 111, 1) 100%
  );

  //about me classes
  .heading-about {
    h2 {
      color: $green;
      font-size: 60px;
      margin-top: 35px;
    }
  }
  .underline {
    margin: 0 auto;
    width: 100px;
    height: 5px;
    background: linear-gradient(
      to right,
      #1b313e,
      #07c0b6,
      #068a89,
      #b87cb9,
      #e762dc,
      #3b316e
    );
    background-size: 240% 240%;
    animation: gradient-animation 3s ease infinite;
  }
  .container {
    .row {
      p {
        font-size: 17px;
        color: white;
      }

      span {
        color: $light_green;
        font-size: 15px;
      }
      h3 {
        color: $green;
        font-size: 45px;
      }
    }

    // Skillls class
    .heading-skilss {
      h2 {
        color: $green;
        font-size: 40px;
        margin-top: 30px;
      }
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
