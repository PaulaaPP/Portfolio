<template>
  <section id="skills" class="skills py-45">
    <article class="container">
      <div class="heading-skilss text-center py-5">
        <h2>Umiejętności</h2>
        <div class="underline"></div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-8 text-start image">
          <img src="../assets/img/skills-noBG.png" alt="" />
        </div>

        <div class="col-sm-4 col-md-4 text-start text-start py-5">
          <div class="skills">
            <div class="skill html">
              <h3 class="skill-title">HTML</h3>
              <div class="skill-bar">
                <div class="skill-progres"></div>
              </div>
            </div>
          </div>

          <div class="skills">
            <div class="skill css">
              <h3 class="skill-title">CSS</h3>
              <div class="skill-bar">
                <div class="skill-progres"></div>
              </div>
            </div>
          </div>

          <div class="skills">
            <div class="skill js">
              <h3 class="skill-title">Java Script</h3>
              <div class="skill-bar">
                <div class="skill-progres"></div>
              </div>
            </div>
          </div>

          <div class="skills">
            <div class="skill wordpres">
              <h3 class="skill-title">Word Press</h3>
              <div class="skill-bar">
                <div class="skill-progres"></div>
              </div>
            </div>
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

.skills {
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
    // Skillls class
    .heading-skilss {
      h2 {
        color: $green;
        font-size: 40px;
        margin-top: 30px;
      }
    }
    .skill-title {
      font-size: 20px;
      color: white;
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
