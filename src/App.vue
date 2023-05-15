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
    <About />
    <Projects />
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
}
</style>
