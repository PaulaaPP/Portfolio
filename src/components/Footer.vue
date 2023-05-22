<template>
  <div class="main-background-color row grid text-center">
    <div class="col">
      <a class="navbar-brand" href="#">
        <i class="fa-solid fa-code"></i>
        <span>Paula Piskorz</span>
        <p>fron-tend developerem</p>
      </a>
    </div>
    <div class="col">
      <div
        ref="navbar-collapse"
        class="collapse navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <div ref="nav-link" class="navbar-nav ms-auto">
          <a class="nav-link active" href="/">Home</a>
          <a class="nav-link" href="#about">O mnie </a>
          <a class="nav-link" href="#projects">Projekty</a>
          <a class="nav-link" href="#contact">Kontakt</a>
        </div>
      </div>
    </div>
    <div class="col">
      <p>Linki</p>
      <li><a href=""></a>github</li>
      <li><a href=""></a>linkedin</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";
.row {
  background-color: grey;
  height: 30vh;
  display: flex;
  align-items: center;
  color: white;
}
a.navbar-brand {
  font-size: 23px;

  i {
    color: $bright_violet;
    margin-right: 8px;
  }
  i:hover {
    color: $violet;
  }
  span {
    font-family: "Pacifico", cursive;
    color: $bright_green;
  }
  span:hover {
    color: $green;
  }
}
.navbar-nav {
  font-size: 27px;

  a.nav-link:hover {
    color: $violet;
    padding: 0 15px 0 15px;
  }
  a.nav-link.active {
    color: $bright_violet;
  }
  a.nav-link.active:hover {
    color: $violet;
  }
}
a.nav-link {
  color: white;

  padding: 0 15px 0 15px;
}
</style>
