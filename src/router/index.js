import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import gitError from "../views/GitError.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // error 404
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: gitError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
