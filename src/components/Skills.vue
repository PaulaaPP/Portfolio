<script>
export default {
  name: "Skills",

  data() {
    return {
      currentFilter: "programming",
      conferences: [
        { name: "HTML5", category: "programming", percent: 95, class: "html" },
        { name: "CSS", category: "programming", percent: 80, class: "css" },
        {
          name: "Java Script",
          category: "programming",
          percent: 60,
          class: "js",
        },
        {
          name: "TypeScript",
          category: "programming",
          percent: 50,
          class: "ts",
        },
        { name: "Vue3", category: "frameworks", percent: 72, class: "nuxt" },
        { name: "Nuxt3", category: "frameworks", percent: 70, class: "vue" },
        {
          name: "Tailwind",
          category: "frameworks",
          percent: 75,
          class: "tailwind",
        },
        {
          name: "BootsTrap",
          category: "frameworks",
          percent: 75,
          class: "tailwind",
        },
        {
          name: "Sass",
          category: "frameworks",
          percent: 75,
          class: "tailwind",
        },
        { name: "Node.js", category: "frameworks", percent: 60, class: "node" },

        {
          name: "MongoDB",
          category: "data-base",
          percent: 40,
          class: "db",
        },
        {
          name: "Firebase",
          category: "data-base",
          percent: 52,
          class: "db2",
        },
        {
          name: "WordPress",
          category: "CMS",
          percent: 75,
          class: "wp",
        },
        {
          name: "Problem-solving",
          category: "interpersonal",
          percent: 90,
          class: "softOne",
        },
        {
          name: "Team work",
          category: "interpersonal",
          percent: 95,
          class: "softTwo",
        },
        {
          name: "Creativity",
          category: "interpersonal",
          percent: 98,
          class: "softThree",
        },
        {
          name: "Communication",
          category: "interpersonal",
          percent: 98,
          class: "softThree",
        },
      ],
    };
  },
  computed: {
    filteredConferences() {
      if (this.currentFilter === "all") {
        return this.conferences;
      } else {
        return this.conferences.filter(
          conference => conference.category === this.currentFilter
        );
      }
    },
  },

  methods: {
    filterConferences(category) {
      this.currentFilter = category;
    },
  },
};
</script>

<template>
  <section id="skills" class="pt-5">
    <article class="container">
      <div class="heading-skilss animation text-center py-5">
        <h2>Skills</h2>
        <div class="underline"></div>
      </div>

      <div class="row animation">
        <!-- skills -->

        <div class="skill animation">
          <!-- buttons for all categories -->
          <div class="btn-filter-group">
            <button
              class="filter-btn"
              :class="{ active: currentFilter === 'programming' }"
              @click="filterConferences('programming')"
            >
              Programming
            </button>
            <button
              class="filter-btn"
              :class="{ active: currentFilter === 'frameworks' }"
              @click="filterConferences('frameworks')"
            >
              Frameworks
            </button>
            <button
              class="filter-btn"
              :class="{ active: currentFilter === 'data-base' }"
              @click="filterConferences('data-base')"
            >
              Data-base
            </button>
            <button
              class="filter-btn"
              :class="{ active: currentFilter === 'CMS' }"
              @click="filterConferences('CMS')"
            >
              CMS
            </button>
            <button
              class="filter-btn"
              :class="{ active: currentFilter === 'interpersonal' }"
              @click="filterConferences('interpersonal')"
            >
              Interpersonal
            </button>
          </div>

          <!-- all categories I have -->

          <div class="list-group text-start">
            <TransitionGroup tag="ul" name="todo" class="conference-list">
              <li
                v-for="conference in filteredConferences"
                :key="conference.name"
                :data-category="conference.category"
              >
                <div class="conference-details">
                  <div v-if="conference.category === 'frameworks'">
                    <div class="bars">
                      <h3>{{ conference.name }}</h3>
                      <!-- Procent dla 'frameworks' -->
                      <div class="bar">
                        <span :class="conference.class"
                          >{{ conference.percent }}%</span
                        >
                      </div>
                    </div>
                  </div>

                  <div v-else-if="conference.category === 'data-base'">
                    <div class="bars">
                      <h3>{{ conference.name }}</h3>
                      <!-- Procent dla 'frameworks' -->
                      <div class="bar">
                        <span :class="conference.class"
                          >{{ conference.percent }}%</span
                        >
                      </div>
                    </div>
                  </div>

                  <div v-else-if="conference.category === 'CMS'">
                    <div class="bars">
                      <h3>{{ conference.name }}</h3>
                      <!-- Procent dla 'frameworks' -->
                      <div class="bar">
                        <span :class="conference.class"
                          >{{ conference.percent }}%</span
                        >
                      </div>
                    </div>
                  </div>

                  <div v-else-if="conference.category === 'programming'">
                    <div class="bars">
                      <h3>{{ conference.name }}</h3>
                      <!-- Procent dla 'frameworks' -->
                      <div class="bar">
                        <span :class="conference.class"
                          >{{ conference.percent }}%</span
                        >
                      </div>
                    </div>
                  </div>

                  <div v-else-if="conference.category === 'interpersonal'">
                    <div class="bars">
                      <h3>{{ conference.name }}</h3>
                      <!-- Procent dla 'frameworks' -->
                      <div class="bar">
                        <span :class="conference.class"
                          >{{ conference.percent }}%</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </TransitionGroup>
          </div>

          <!--  -->
        </div>

        <!--  -->
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

