<script setup lang="ts">
import { RouterView } from "vue-router";
/*-- Import Components --*/
import Navbar from "@/components/Nav/Navbar.vue";
import FooterSection from "@/components/Footer/FooterSection.vue";
/*-- Import Data --*/
import featuresData from "@/data/featuresData.ts";
import useCasesData from "@/data/useCasesData.ts";
import resourcesData from "@/data/resourcesData.ts";

/*-- Navbar --*/
// Navbar items
const navItems: any = [
  {
    id: "home",
    title: "Home",
    route: "/",
    subItems: null,
    activePage: true,
    subMenuOpen: false,
    subMenuHeight: 0,
  },
  {
    id: "features",
    title: "Features",
    route: "/features",
    subItems: featuresData,
    activePage: false,
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
    activePage: false,
    subMenuOpen: false,
    subMenuHeightXS: 206,
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
    activePage: false,
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
    activePage: false,
    subMenuOpen: false,
    subMenuHeight: 0,
  },
  {
    id: "showcase",
    title: "Showcase",
    route: "/showcase",
    subItems: null,
    activePage: false,
    subMenuOpen: false,
    subMenuHeight: 0,
  },
];
</script>

<template>
  <Navbar :navItems="navItems" />
  <RouterView class="mt-[66px] lg:mt-[72px]" />
  <FooterSection :navItems="navItems" />
</template>

<style scoped></style>
