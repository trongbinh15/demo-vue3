import { createRouter, createWebHistory } from "vue-router";
import ListView from "../views/ListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ListView,
    },
    {
      path: "/detail",
      name: "detail",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DetailView.vue"),
    },
  ],
});

export default router;
