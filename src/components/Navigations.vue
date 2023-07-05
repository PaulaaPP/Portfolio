<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Navigation",
  setup() {
    const isScrolled = ref(false);
    const navbarCollapseEl = ref(null);

    // add shadow for navigations on scroll
    onMounted(() => {
      window.addEventListener("scroll", () => {
        isScrolled.value = window.scrollY >= 300;
        if (isScrolled.value && navbarCollapseEl.value) {
          navbarCollapseEl.value.classList.add("shadow-bg");
        } else if (navbarCollapseEl.value) {
          navbarCollapseEl.value.classList.remove("shadow-bg");
        }
      });

      // for hide navbar on click
      const navLinks = document.querySelectorAll(".nav-link");
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navLinks && navbarCollapse) {
        navLinks.forEach(item =>
          item.addEventListener("click", () =>
            navbarCollapse.classList.remove("show")
          )
        );
      }
    });

    // add shadow for navigations on click
    const toogleButton = () => {
      if (!isScrolled.value) {
        navbarCollapseEl.value.classList.add("shadow-bg");
      }
      navbarCollapseEl.value.classList.remove("show");
    };

    return {
      isScrolled,
      navbarCollapseEl,
      toogleButton,
    };
  },
};
</script>

<template>
  <nav
    ref="navbarCollapseEl"
    :class="{ 'shadow-bg': isScrolled }"
    id="navbar"
    class="navbar navbar-expand-lg top-0 w-100 fixed-top py-3"
  >
    <div class="container">
      <a class="navbar-brand" href="#home">
        <i class="fa-solid fa-code"></i>
        <span>Paula Piskorz</span>
      </a>
      <button
        @click="toogleButton"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span><i class="fa-solid fa-bars-staggered"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <a class="nav-link active" href="#home">Home</a>
          <a class="nav-link" href="#about">O mnie </a>
          <a class="nav-link" href="#projects">Projekty</a>
          <a class="nav-link" href="#contact">Kontakt</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

// class for window scroll
.shadow-bg {
  background-color: rgba(0, 0, 0, 0.8);
}

nav {
  transition: background-color 0.6s;

  img {
    height: 56px;
    width: 75px;
  }

  button {
    font-size: 29px;
    color: $bright_green;
    span {
      color: $bright_green;
    }
  }
  span {
    color: $bright_green;
  }

  //logo
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

  //links menu
  .navbar-nav {
    font-size: 27px;
    &.ms-auto {
      a.nav-link {
        color: $light_violet;

        padding: 0 15px 0 15px;
      }

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
  }
}

// media queries
@media (min-width: 2400px) {
  nav {
    a.navbar-brand {
      font-size: 45px;
    }
    .navbar-nav {
      font-size: 42px;
    }
  }
}
</style>
