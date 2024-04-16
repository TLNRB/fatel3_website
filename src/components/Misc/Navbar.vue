<script setup lang="ts">
/*-- Import Data --*/
import featuresData from "@/data/featuresData.ts";
import useCasesData from "@/data/useCasesData.ts";

// Navbar items
const navItems = [
  { id: "home", title: "Home", route: "/", subItems: null, active: "true" },
  {
    id: "pricing",
    title: "Pricing",
    route: "/pricing",
    subItems: null,
    active: "false",
  },
  {
    id: "features",
    title: "Features",
    route: "/features",
    subItems: featuresData,
    active: "false",
  },
  {
    id: "useCases",
    title: "Use Cases",
    route: "/use-cases",
    subItems: useCasesData,
    active: "false",
  },
  {
    id: "resources",
    title: "Resources",
    route: "/resources",
    subItems: resourcesData,
    active: "false",
  },
  {
    id: "showcase",
    title: "Showcase",
    route: "/showcase",
    subItems: null,
    active: "false",
  },
];
</script>

<template>
  <div>
    <div v-for="navItem in navItems">
      <div v-for="item in navItem.subItems">
        {{ item.title }}
        <i :class="item.icon"></i>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
