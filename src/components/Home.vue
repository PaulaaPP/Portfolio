<template>
  <section class="header" id="home">
    <div class="hero-image">
      <div class="hero-shadow">
        <div class="hero-text animation">
          <h1>Witaj na mojej stronie!</h1>
          <p>Piękne i funckonajne strony internetowe to moja pasja</p>
          <a href="#about">
            <button type="button" class="btn btn-outline-primary">
              Kim jestem ?
            </button>
          </a>
        </div>
        <a href="#about"> <i class="fa-solid fa-arrow-down"></i></a>
      </div>
    </div>
  </section>
  <!-- If a hero graphic, first the div with the outline and then the div with the shadow-->
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

.header {
  h1 {
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  .hero-image {
    position: relative;
    height: 100vh;
    background-image: url("../assets/img/hero-img-big.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    z-index: 0;
  }

  .hero-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.678);

    z-index: -10;
  }

  .hero-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    z-index: 5;
    color: white;
    padding: 10px;
    text-align: center;

    h1 {
      font-size: 45px;
    }
    p {
      font-size: 15px;
    }

    //button
    .btn-outline-primary {
      margin-top: 15px;
      font-size: 25px;
      color: $green;
      border-color: $green;
      background-color: transparent;
      padding: 10px 20px;
      border-radius: 5px;
      border: 2px solid;
      box-shadow: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: $bright_green;
        box-shadow: $bright_green;
        animation: glow 1s ease-in-out infinite alternate;
        transform: scale(1.1);
      }
    }
  }

  //arrow icon
  .fa-solid {
    position: absolute;
    font-size: 30px;
    bottom: 40px;
    color: $bright_violet;
    left: 50%;
    animation: jump 1s infinite;
  }
}

/***  media queris ***/

// small
@media (max-width: 1024px) {
  .header {
    .hero-text {
      h1 {
        font-size: 35px;
        padding: 5px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}

// medium
@media (max-width: 425px) {
  .header {
    .hero-text {
      h1 {
        font-size: 30px;
        padding: 5px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}

/*** animations ***/
@keyframes glow {
  from {
    box-shadow: 0 0 10px $green, 0 0 20px $green, 0 0 30px $green;
  }
  to {
    box-shadow: 0 0 20px $green, 0 0 30px $green, 0 0 40px $green;
  }
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
