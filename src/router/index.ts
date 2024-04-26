import { createRouter, createWebHistory } from "vue-router";
/*-- Import Views --*/
import HomeView from "@/views/HomeView.vue";
import AllFeaturesView from "@/views/AllFeaturesView.vue";
import UseCaseView from "@/views/UseCaseView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
/*-- Import data --*/
import useCasesData from "@/data/useCasesData";

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
      path: "/use-cases/:route",
      name: "usecase",
      component: UseCaseView,
      beforeEnter(to) {
        const useCases = useCasesData;
        const route = to.params.route;
        const exists = useCases.some(
          (useCase) => useCase.route === route && !useCase.commingSoon
        );

        if (!exists) {
          return {
            name: "notfound",
            params: { pathMatch: to.path.substring(1).split("/") },
            query: to.query,
            hash: to.hash,
          };
        }
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutUsView,
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
