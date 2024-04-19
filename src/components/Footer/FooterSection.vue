<script setup lang="ts">
import { computed, onMounted } from "vue";
/*-- Import Assets --*/
import logoPrimary from "@/assets/images/logo_primary.svg";

// Prop handling
const { navItems } = defineProps(["navItems"]);

/*- Nav Items --*/
// Filter navItems to only include one without sub-items
const filteredNavItemsPages = computed(() =>
  navItems.filter((item: any) => !item.subItems)
);
// Filter navItems to features sub-items
const filteredNavItemsFeatures = computed(() =>
  navItems.find((item: any) => item.id === "features")
);
// Filter navItems to use cases sub-items and remove comming soon items
const filteredNavItemsUseCases = computed(() => {
  const useCases = navItems.find((item: any) => item.id === "useCases");
  const filteredSubItems = useCases.subItems.filter(
    (subItem: any) => !subItem.commingSoon
  );
  return filteredSubItems;
});

// Filter navItems to resources sub-items
const filteredNavItemsResources = computed(() =>
  navItems.find((item: any) => item.id === "resources")
);

onMounted(() => {
  console.log(filteredNavItemsResources.value);
});
</script>

<template>
  <footer class="border-t-[1px] border-ltBorder">
    <div
      class="pt-[3rem] pb-[2rem] px-[1rem] bg-BGLight lg:px-[2rem] xxl:w-[1412px] xxl:mx-auto xxl:px-[1rem]"
    >
      <div class="flex justify-between gap-[3rem] flex-wrap">
        <div class="flex flex-col items-start gap-[1rem]">
          <!-- Logo -->
          <img
            :src="logoPrimary"
            alt="fatel3 logo"
            class="h-[40px] cursor-pointer lg:h-[50px]"
          />
          <div class="mb-[1rem] text-TextNormal font-light">
            Manage your inventory easier
          </div>
          <!-- Email -->
          <a
            href="mailto:fatel3-info@gmail.com"
            class="text-TextNormal font-light"
            >fatel3-info@gmail.com</a
          >
          <!-- Login & Get Started BTN-->
          <div class="flex justify-center items-center gap-[1rem]">
            <button
              class="footer-btn-outline flex justify-center items-center py-[.5rem] px-[1rem] bg-BGLight border-[1px] rounded-[10px] leading-tight xl:whitespace-nowrap"
            >
              Login
            </button>
            <button
              class="footer-btn-solid w-fit flex justify-center items-center py-[.5rem] px-[1rem] text-TextLight border-[1px] rounded-[10px] leading-tight xl:whitespace-nowrap"
            >
              Get Started
            </button>
          </div>
        </div>
        <!-- Nav Items -->
        <div class="flex gap-[2rem] flex-wrap">
          <!-- Nav Items Individual Pages -->
          <div
            class="min-w-[125px] flex flex-col gap-[1.5rem] xs:min-w-[150px] xxl:min-w-[200px]"
          >
            <div class="font-[500] leading-tight">Pages</div>
            <div class="flex flex-col gap-[.875rem]">
              <div
                v-for="(navItem, index) in filteredNavItemsPages"
                :key="index"
                class="nav-item w-fit font-light text-[.875rem] text-TextNormal cursor-pointer duration-[.15s] ease-in-out"
              >
                {{ navItem.title }}
              </div>
            </div>
          </div>
          <!-- Nav Items Features -->
          <div
            class="min-w-[125px] flex flex-col gap-[1.5rem] xs:min-w-[150px] xxl:min-w-[200px]"
          >
            <div class="font-[500] leading-tight">Features</div>
            <div class="flex flex-col gap-[.875rem]">
              <div
                v-for="(subItem, index) in filteredNavItemsFeatures.subItems"
                :key="index"
                class="nav-item w-fit font-light text-[.875rem] text-TextNormal cursor-pointer duration-[.15s] ease-in-out"
              >
                {{ subItem.title }}
              </div>
            </div>
          </div>
          <!-- Nav Items Use cases -->
          <div
            class="min-w-[125px] flex flex-col gap-[1.5rem] xs:min-w-[150px] xxl:min-w-[200px]"
          >
            <div class="font-[500] leading-tight">Use Cases</div>
            <div class="flex flex-col gap-[.875rem]">
              <div
                v-for="(subItem, index) in filteredNavItemsUseCases"
                :key="index"
                class="nav-item w-fit font-light text-[.875rem] text-TextNormal cursor-pointer duration-[.15s] ease-in-out"
              >
                {{ subItem.title }}
              </div>
            </div>
          </div>
          <!-- Nav Items Resources -->
          <div
            class="min-w-[125px] flex flex-col gap-[1.5rem] xs:min-w-[150px] xxl:min-w-fit"
          >
            <div class="font-[500] leading-tight">Resources</div>
            <div class="flex flex-col gap-[.875rem]">
              <div
                v-for="(subItem, index) in filteredNavItemsResources.subItems"
                :key="index"
                class="flex flex-col gap-[.875rem]"
              >
                <div
                  v-for="(item, index) in subItem.subItems"
                  :key="index"
                  class="nav-item w-fit font-light text-[.875rem] text-TextNormal cursor-pointer duration-[.15s] ease-in-out"
                >
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </footer>
</template>

<style scoped>
/*-- Footer BTNs --*/
.footer-btn-outline {
  color: var(--TextSemiDark);
  border-color: var(--ltBorderNormal);
  transition: all 0.15s ease-in-out;
}

.footer-btn-solid {
  background-color: var(--ltPrimary);
  border-color: var(--ltPrimary);
  transition: all 0.15s ease-in-out;
}

/*-- Hover isn't visible on touchscreen devices --*/
@media (hover: hover) {
  .nav-item:hover {
    color: var(--ltPrimary);
  }

  .footer-btn-outline:hover {
    border-color: var(--ltPrimary);
    color: var(--ltPrimary);
    transition: all 0.15s ease-in-out;
  }

  .footer-btn-solid:hover {
    background-color: var(--ltPrimaryDark);
    border-color: var(--ltPrimaryDark);
    transition: all 0.15s ease-in-out;
  }
}
</style>
