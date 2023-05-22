<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Navigation",

  setup() {
    const headRef = ref();

    onMounted(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 300) {
          headRef.value.classList.add("shadow-bg");
        } else {
          headRef.value.classList.remove("shadow-bg");
        }
      });

      //for hide navbar on click
      const navLinkEl = document.querySelectorAll(".nav-link");
      const navbarCollapseEl = document.querySelector(".navbar-collapse");
      navLinkEl.forEach(item =>
        item.addEventListener("click", () =>
          navbarCollapseEl.classList.remove("show")
        )
      );
    });
    return { headRef };
  },
};
</script>

<template>
  <nav
    ref="headRef"
    id="navbar"
    class="navbar navbar-expand-lg top-0 w-100 fixed-top py-3"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <i class="fa-solid fa-code"></i>
        <span>Paula Piskorz</span>
      </a>
      <button
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
