<template>
  <section id="skills" class="py-45">
    <article class="container">
      <div class="heading-skilss anime text-center py-5">
        <h2>Umiejętności</h2>
        <div class="underline"></div>
      </div>

      <div class="row">
        <div class="skill col-sm-5 col-md-6 text-start">
          <h2>Techniczne</h2>

          <div class="anime">
            <h3>css</h3>
            <div class="bar"><span class="css"></span></div>
          </div>

          <div class="anime">
            <h3>js</h3>
            <div class="bar"><span class="js"></span></div>
          </div>

          <div class="anime">
            <h3>html 2</h3>
            <div class="bar"><span class="html"></span></div>
          </div>
          <div class="anime">
            <h3>wp</h3>
            <div class="bar"><span class="wp"></span></div>
          </div>
        </div>

        <div class="skill col-sm-5 col-md-6 text-start">
          <h2>Interpersonalne</h2>

          <div class="anime">
            <h3>css</h3>
            <div class="bar"><span class="css"></span></div>
          </div>

          <div class="anime">
            <h3>js</h3>
            <div class="bar"><span class="js"></span></div>
          </div>

          <div class="anime">
            <h3>html</h3>
            <div class="bar"><span class="html"></span></div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

/* heading*/
.heading-skilss {
  h2 {
    color: $green;
    font-size: 40px;
    margin-top: 30px;
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
}

/* progres bar */
.skill {
  list-style: none;
  color: white;
  width: 500px;
  margin: 60px auto;
  padding: 20px;

  h2 {
    font-size: 20px;
  }

  h3 {
    margin: 5px;
  }
}
.bar {
  background: #637c54;
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
    // width: 90%;

    background: linear-gradient(
      90deg,
      rgba(129, 252, 89, 1) 0%,
      rgba(41, 53, 86, 1) 100%
    );
  }
  .html {
    width: 80%;
  }
  .css {
    width: 70%;
  }
  .js {
    width: 45%;
  }
  .wp {
    width: 30%;
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
