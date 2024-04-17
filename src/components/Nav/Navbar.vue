<script setup lang="ts">
import { ref } from "vue";
/*-- Import Data --*/
import featuresData from "@/data/featuresData.ts";
import useCasesData from "@/data/useCasesData.ts";
import resourcesData from "@/data/resourcesData.ts";
/*-- Import Assets --*/
import { RiArrowDownSLine } from "@remixicon/vue";
import logoPrimary from "@/assets/images/logo_primary.svg";

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

//Nav and dropdown click event
const isMenuOpen = ref(false);

//Toggle menu dropdown
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header>
    <nav
      class="fixed top-0 left-0 right-0 flex justify-between p-[1rem] border-b-[1px] border-ltBorder"
      :class="{ 'menu-active': isMenuOpen }"
    >
      <!-- Logo -->
      <img :src="logoPrimary" alt="fatel3 logo" class="h-[34px] lg:h-[40px]" />
      <!-- Hamburger -->
      <div @click="toggleMenu" class="hamburger-icon lg:hidden">
        <span class="hamburger-icon-line hamburger-icon-line-top"></span>
        <span class="hamburger-icon-line hamburger-icon-line-middle"></span>
        <span class="hamburger-icon-line hamburger-icon-line-bottom"></span>
      </div>
      <div class="absolute top-0">
        <!-- Navbar Items -->
        <div class="flex flex-col gap-[.5rem]">
          <div
            v-for="navItem in navItems"
            :key="navItem.id"
            class="w-fit flex items-center gap-[3px] py-[.5rem] rounded-[11px] cursor-pointer bg-ltPrimary"
            :class="navItem.subItems ? 'pl-[.875rem] pr-[7px]' : 'px-[.875rem]'"
          >
            <div class="text-[1.25rem] leading-[1.3]">
              {{ navItem.title }}
            </div>
            <RiArrowDownSLine
              v-if="navItem.subItems"
              size="22px"
              class="text-TextSemiDark translate-y-[1px]"
            />
          </div>
        </div>
        <div>
          <!-- Login BTN -->
          <!-- <button>Login</button> -->
          <!-- Get Started BTN -->
          <!-- <button>Get Started</button> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/*-- Menu --*/
/* Menu Icon */
.hamburger-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 25px;
  position: relative;
  z-index: 2;
  cursor: pointer;
}
.hamburger-icon-line {
  height: 2px;
  width: 25px;
  border-radius: 60em;
  display: block;
  background-color: var(--TextSemiDark);
  cursor: pointer;
  -webkit-transition: background-color 0.5s ease-in-out,
    -webkit-transform 0.2s ease-in-out;
  transition: background-color 0.5s ease-in-out,
    -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, background-color 0.5s ease-in-out;
  transition: transform 0.2s ease-in-out, background-color 0.5s ease-in-out,
    -webkit-transform 0.2s ease-in-out;
}
.hamburger-icon-line-top,
.hamburger-icon-line-bottom {
  -webkit-transition: all 0.15s ease-in-out;
  -moz-transition: all 0.15s ease-in-out;
  -o-transition: all 0.15s ease-in-out;
  -ms-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
}

/* Menu drowdown onclick */
.menu-active .hamburger-icon-line {
  -webkit-transform: translate(0px, 0px) rotate(-45deg);
  transform: translate(0px, 0px) rotate(-45deg);
}
.menu-active .hamburger-icon-line-top {
  width: 12.5px;
  -webkit-transform: translate(-4.5px, 1.5px) rotate(45deg);
  transform: translate(-4.5px, 1.5px) rotate(45deg);
}
.menu-active .hamburger-icon-line-bottom {
  width: 12.5px;
  -webkit-transform: translate(4.5px, -1.5px) rotate(45deg);
  transform: translate(4.5px, -1.5px) rotate(45deg);
}

/* Hover isn't visible on touchscreen devices */
@media (hover: hover) {
  .hamburger-icon:hover .hamburger-icon-line-top {
    transform: translateY(-2px);
  }
  .hamburger-icon:hover .hamburger-icon-line-bottom {
    transform: translateY(2px);
  }

  .menu-active .hamburger-icon:hover .hamburger-icon-line-top {
    transform: translateY(0);
    -webkit-transform: translate(-4.5px, 1.5px) rotate(45deg);
    transform: translate(-4.5px, 1.5px) rotate(45deg);
  }

  .menu-active .hamburger-icon:hover .hamburger-icon-line-bottom {
    transform: translateY(0);
    -webkit-transform: translate(4.5px, -1.5px) rotate(45deg);
    transform: translate(4.5px, -1.5px) rotate(45deg);
  }
}
</style>
