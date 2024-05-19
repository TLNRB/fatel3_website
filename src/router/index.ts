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
        description: "Manage your inventory easier with fatel3. Increase your productivity and efficiency to grow your business to the next level.",
      },
    },
    {
      path: "/features",
      name: "features",
      component: AllFeaturesView,
      meta: {
        title: "All Features",
        description: "Explore our features from filtering to reporting, our tools help your businesses to optimize its management.",
      },
    },
    {
      path: "/use-cases/:route",
      name: "usecase",
      component: UseCaseView,
      meta: {
        title: "Use Case",
        description: "Discover how our inventory management solution helps various industries and business needs.",
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
        description: "Learn more about our company story and values. Discover the way we rethink inventory management.",
      },
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingView,
      meta: {
        title: "Pricing",
        description: "Explore our plans and choose the one that best fits your business requirements.",
      },
    },
    {
      path: "/support",
      name: "support",
      component: SupportView,
      meta: {
        title: "Support",
        description: "Reserve a meeting with our team to get started or to solve any problems you may encounter. We are here to help you.",
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
        description: "Access your account and manage your inventory effortlessly with our secure login portal. Sign in to streamline your operations and stay organized.",
      },
    },
    {
      path: "/:catchall(.*)*",
      name: "notfound",
      component: NotFoundView,
      meta: {
        title: "Not Found",
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
