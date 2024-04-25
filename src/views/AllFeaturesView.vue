<script setup lang="ts">
import { ref, computed } from "vue";
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
import ButtonFilled from "@/components/Misc/ButtonFilled.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line.svg";
/*-- Import data --*/
import featuresData from "@/data/featuresData";

// Feature
const activeFeature = ref<string>("Inventory Management");

// Function to set active feature
const setActiveFeature = (feature: string) => {
  activeFeature.value = feature;
};

// Get active feature submenus
const activeFeatureSubMenus = computed(() => {
  return featuresData.find((feature) => feature.title === activeFeature.value);
});
</script>

<template>
  <main
    class="py-[4rem] px-[1rem] flex flex-col items-center lg:py-[5rem] lg:px-[2rem] xl:py-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
  >
    <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
      <SectionType
        text="use cases"
        bgColor="bg-ltPrimary"
        textColor="text-TextLight"
      />
      <h2
        class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[300px] sm:w-[350px] lg:w-[550px] lg:text-[3rem] xxl:w-[700px] xxl:text-[4rem]"
      >
        All the Tools <span class="font-[500] text-ltPrimary">You</span> Need
        for Inventorying
      </h2>
    </div>
    <div
      class="w-[100%] mt-[1.5rem] text-center text-TextNormal font-light leading-snug xs:w-[325px] sm:w-[400px] lg:w-[550px] lg:text-[1.125rem] xl:mt-[2rem] xxl:w-[600px] xxl:text-[1.25rem]"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <ButtonFilled
      text="Get Started"
      :icon="arrowIcon"
      altText="arrow icon"
      route="/support"
      class="mt-[2.5rem] my-[3rem] xl:my-[4rem]"
    />
    <div
      class="flex flex-col justify-center items-center gap-[3rem] xl:gap-[4rem]"
    >
      <div
        class="flex justify-center items-center gap-[1rem] flex-wrap sm:gap-[1.25rem]"
      >
        <RouterLink
          v-for="(feature, index) in featuresData"
          :key="index"
          to="/features"
          @click="setActiveFeature(feature.title)"
          class="feature w-[115px] p-[.75rem] flex flex-col items-center gap-[.75rem] border-[1px] border-ltBorder rounded-[14px] cursor-pointer duration-[.3s] ease-in-out"
          :class="
            activeFeature === feature.title
              ? 'border-ltPrimary'
              : 'border-ltBorder'
          "
        >
          <i
            class="text-[2rem] h-[32px] flex justify-center items-center text-ltPrimary translate-y-[.5px]"
            :class="feature.icon"
          ></i>

          <div
            class="text-center text-[.875rem] font-light text-TextNormal leading-tight"
          >
            {{ feature.title }}
          </div>
        </RouterLink>
      </div>
      <div class="flex justify-center gap-[1rem] flex-wrap xxl:gap-[1.5rem]">
        <div
          v-for="(subItem, index) in activeFeatureSubMenus?.subItems"
          :key="index"
          class="min-h-[100%] w-[100%] flex flex-col gap-[1rem] p-[1.25rem] bg-BGSemiLight rounded-[14px] xs:w-[300px] xxl:gap-[1.25rem] xxl:p-[1.5rem]"
        >
          <div class="flex justify-between items-center">
            <div
              class="text-[1rem] font-[500] leading-tight translate-y-[1px] xxl:text-[1.125rem]"
            >
              {{ subItem.title }}
            </div>
            <div
              class="min-w-[44px] min-h-[44px] w-[44px] h-[44px] flex justify-center items-center bg-BGLight rounded-[14px]"
            >
              <i
                class="ri-stack-line text-[25px] h-[25px] flex justify-center items-center text-ltPrimary translate-y-[.5px]"
              ></i>
            </div>
          </div>
          <div class="text-[.875rem] font-light leading-snug xxl:text-[15px]">
            {{ subItem.longDesc }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media (hover: hover) {
  .feature:hover {
    border-color: var(--ltPrimary);
  }
}
</style>
