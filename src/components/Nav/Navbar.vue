<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, render } from "vue";
/*-- Import Data --*/
import featuresData from "@/data/featuresData.ts";
import useCasesData from "@/data/useCasesData.ts";
import resourcesData from "@/data/resourcesData.ts";
/*-- Import Assets --*/
import logoPrimary from "@/assets/images/logo_primary.svg";

/*-- Navbar --*/
// Navbar items
const navItems = [
  {
    id: "home",
    title: "Home",
    route: "/",
    subItems: null,
    activePage: true,
    subMenuOpen: false,
  },
  {
    id: "pricing",
    title: "Pricing",
    route: "/pricing",
    subItems: null,
    activePage: false,
    subMenuOpen: false,
  },
  {
    id: "features",
    title: "Features",
    route: "/features",
    subItems: featuresData,
    activePage: false,
    subMenuOpen: false,
  },
  {
    id: "useCases",
    title: "Use Cases",
    route: "/use-cases",
    subItems: useCasesData,
    activePage: false,
    subMenuOpen: false,
  },
  {
    id: "resources",
    title: "Resources",
    route: "/resources",
    subItems: resourcesData,
    activePage: false,
    subMenuOpen: false,
  },
  {
    id: "showcase",
    title: "Showcase",
    route: "/showcase",
    subItems: null,
    activePage: false,
    subMenuOpen: false,
  },
];

// Menu dropdown click event
const isMenuOpen = ref<boolean>(false);

// Toggle menu dropdown
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Navbar Open&Collapse
const screenWidth = ref<number>(window.innerWidth); // Get initial screen width
const screenHeight = ref<number>(window.innerHeight); // Get initial screen height

function handleResize() {
  screenWidth.value = window.innerWidth; // Update screen width on resize
  screenHeight.value = window.innerHeight; // Update screen height on resize
}

const navbarWidthComputed = computed(() => {
  // Check if screen width is less than 1060 then return the screen height minus navbar height
  if (screenWidth.value < 1060) {
    return {
      minHeight: screenHeight.value - 66 + "px",
    };
  } else {
    return { height: "100%" }; // Return the full height when screen width is greater than 1060
  }
});

// Add resize event listener when component is mounted
onMounted(() => {
  window.addEventListener("resize", handleResize);
});
// Remove resize event listener when component is mounted
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const activeIndex = ref<string>("none"); // Track active index

