<script>
export default {
  name: "Skills",
};
</script>

<template>
  <section id="skills" class="pt-5">
    <article class="container">
      <div class="heading-skilss animation text-center py-5">
        <h2>Umiejętności</h2>
        <div class="underline"></div>
      </div>

      <div class="row">
        <!-- hard skills -->
        <div class="skill">
          <h2>techniczne</h2>
          <div class="linear g-col-6 text-start">
            <div class="bars animation">
              <h3>html</h3>
              <div class="bar"><span class="html">80%</span></div>
            </div>

            <div class="bars animation">
              <h3>css</h3>
              <div class="bar"><span class="css">65%</span></div>
            </div>

            <div class="bars animation">
              <h3>java script</h3>
              <div class="bar"><span class="js">45%</span></div>
            </div>

            <div class="bars animation">
              <h3>vue</h3>
              <div class="bar"><span class="vue">40%</span></div>
            </div>

            <div class="bars animation">
              <h3>wordpress</h3>
              <div class="bar"><span class="wp">55%</span></div>
            </div>

            <div class="bars animation">
              <h3>MongoDB / Firebase</h3>
              <div class="bar"><span class="other">30%</span></div>
            </div>
          </div>
        </div>

        <!-- soft skills  -->
        <div class="skill cicrle g-col-6 grid text-center">
          <h2>Interpersonalne</h2>
          <div class="grid-container">
            <li class="circles animation">
              <div class="team-work-progress">
                <span class="progress-value">95%</span>
              </div>
              <span class="text">Praca zespołowa</span>
            </li>

            <li class="circles animation">
              <div class="creativity-progress">
                <span class="progress-value">85%</span>
              </div>
              <span class="text">Kreatywność</span>
            </li>

            <li class="circles animation">
              <div class="troubleshooting-progress">
                <span class="progress-value">65%</span>
              </div>
              <span class="text">Rozwiązywanie problemów</span>
            </li>

            <li class="circles animation">
              <div class="communication-progress">
                <span class="progress-value">80%</span>
              </div>
              <span class="text">Komunikacja</span>
            </li>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

/* heading*/
.heading-skilss {
  h2 {
    color: $green;
    font-size: 40px;
  }
  // class for underlie in app.vue
}

/* progres bar -linear */
.skill {
  list-style: none;
  color: white;
  width: 500px;
  margin: 60px auto;
  padding: 20px;

  h2 {
    font-size: 20px;
    margin-bottom: 42px;
    text-transform: uppercase;
    text-align: center;
  }

  h3 {
    margin: 5px;
    padding: 5px;
    font-size: 15px;
    color: $light_green;
    text-transform: uppercase;
  }
  .bars {
    padding: 10px;
  }
}
.bar {
  background: $dark_green;
  display: block;
  height: 20px;
  width: 60%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -7px 5px 27px -1px rgba(9, 10, 10, 1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: -7px 5px 27px -1px rgba(39, 51, 51, 1);
    transform: scale(1.1);
  }
  span {
    height: 20px;
    float: left;
    background: linear-gradient(90deg, $green, $bright_green, $violet 100%);
    text-align: right;
  }
  .html {
    width: 80%;
  }
  .css {
    width: 65%;
  }
  .js {
    width: 45%;
  }
  .wp {
    width: 55%;
  }
  .vue {
    width: 40%;
  }
  .other {
    width: 30%;
  }
}

/* progres bar- cicrle */
.cicrle {
  h2 {
    margin-bottom: 71px;
    text-transform: uppercase;
  }
  span {
    font-size: 13px;
    text-transform: uppercase;
  }
}
.circles {
  padding: 13px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  text-align: center;
  gap: 20px;
}

.progress-circle {
  position: relative;
  height: 110px;
  width: 110px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: -7px 5px 27px -1px rgba(39, 51, 51, 1);
    transform: scale(1.1);
  }
}

.progress-circle::before {
  content: "";
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: $dark_green;
}

.team-work-progress {
  @extend .progress-circle;
  background: conic-gradient(
    $green 210deg,
    $bright_green 280deg,
    $violet 339deg,
    $dark_green 340deg
  );
}

.creativity-progress {
  @extend .progress-circle;
  background: conic-gradient(
    $green 150deg,
    $bright_green 200deg,
    $violet 307deg,
    $dark_green 306deg
  );
}

.troubleshooting-progress {
  @extend .progress-circle;
  background: conic-gradient(
    $green 190deg,
    $bright_green 210deg,
    $violet 233deg,
    $dark_green 234deg
  );
}
.communication-progress {
  @extend .progress-circle;
  background: conic-gradient(
    $green 200deg,
    $bright_green 220deg,
    $violet 287deg,
    $dark_green 288deg
  );
}

.progress-value {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: $light_violet;
}
.text {
  font-size: 30px;
  font-weight: 500;
  color: $light_green;
  padding: 13px;
}

/*  media queries */

//small screen
@media (max-width: 1199px) {
  .linear {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-31%, -50%);
  }
}

@media (max-width: 768px) {
  .linear {
    position: relative;
    top: 43%;
    left: 50%;
    transform: translate(-31%, -50%);
    width: 360px;
  }
}

@media (max-width: 425px) {
  .heading-skilss h2 {
    font-size: 35px;
  }
  .circles {
    align-content: center;
    margin: auto;
  }
  .grid-container {
    grid-template-columns: 1fr;
  }

  .linear {
    position: relative;
    top: 43%;
    left: 50%;
    transform: translate(-31%, -50%);
    width: 320px;
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