/* heading*/
.heading-skilss {
  h2 {
    color: $green;
    font-size: 40px;
  }
  // class for underlie in app.vue
}

/* progres bar-linear */
.skill {
  list-style: none;
  color: white;
  width: 500px;
  height: 75vh;
  margin: 20px auto;
  padding: 20px;

  h2 {
    font-size: 20px;
    margin-bottom: 42px;
    text-transform: uppercase;
    text-align: center;
  }

  h3 {
    margin: 5px;
    padding: 5px;
    font-size: 15px;
    color: $light_green;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
  }

  // style for acive filter-button
  .filter-btn {
    font-size: 19px;
    color: white;
    border-color: $green;
    background-color: transparent;
    padding: 10px 23px;
    border-radius: 5px;
    border: 2px solid #068a89;
    box-shadow: none;
    transition: all 0.3s ease-in-out;
    margin: 9px;

    &:hover,
    &.active {
      color: $bright_green;
      box-shadow: $bright_green;
      animation: glow 1s ease-in-out infinite alternate;
      transform: scale(1.1);
    }
  }

  .btn-filter-group {
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  // styles for skills
  .bars {
    padding: 10px;
  }
}
.bar {
  background: $dark_green;
  display: block;
  height: 20px;
  width: 60%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -7px 5px 27px -1px rgba(9, 10, 10, 1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: -7px 5px 27px -1px rgba(39, 51, 51, 1);
    transform: scale(1.1);
  }
  span {
    height: 20px;
    float: left;
    background: linear-gradient(90deg, $green, $bright_green, $violet 100%);
    text-align: right;
  }
  // technikal skill
  .html {
    width: 95%;
  }
  .css {
    width: 80%;
  }
  .js {
    width: 65%;
  }
  .ts {
    width: 50%;
  }

  .wp {
    width: 75%;
  }
  .vue {
    width: 72%;
  }
  .nuxt {
    width: 70%;
  }

  .tailwind,
  .boots,
  .sass {
    width: 78%;
  }
  .node {
    width: 60%;
  }

  .db {
    width: 40%;
  }
  .db2 {
    width: 52%;
  }
  // interpersolan skills
  .softOne {
    width: 90%;
  }
  .softTwo {
    width: 95%;
  }
  .softThree {
    width: 98%;
  }
}

/*  media queries */

@media (max-width: 425px) {
  .skill {
    height: 75vh;

    .filter-btn {
      font-size: 15px;
      padding: 6px 22px;
      margin: 9px;
    }
  }
}

@media (max-width: 375px) {
  .skill {
    height: 100vh;
  }
}
@media (max-width: 320px) {
  .skill {
    height: 130vh;
  }
}
// animation for Filter Skills
// mixins for reusability
@mixin fade-transition {
  transition: opacity 1s ease, transform 1s ease;
}

@mixin fade-enter-leave {
  opacity: 0;
  transform: scale(0.6);
}

.todo-enter-active,
// todo-move is for items wich is new or stay in some list!!
// if i dont give them any transition, they will be just static
.todo-move {
  @include fade-transition;
}

.todo-enter-from,
.todo-leave-to {
  @include fade-enter-leave;
}

.todo-leave-active {
  @include fade-transition;
  position: absolute;
}

.todo-list-enter-active,
.todo-list-leave-active {
  @include fade-transition;
}

.todo-list-enter-from,
.todo-list-leave-to {
  transform: translateY(10px);
  opacity: 0;
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
