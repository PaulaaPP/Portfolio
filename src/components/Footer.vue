<template>
  <div id="home" class="footer">
    fOOTER
    <div><a href="#">Logo</a></div>
    <nav>
      <a href="#">Home > </a>
      <a href="#about">O mnie> </a>
      <a href="#contact">Kontakt> </a>
      <a href="#projects">Projekty > </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";
.footer {
  height: 10vh;
  background-color: $dark_green;
}
</style>
