import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/home", component: Home }, // Twoja komponenta strony głównej
    { path: "/about", component: About }, // Twoja komponenta "O mnie"
    { path: "/projects", component: Projects }, // Twoja komponenta "Projekty"
    { path: "/contact", component: Contact }, // Twoja komponenta "Kontakt"

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
