<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
/*-- Import Assets --*/
import logoPrimary from "@/assets/images/logo_primary.svg";

// Prop handling
const { navItems } = defineProps(["navItems"]);

/*-- Navbar --*/
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

const getSubMenuHeight = (navItem: any) => {
  if (activeIndex.value === navItem.id) {
    if (screenWidth.value < 560) {
      return {
        height: `${navItem.subMenuHeightXS}px`,
      }; // For extra small screens
    } else if (screenWidth.value < 768) {
      return {
        height: `${navItem.subMenuHeightSM}px`,
      }; // For small screens
    } else if (screenWidth.value < 1060) {
      return {
        height: `${navItem.subMenuHeightMD}px`,
      }; // For medium screens
    } else if (screenWidth.value < 1200) {
      return {
        height: `${navItem.subMenuHeightLG}px`,
      }; // For large screens
    } else {
      return {
        height: `${navItem.subMenuHeightXL}px`,
      }; // For the larger screens
    }
  } else {
    return { height: 0 }; // Default height when conditions are not met
  }
};
</script>

<template>
  <header
    class="w-[100%] h-[66px] fixed top-0 left-0 right-0 bg-BGLight z-[10] lg:h-[72px]"
  >
    <hr
      class="w-[100%] absolute top-[66px] left-0 right-0 border-ltBorder z-[11] lg:top-[72px]"
    />
    <nav
      class="w-[100%] flex justify-between p-[1rem] bg-BGLight z-[10] lg:gap-[2rem] lg:px-[2rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0 xxxl:gap-[4rem]"
      :class="{ 'menu-active': isMenuOpen }"
    >
      <!-- Logo -->
      <RouterLink to="/"
        ><img
          :src="logoPrimary"
          alt="fatel3 logo"
          class="h-[34px] cursor-pointer lg:h-[40px]"
      /></RouterLink>

      <!-- Hamburger -->
      <div @click="toggleMenu" class="hamburger-icon">
        <span class="hamburger-icon-line hamburger-icon-line-top"></span>
        <span class="hamburger-icon-line hamburger-icon-line-middle"></span>
        <span class="hamburger-icon-line hamburger-icon-line-bottom"></span>
      </div>
      <div
        class="absolute py-[1rem] pl-[1rem] top-[66px] left-0 right-0 bottom-0 w-[100%] flex flex-col gap-[5rem] justify-between bg-BGLight duration-[1s] ease-in-out lg:top-[72px] xl:static xl:flex-row xl:items-center xl:gap-[2rem] xl:p-0"
        :class="
          isMenuOpen || screenWidth >= 1200
            ? 'menu-dropdown-open'
            : 'menu-dropdown-close'
        "
      >
        <!-- Navbar Items Conatainer -->
        <div class="flex flex-col gap-[1rem] xl:flex-row xl:gap-[.5rem]">
          <!-- Navbar Items -->
          <div v-for="(navItem, index) in navItems" :key="index">
            <div>
              <!-- Navbar Items without sub menus -->
              <RouterLink
                v-if="!navItem.subItems && navItem.id !== 'showcase'"
                :to="navItem.route"
                class="nav-item w-fit relative flex items-center gap-[3px] py-[.5rem] px-[.875rem] rounded-[11px] cursor-pointer duration-[.15s] ease-in-out xl:px-[.75rem] xl:rounded-[10px]"
                :class="[
                  {
                    'text-ltPrimary': navItem.activePage,
                  },
                ]"
                @click="setActiveIndex(navItem.id)"
              >
                <div
                  class="text-[1.25rem] leading-[1.3] xl:text-[1rem] xl:whitespace-nowrap xl:leading-[1.25]"
                >
                  {{ navItem.title }}
                </div>
              </RouterLink>
              <a
                v-else-if="!navItem.subItems && navItem.id === 'showcase'"
                :href="navItem.route"
                class="nav-item w-fit relative flex items-center gap-[3px] py-[.5rem] px-[.875rem] rounded-[11px] cursor-pointer duration-[.15s] ease-in-out xl:px-[.75rem] xl:rounded-[10px]"
                :class="[{ 'bg-BGSemiNormal': navItem.id === 'showcase' }]"
                @click="setActiveIndex(navItem.id)"
                ><div
                  class="text-[1.25rem] leading-[1.3] xl:text-[1rem] xl:whitespace-nowrap xl:leading-[1.25]"
                >
                  {{ navItem.title }}
                </div>
                <!-- New Badge for Showcase -->
                <span
                  class="absolute top-0 right-0 translate-y-[-3px] translate-x-[13px] py-[.125rem] px-[.25rem] text-[.75rem] leading-none bg-BGLight text-ltPrimary rounded-[5px] xl:text-[.625rem] xl:rounded-[4px] xl:translate-x-[12px]"
                  >New</span
                ></a
              >
              <!-- Navbar Items with sub menus -->
              <div
                v-else-if="navItem.subItems"
                class="nav-item w-fit relative flex items-center gap-[3px] py-[.5rem] pl-[.875rem] pr-[7px] rounded-[11px] cursor-pointer duration-[.15s] ease-in-out xl:pl-[.75rem] xl:pr-[5px] xl:rounded-[10px]"
                :class="{
                  'bg-ltHoverPrimary text-ltPrimary':
                    navItem.id === activeIndex,
                }"
                @click="setActiveIndex(navItem.id)"
              >
                <div
                  class="text-[1.25rem] leading-[1.3] xl:text-[1rem] xl:whitespace-nowrap xl:leading-[1.25]"
                >
                  {{ navItem.title }}
                </div>
                <i
                  class="ri-arrow-down-s-line text-[1.25rem] h-[20px] flex justify-center items-center xl:text-[1.125rem] xl:h-[18px]"
                  :class="
                    navItem.id === activeIndex
                      ? 'nav-item-arrow-open'
                      : 'nav-item-arrow-close'
                  "
                ></i>
              </div>
            </div>
            <!-- Navbar Item Sub Menu -->
            <div
              v-if="navItem.subItems"
              class="overflow-hidden duration-[.375s] ease-in-out xl:w-[100%] xl:absolute xl:top-[72px] xl:left-0 xl:bg-BGNavDropdown xl:border-b-[1px] xl:border-ltBorder"
              :style="getSubMenuHeight(navItem)"
            >
              <!-- Sub menu for features and use cases -->
              <div
                v-if="navItem.id === 'features'"
                class="flex flex-col gap-[.5rem] mt-[.75rem] mb-[1.25rem] sm:flex-row sm:flex-wrap sm:pr-[1rem] md:w-[750px] lg:w-[1025px] xl:my-[2rem] xl:pl-[170px] xl:pr-[150px] xxl:w-[1396px] xxl:mx-auto xxl:pl-[141px] xxl:pr-[550px] xxxl:pl-[171px] xxxl:pr-[525px]"
              >
                <RouterLink
                  :to="navItem.route"
                  v-for="(subItem, index) in navItem.subItems"
                  :key="index"
                  @click="setActiveIndex('none')"
                  class="sub-menu-item w-[248px] flex gap-[.625rem] py-[.75rem] px-[.875rem] rounded-[11px] cursor-pointer duration-[.15] ease-in-out xs:w-[250px] md:w-[325px]"
                >
                  <i
                    class="text-[1.125rem] text-ltPrimary translate-y-[-3px] flex items-start"
                    :class="subItem.icon"
                  ></i>
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
                </RouterLink>
              </div>
              <!-- Sub menu use cases -->
              <div
                v-else-if="navItem.id === 'useCases'"
                class="flex flex-col gap-[.5rem] mt-[.75rem] mb-[1.25rem] sm:flex-row sm:flex-wrap sm:pr-[1rem] md:w-[750px] lg:w-[1025px] xl:my-[2rem] xl:pl-[170px] xl:pr-[150px] xxl:w-[1396px] xxl:mx-auto xxl:pl-[141px] xxl:pr-[550px] xxxl:pl-[171px] xxxl:pr-[525px]"
              >
                <RouterLink
                  :to="!subItem.commingSoon ? subItem.route : ''"
                  v-for="(subItem, index) in navItem.subItems"
                  :key="index"
                  @click="setActiveIndex('none')"
                  class="w-[248px] flex gap-[.625rem] py-[.75rem] px-[.875rem] rounded-[11px] duration-[.15] ease-in-out xs:w-[250px] md:w-[325px]"
                  :class="
                    !subItem.commingSoon
                      ? 'sub-menu-item'
                      : ' cursor-not-allowed'
                  "
                >
                  <i
                    class="text-[1.125rem] text-ltPrimary translate-y-[-3px] flex items-start"
                    :class="subItem.icon"
                  ></i>
                  <div class="flex flex-col gap-[.25rem]">
                    <div class="flex items-center gap-[.625rem]">
                      <div class="leading-tight">
                        {{ subItem.title }}
                      </div>
                      <span
                        v-if="subItem.commingSoon"
                        class="py-[.125rem] px-[.25rem] text-[.625rem] bg-BGLight border-[1px] border-ltPrimary text-ltPrimary leading-tight rounded-[4px] duration-[.15] ease-in-out"
                        >Comming soon
                      </span>
                    </div>
                    <div
                      class="text-[.875rem] font-light text-TextNormal leading-tight"
                    >
                      {{ subItem.shortDesc }}
                    </div>
                  </div>
                </RouterLink>
              </div>
              <!-- Sub menu for resources -->
              <div
                v-else-if="navItem.id === 'resources'"
                class="flex flex-col gap-[.75rem] ml-[.875rem] mt-[1.5rem] sm:flex-row sm:flex-wrap sm:gap-[1rem] sm:pr-[1rem] md:w-[750px] lg:w-[1025px] xl:my-[2rem] xl:ml-0 xl:pl-[184px] xl:pr-[125px] xxl:w-[1396px] xxl:mx-auto xxl:pl-[153px] xxl:pr-[525px] xxxl:pl-[183px] xxxl:pr-[500px]"
              >
                <div v-for="(item, index) in navItem.subItems" :key="index">
                  <div class="mb-[.5rem] text-ltPrimary font-light">
                    {{ item.title }}
                  </div>
                  <!-- Company and connect -->
                  <div class="flex flex-col gap-[.5rem] mb-[1.25rem]">
                    <RouterLink
                      :to="!subItem.commingSoon ? subItem.route : ''"
                      v-for="(subItem, index) in item.subItems"
                      :key="index"
                      @click="setActiveIndex('none')"
                      class="w-[248px] flex gap-[.625rem] py-[.75rem] px-[.875rem] rounded-[11px] duration-[.15] ease-in-out xs:w-[250px] md:w-[325px]"
                      :class="
                        !subItem.commingSoon
                          ? 'sub-menu-item'
                          : ' cursor-not-allowed'
                      "
                    >
                      <i
                        class="text-[1.125rem] text-ltPrimary translate-y-[-3px] flex items-start"
                        :class="subItem.icon"
                      ></i>
                      <div class="flex flex-col gap-[.25rem]">
                        <div class="flex items-center gap-[.625rem]">
                          <div class="leading-tight">
                            {{ subItem.title }}
                          </div>
                          <span
                            v-if="subItem.commingSoon"
                            class="py-[.125rem] px-[.25rem] text-[.625rem] bg-BGLight border-[1px] border-ltPrimary text-ltPrimary leading-tight rounded-[4px] duration-[.15] ease-in-out"
                            >Comming soon
                          </span>
                        </div>
                        <div
                          class="text-[.875rem] font-light text-TextNormal leading-tight"
                        >
                          {{ subItem.shortDesc }}
                        </div>
                      </div>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Login & Get Started BTN-->
        <div
          class="flex justify-center items-center gap-[1rem] flex-wrap ml-[-1rem] px-[1rem] xl:ml-0 xl:px-0"
        >
          <RouterLink
            to="/login"
            class="nav-btn-outline w-[124px] flex justify-center items-center py-[.5rem] px-[1rem] bg-BGLight border-[1px] rounded-[10px] leading-tight xl:w-fit xl:whitespace-nowrap xl:text-[.875rem]"
          >
            Log in
          </RouterLink>
          <RouterLink
            to="/support"
            class="nav-btn-solid w-fit flex justify-center items-center py-[.5rem] px-[1rem] text-TextLight border-[1px] rounded-[10px] leading-tight xl:whitespace-nowrap xl:text-[.875rem]"
          >
            Get Started
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/*-- Menu --*/
.menu-dropdown-open {
  min-height: calc(100vh - 66px);
  opacity: 1;
  visibility: visible;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
}

.menu-dropdown-close {
  min-height: 0;
  opacity: 0;
  visibility: hidden;
  overflow-y: hidden;
  transition: all 0.3s ease-in-out;
}

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
  transform: translateY(0px) rotate(180deg);
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

  .sub-menu-item:hover {
    background-color: var(--ltHoverPrimary);
    transition: all 0.15s ease-in-out;
  }
}

/*-- Media Queries --*/
@media screen and (min-width: 1060px) {
  .menu-dropdown-open {
    min-height: calc(100vh - 72px);
  }
}

@media screen and (min-width: 1200px) {
  .menu-dropdown-open {
    min-height: auto;
  }

  .hamburger-icon {
    display: none;
  }
}
</style>
