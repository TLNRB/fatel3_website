import { createRouter, createWebHistory } from "vue-router";
/*-- Import Views --*/
import HomeView from "@/views/HomeView.vue";
import AllFeaturesView from "@/views/AllFeaturesView.vue";
import UseCaseView from "@/views/UseCaseView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import PricingView from "@/views/PricingView.vue";
import SupportView from "@/views/SupportView.vue";
import AdminView from "@/views/AdminView.vue";
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
/*-- Import data --*/
import useCasesData from "@/data/useCasesData";
/*-- Import store --*/
import { useStoreAuth } from "@/stores/storeAuth";
import { doc } from "firebase/firestore";

// Utility function to update meta tags
const updateMetaTags = (meta: any) => {
  if (meta.title) {
    document.title = meta.title;
  }
  if (meta.description) {
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", meta.description);
    } else {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute("name", "description");
      descriptionTag.setAttribute("content", meta.description);
      document.head.appendChild(descriptionTag);
    }
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "fatel3 - Manage Your Inventory Easier",
        description: "Manage your inventory easier with fatel3",
      },
    },
    {
      path: "/features",
      name: "features",
      component: AllFeaturesView,
      meta: {
        title: "All Features",
        description: "All features of fatel3",
      },
    },
    {
      path: "/use-cases/:route",
      name: "usecase",
      component: UseCaseView,
      meta: {
        title: "Use Case",
        description: "Use case of fatel3",
      },
      beforeEnter(to) {
        const useCases = useCasesData;
        const route = to.params.route;
        const exists = useCases.some(
          (useCase: any) => useCase.route === route && !useCase.commingSoon
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
      meta: {
        title: "About Us",
        description: "About fatel3",
      },
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingView,
      meta: {
        title: "Pricing",
        description: "Pricing of fatel3",
      },
    },
    {
      path: "/support",
      name: "support",
      component: SupportView,
      meta: {
        title: "Support",
        description: "Support of fatel3",
      },
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
      meta: {
        title: "Admin",
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        title: "Login",
        description: "Login to fatel3",
      },
    },
    {
      path: "/:catchall(.*)*",
      name: "notfound",
      component: NotFoundView,
      meta: {
        title: "Not Found",
        description: "Page not found",
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach(async (to, from) => {
  const defaultTitle = "fatel3 - Manage Your Inventory Easier";
  const defaultDescription = "fatel3 is an inventory management system";

  updateMetaTags({
    title: to.name != 'home' ? `${to.meta.title} | fatel3` : defaultTitle,
    description: to.meta.description || defaultDescription,
  });

  const storeAuth = useStoreAuth();
  if (!storeAuth.user.id && to.name === "admin") {
    return { name: "home" };
  }
  if (storeAuth.user.id && to.name === "login") {
    return false;
  }
  if (
    storeAuth.user.id &&
    to.name === "admin" &&
    storeAuth.user.email !== "admin@admin.com"
  ) {
    return false;
  }
});

export default router;
