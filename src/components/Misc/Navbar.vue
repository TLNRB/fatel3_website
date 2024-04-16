<script setup lang="ts">
/*-- Import Data --*/
import featuresData from "@/data/featuresData.ts";

// Navbar items
const navItems = [
  { id: "home", title: "Home", route: "/", subItems: [], active: "true" },
  {
    id: "pricing",
    title: "Pricing",
    route: "/pricing",
    subItems: [],
    active: "false",
  },
  {
    id: "features",
    title: "Features",
    route: "/features",
    subItems: featuresData,
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
        <div v-for="subItem in item.subItems">
          {{ subItem.icon }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
