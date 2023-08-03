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
        <h2>About me</h2>
        <div class="underline"></div>
      </div>

      <div class="row py-5">
        <div class="title animation col-sm-4 col-md-4 text-start">
          <span>My name is </span>
          <h3 class="name">Paula Piskorz</h3>
          <p>I am a front-end developer</p>
        </div>

        <div class="paragraf col-sm-6 col-md-8 text-start">
          <p class="animation">
            Thanks to the current opportunities for access to knowledge and
            technology, I finally decided to fulfill my curiosity about coding
            and creating websites. I faced the challenge and decided to take
            advantage of the opportunity and acquire more new skills.
          </p>

          <p class="animation">
            Over the past year, I have focused on learning how to create
            websites, starting from absolute basics, such as HTML and CSS, then
            moving to more advanced topics of coding, such as JavaScript,
            Node.js, and the basics of MongoDB and database management systems,
            and popular CMS, such as Wordpress. I have also developed my skills
            in using popular frameworks, such as Bootstrap, Tailwind, and
            Vue.js. At the beginning of my learning, I relied on free and
            popular sources, such as YouTube, MDN, and Stack Overflow. However,
            once I had mastered the basics, I decided to invest in paid courses,
            which allowed me to develop a deeper understanding and improve my
            skills.
          </p>

          <p class="animation">
            For one and a half years of developing myself as a programmer, I not
            only gained theoretical knowledge but also practical experience in
            creating websites, which I now proudly present in my portfolio. Now,
            with anticipation, I await the next stage of my career as a junior
            frontend developer, eager to develop my skills in practice and gain
            new experiences.
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
