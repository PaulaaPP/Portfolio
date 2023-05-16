<template>
  <section id="skills" class="skills py-45">
    <article class="container">
      <div class="heading-skilss text-center py-5">
        <h2>Umiejętności</h2>
        <div class="underline"></div>
      </div>

      <div ref="headdRef" class="row">
        <div class="skill-level col-sm-5 col-md-6 text-start">
          <h2>Techniczne</h2>

          <li>
            <h3>html</h3>
            <span class="bar"><span class="html"></span></span>
          </li>
          <li>
            <h3>css</h3>
            <span class="bar"><span class="css"></span></span>
          </li>
          <li>
            <h3>js</h3>
            <span class="bar"><span class="js"> </span></span>
          </li>
          <li>
            <h3>html</h3>
            <span class="bar"><span class="html"> </span></span>
          </li>
        </div>

        <div class="skill-level col-sm-5 col-md-6 text-start">
          <h2>Interpersonalne</h2>

          <li>
            <h3>html</h3>
            <span class="bar"><span class="html"></span></span>
          </li>
          <li>
            <h3>css</h3>
            <span class="bar"><span class="css"></span></span>
          </li>
          <li>
            <h3>js</h3>
            <span class="bar"><span class="js"> </span></span>
          </li>
          <li>
            <h3>wp</h3>
            <span class="bar"><span class="wp"> </span></span>
          </li>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Skills",

  setup() {
    const headdRef = ref();

    onMounted(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 300) {
          headdRef.value.classList.add("animated-bg");
        } else {
          headdRef.value.classList.remove("animated-bg");
        }
      });
    });
  },
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
    .animated-bg {
      // animation: slideIn 0.5s forwards;
      background-color: red;
    }
    /* heading*/
    .heading-skilss {
      h2 {
        color: $green;
        font-size: 40px;
        margin-top: 30px;
      }
    }
    .skill-title {
      font-size: 10px;
      margin: 10px;
      color: white;
    }

    /* progres bar */
    .row {
      .skill-level {
        list-style: none;
        color: white;
        width: 500px;
        margin: 60px auto;
        padding: 20px;

        h2 {
          font-size: 20px;
        }

        h1 {
          text-align: center;
        }

        h3 {
          margin: 5px;
        }
        li {
          font-size: 20px;
          margin: 20px 0;
          padding: 5px;
        }
      }

      .bar {
        background: #637c54;
        display: block;
        height: 20px;
        width: 60%;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: -7px 5px 27px -1px rgba(9, 10, 10, 1);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

        span {
          height: 20px;
          float: left;
          background: linear-gradient(
            90deg,
            rgba(129, 252, 89, 1) 0%,
            rgba(41, 53, 86, 1) 100%
          );
        }

        &:hover {
          box-shadow: -7px 5px 27px -1px rgba(39, 51, 51, 1);
          transform: scale(1.1);
        }
      }

      .html {
        width: 90%;
        animation: html 3s;
      }
      .css {
        width: 70%;
        animation: css 3s;
      }
      .js {
        width: 45%;
        animation: js 3s;
      }
      .wp {
        width: 80%;
        animation: wp 3s;
      }
    }
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
/* animations prgres bar */
@keyframes html {
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
}

@keyframes css {
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
}

@keyframes js {
  0% {
    width: 0%;
  }
  100% {
    width: 45%;
  }
}

@keyframes wp {
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}
/* animations underline */
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
