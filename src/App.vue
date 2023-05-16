<script setup>
// import { RouterLink, RouterView } from "vue-router";
import Navigations from "./components/Navigations.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <Navigations />
    <Home />
  </header>

  <main>
    <div class="bg"><About /> <Projects /></div>

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
</style>
