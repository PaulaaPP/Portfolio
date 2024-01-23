<template>
  <section id="test" class="py-5 pb-5">
    <article class="container">
      <h1>Skills</h1>

      <div class="filter">
        <button
          class="filter-btn"
          :class="{ active: currentFilter === 'all' }"
          @click="filterConferences('all')"
        >
          All
        </button>
        <button
          class="filter-btn"
          :class="{ active: currentFilter === 'frontend' }"
          @click="filterConferences('frontend')"
        >
          Front-end
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
          :class="{ active: currentFilter === 'backend' }"
          @click="filterConferences('backend')"
        >
          backend
        </button>
        <button
          class="filter-btn"
          :class="{ active: currentFilter === 'interpersonal' }"
          @click="filterConferences('interpersonal')"
        >
          Interpersonal
        </button>
      </div>

      <ul class="conference-list">
        <li
          v-for="conference in filteredConferences"
          :key="conference.name"
          :data-category="conference.category"
        >
          <div class="conference-details">
            <div v-if="conference.category === 'frameworks'">
              <div class="bars">
                <h3>{{ conference.name }}</h3>
                <!-- Dodaj odpowiednie struktury HTML dla fullstack -->
                <div class="bar"><span class="css">50%</span></div>
              </div>
            </div>

            <div v-else-if="conference.category === 'backend'">
              <div class="bars">
                <h3>{{ conference.name }}</h3>
                <!-- Dodaj odpowiednie struktury HTML dla backend -->
                <div class="bar"><span class="js">48%</span></div>
              </div>
            </div>

            <div v-else-if="conference.category === 'frontend'">
              <div class="bars">
                <h3>{{ conference.name }}</h3>
                <div class="bar"><span class="css">20%</span></div>
              </div>
            </div>

            <div v-else="conference.category === 'interpersonal'">
              <h2 class="conference-name">
                {{ conference.name }}
              </h2>
              <div class="bar"><span class="css">30%</span></div>
            </div>
          </div>
        </li>
      </ul>
    </article>
    <!-- next component -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentFilter: "all",
      conferences: [
        { name: "HTML5", category: "frontend" },
        { name: "CSS", category: "frontend" },
        { name: "JavaScript", category: "backend" },
        { name: "Vue3", category: "frameworks" },
        { name: "Nuxt3", category: "frameworks" },
        { name: "TypeScript", category: "frontend" },
        { name: "Team work", category: "interpersonal" },
        { name: "problem-solving", category: "interpersonal" },
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

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";
section {
  background-color: rgba(89, 85, 92, 0.288);
  height: 80vh;
  overflow-y: auto;
  color: aliceblue;
}

.filter-btn {
  /* Dodaj ogólne style dla przycisków */
  padding: 10px;
  margin: 5px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  cursor: pointer;
}

.filter-btn.active {
  /* Styl dla aktywnego przycisku */
  background-color: #007bff;
  color: #ffffff;
  border-color: #007bff;
}

.skill {
  list-style: none;
  color: white;
  width: 500px;
  margin: 60px auto;
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
  .html {
    width: 78%;
  }
  .css {
    width: 70%;
  }
  .js {
    width: 48%;
  }
  .wp {
    width: 55%;
  }
  .vue {
    width: 40%;
  }
  .other {
    width: 30%;
  }
}
</style>
