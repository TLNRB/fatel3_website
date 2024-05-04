<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";
/*-- Import Components --*/
import Navbar from "@/components/Nav/Navbar.vue";
import FooterSection from "@/components/Footer/FooterSection.vue";
/*-- Import Data --*/

import featuresData from "@/data/featuresData";
import useCasesData from "@/data/useCasesData";
import resourcesData from "@/data/resourcesData";
/*-- Import Store --*/
import { useStoreAuth } from "@/stores/storeAuth";
import { useStoreFAQs } from "@/stores/storeFAQs";
import { useStoreReviews } from "@/stores/storeReviews";
import { useStoreDays } from "@/stores/storeDays";

// Store handling
const storeAuth = useStoreAuth();
const storeFAQs = useStoreFAQs();
const storeReviews = useStoreReviews();
const storeDays = useStoreDays();

// Router
const route = useRoute();

/*-- Navbar --*/
// Navbar items
const navItems: any = [
  {
    id: "home",
    title: "Home",
    route: "/",
    subItems: null,
    subMenuOpen: false,
    subMenuHeight: 0,
  },
  {
    id: "features",
    title: "Features",
    route: "/features",
    subItems: featuresData,
    subMenuOpen: false,
    subMenuHeightXS: 388,
    subMenuHeightSM: 206,
    subMenuHeightMD: 206,
    subMenuHeightLG: 206,
    subMenuHeightXL: 238,
  },
  {
    id: "useCases",
    title: "Use Cases",
    route: "/use-cases",
    subItems: useCasesData,
    subMenuOpen: false,
    subMenuHeightXS: 115,
    subMenuHeightSM: 115,
    subMenuHeightMD: 115,
    subMenuHeightLG: 115,
    subMenuHeightXL: 147,
  },
  {
    id: "resources",
    title: "Resources",
    route: "/resources",
    subItems: resourcesData,
    subMenuOpen: false,
    subMenuHeightXS: 579,
    subMenuHeightSM: 341,
    subMenuHeightMD: 324,
    subMenuHeightLG: 324,
    subMenuHeightXL: 364,
  },
  {
    id: "pricing",
    title: "Pricing",
    route: "/pricing",
    subItems: null,
    subMenuOpen: false,
    subMenuHeight: 0,
  },
  {
    id: "showcase",
    title: "Showcase",
    route: "/#showcase",
    subItems: null,
    subMenuOpen: false,
    subMenuHeight: 0,
  },
];

onMounted(() => {
  storeAuth.init();
  storeFAQs.getFAQs("home");
  storeFAQs.getFAQs("pricing");
  storeReviews.getReviews();
  storeDays.getDays();
});
</script>

<template>
  <Navbar v-if="route.path !== '/login'" :navItems="navItems" />
  <RouterView
    :class="route.path !== '/login' ? 'mt-[66px] lg:mt-[72px]' : ''"
  />

  <FooterSection
    v-if="route.path !== '/login' && route.path !== '/admin'"
    :navItems="navItems"
  />
</template>

<style scoped></style>