// Method to set active index
const setActiveIndex = (index: string) => {
  if (activeIndex.value === index) {
    activeIndex.value = "none";
  } else {
    activeIndex.value = index;
  }
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
      <div
        class="absolute py-[1rem] pl-[1rem] top-[66px] left-0 right-0 bottom-0 w-[100%] overflow-y-auto flex flex-col gap-[5rem] justify-between"
        :style="navbarWidthComputed"
      >
        <!-- Navbar Items Conatainer -->
        <div class="flex flex-col gap-[1rem]">
          <!-- Navbar Items -->
          <div
            v-for="navItem in navItems"
            :key="navItem.id"
            class="duration-[1s] ease-in-out"
          >
            <!-- Navbar Item -->
            <div
              class="nav-item w-fit relative flex items-center gap-[3px] py-[.5rem] rounded-[11px] cursor-pointer duration-[.15s] ease-in-out"
              :class="[
                { 'pl-[.875rem] pr-[7px]': navItem.subItems },
                { 'px-[.875rem]': !navItem.subItems },
                { 'bg-BGSemiNormal': navItem.id === 'showcase' },
                { 'bg-transparent': navItem.id !== 'showcase' },
                {
                  'text-ltPrimary':
                    navItem.activePage &&
                    (navItem.id === 'home' || navItem.id === 'pricing'),
                },
                {
                  'bg-ltHoverPrimary text-ltPrimary':
                    navItem.id === activeIndex && navItem.subItems,
                },
              ]"
              @click="setActiveIndex(navItem.id)"
            >
              <div class="text-[1.25rem] leading-[1.3]">
                {{ navItem.title }}
              </div>
              <!-- New Badge for Showcase -->
              <span
                v-if="navItem.id === 'showcase'"
                class="absolute top-0 right-0 translate-y-[-4px] translate-x-[13px] py-[.125rem] px-[.25rem] text-[.75rem] leading-none bg-BGLight text-ltPrimary rounded-[5px]"
                >New</span
              >
              <i
                class="ri-arrow-down-s-line"
                :class="
                  navItem.id === activeIndex && navItem.subItems
                    ? 'nav-item-arrow-open'
                    : 'nav-item-arrow-close'
                "
              ></i>
              <RiArrowDownSLine
                v-if="navItem.subItems"
                size="22px"
                class=""
                :class="
                  navItem.id === activeIndex && navItem.subItems
                    ? 'nav-item-arrow-open'
                    : 'nav-item-arrow-close'
                "
              />
            </div>
            <!-- Navbar Item Sub Menu -->
            <div
              v-if="navItem.subItems"
              class="flex flex-col gap-[.5rem] overflow-hidden duration-[1s] ease-in-out"
              :class="
                activeIndex === navItem.id
                  ? 'h-[100%] overflow-auto'
                  : 'h-[0px]'
              "
            >
              <div
                v-if="navItem.id === 'features' || navItem.id === 'useCases'"
                v-for="(subItem, index) in navItem.subItems"
                :key="index"
                class="w-fit flex gap-[.625rem] first:mt-[.75rem] last:mb-[2.5rem] py-[.75rem] px-[.875rem] bg-ltHoverPrimary rounded-[11px]"
              >
                <i class="" :class="subItem.icon"></i>
                <div class="flex flex-col gap-[.25rem]">
                  <div class="leading-tight">
                    {{ subItem.title }}
                  </div>
                  <div
                    class="text-[.875rem] font-light text-TextNormal leading-tight"
                  >
                    {{ subItem.shortDesc }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Login & Get Started BTN-->
        <div class="flex justify-center items-center gap-[1rem] ml-[-1rem]">
          <button
            class="nav-btn-outline w-[124px] flex justify-center items-center py-[.5rem] px-[1rem] bg-BGLight border-[1px] rounded-[10px] leading-tight"
          >
            Login
          </button>
          <button
            class="nav-btn-solid w-fit flex justify-center items-center py-[.5rem] px-[1rem] text-TextLight border-[1px] rounded-[10px] leading-tight"
          >
            Get Started
          </button>
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

/*-- Nav Items --*/
/* Nav Item Arrow */
.nav-item-arrow-open {
  transform: translateY(1px) rotate(180deg);
  color: var(--ltPrimary);
  transition: color 0.15s ease-in-out;
  transition: transform 0.25s ease-in-out;
}

.nav-item-arrow-close {
  transform: translateY(1px) rotate(0deg);
  color: var(--TextSemiDark);
  transition: color 0.15s ease-in-out;
  transition: transform 0.25s ease-in-out;
}

/*-- Nav BTNs --*/
.nav-btn-outline {
  color: var(--TextSemiDark);
  border-color: var(--ltBorderNormal);
  transition: all 0.15s ease-in-out;
}

.nav-btn-solid {
  background-color: var(--ltPrimary);
  border-color: var(--ltPrimary);
  transition: all 0.15s ease-in-out;
}

/*-- Hover isn't visible on touchscreen devices --*/
@media (hover: hover) {
  .nav-item:hover {
    background-color: var(--ltHoverPrimary);
  }

  /* Hover haven't effected the arrow icon */
  .nav-item:hover * {
    color: var(--ltPrimary);
  }

  .nav-btn-outline:hover {
    border-color: var(--ltPrimary);
    color: var(--ltPrimary);
    transition: all 0.15s ease-in-out;
  }

  .nav-btn-solid:hover {
    background-color: var(--ltPrimaryDark);
    border-color: var(--ltPrimaryDark);
    transition: all 0.15s ease-in-out;
  }
}
</style>
