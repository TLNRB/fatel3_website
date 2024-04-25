import { createRouter, createWebHistory } from "vue-router";
/*-- Import Views --*/
import HomeView from "@/views/HomeView.vue";
import AllFeaturesView from "@/views/AllFeaturesView.vue";
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/features",
      name: "features",
      component: AllFeaturesView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/:catchall(.*)*",
      name: "notfound",
      component: NotFoundView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
