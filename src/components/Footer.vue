<template>
  <section class="main-background-color">
    <div class="">
      <a class="navbar-brand" href="#">
        <i class="fa-solid fa-code"></i>
        <span>Paula Piskorz</span>
        <p>fron-tend developerem</p>
      </a>
    </div>

    <div class="navbar-nav">
      <a class="nav-link" href="#about">O mnie </a>
      <a class="nav-link" href="#projects">Projekty</a>
      <a class="nav-link" href="#contact">Kontakt</a>
    </div>

    <div class="links">
      <li>
        <a href="https://github.com/PaulaaPP/Portfolio" target="_blank"
          ><i class="fa-brands fa-github"></i
        ></a>
      </li>
      <li><a href=""></a><i class="fa-brands fa-linkedin"></i></li>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";
section {
  background-color: grey;
  height: 20vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-content: center;
  column-gap: 20px;
  color: white;
}
.navbar-brand {
  font-size: 23px;

  i {
    color: $bright_violet;
    margin-right: 8px;

    &:hover {
      color: $violet;
    }
  }

  span {
    font-family: "Pacifico", cursive;
    color: $bright_green;

    &:hover {
      color: $green;
    }
  }

  p {
    font-size: 15px;
  }
}
.navbar-nav {
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  align-content: center;
  gap: 20px;

  .nav-link {
    color: white;
    padding: 0 15px 0 15px;

    &:hover {
      color: $violet;
      padding: 0 15px 0 15px;
    }

    &.active {
      color: $bright_violet;

      &.active:hover {
        color: $violet;
      }
    }
  }
}

.links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  list-style: none;
  font-size: 20px;

  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
  }
}

/***  media queris ***/

/* medium */
@media (max-width: 1416px) {
  section {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .navbar-nav {
    font-size: 15px;
    grid-template-columns: 1fr;
    column-gap: 10px;
  }
}

/* small */
@media (max-width: 768px) {
  section {
    height: auto;
    padding: 30px 0;
    grid-template-columns: 1fr;
  }
  .navbar-nav {
    font-size: 15px;
    grid-template-columns: 1fr;
    padding: 17px 0 40px 0;
  }
}
</style>
