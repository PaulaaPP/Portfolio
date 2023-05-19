<script>
// import { RouterLink, RouterView } from "vue-router";
import Navigations from "./components/Navigations.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
// import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

import { onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
export default {
  components: {
    Navigations,
    Home,
    About,
    // Skills,
    Projects,
    Contact,
    Footer,
  },
  setup() {
    const cards = ref([]);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle("animate", entry.isIntersecting);
        });
        // console.log(entries);
      }
      // {
      //   // threshold: 0.5,
      //   rootMargin: "-30px",
      // }
    );

    onMounted(() => {
      const cardElements = document.querySelectorAll(".anime");
      cardElements.forEach(card => {
        observer.observe(card);
      });
    });

    return {
      cards,
    };
  },
};
</script>

<template>
  <header>
    <Navigations />
    <Home />
  </header>

  <main>
    <div class="bg">
      <About />
      <Projects />
    </div>

    <Contact />
  </main>

  <Footer />
</template>

<style lang="scss">
@import "@/assets/_shared.scss/";
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  overflow-y: scroll;
  box-sizing: border-box;
  background-color: rgb(143, 141, 139);
  font-family: "Pacifico", cursive;
  scroll-behavior: smooth;

  .bg {
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
  }
}
.anime {
  opacity: 0;
  transform: translateY(-80px);
  transition: opacity 1s ease-out, transform 1s;
}

.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
