<script setup lang="ts">
import { RouterLink } from "vue-router";
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
import ButtonFilled from "@/components/Misc/ButtonFilled.vue";
import ButtonOutline from "@/components/Misc/ButtonOutline.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line.svg";
/*-- Import data --*/
import featuresData from "@/data/featuresData";
</script>

<template>
  <section class="relative py-[4rem] bg-BGDark xl:py-[6rem] xxl:py-[7rem]">
    <div
      class="flex flex-col items-center gap-[3rem] px-[1rem] lg:px-[2rem] xl:gap-[4rem] xxl:w-[1396px] xxl:mx-auto"
    >
      <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
        <SectionType
          text="features"
          bgColor="bg-ltPrimary"
          textColor="text-TextLight"
        />
        <h2
          class="w-[100%] text-center text-[2rem] text-TextLight font-[500] leading-[1.15] xs:w-[300px] lg:w-[500px] lg:text-[3rem] xxl:w-[600px] xxl:text-[4rem]"
        >
          Powerful Tools for
          <span class="font-[500] text-ltPrimary">Your</span> Inventorying
        </h2>
      </div>
      <div
        class="flex justify-center items-center gap-[1rem] flex-wrap sm:gap-[2rem] xl:gap-[2.5rem]"
      >
        <RouterLink
          v-for="(feature, index) in featuresData"
          :key="index"
          :to="{ name: 'features', query: { feature: feature.title } }"
          class="feature w-[100px] flex flex-col items-center gap-[.75rem] cursor-pointer"
        >
          <div
            class="feature-icon-container min-w-[56px] min-h-[56px] w-[56px] h-[56px] flex justify-center items-center bg-transparent rounded-[18px] duration-[.3s] ease-in-out"
          >
            <i
              class="feature-icon text-[2rem] h-[32px] flex justify-center items-center text-TextNormal translate-y-[.5px] duration-[.3s] ease-in-out"
              :class="feature.icon"
            ></i>
          </div>
          <div
            class="feature-icon-text text-center text-[.875rem] font-light text-TextNormal leading-tight duration-[.3s] ease-in-out"
          >
            {{ feature.title }}
          </div>
        </RouterLink>
      </div>
      <div
        class="flex justify-center items-center gap-[.75rem] flex-wrap sm:gap-[1rem]"
      >
        <ButtonOutline text="See all features" theme="dark" route="/features" />
        <ButtonFilled
          text="Get Started"
          :icon="arrowIcon"
          altText="arrow icon"
          :route="{ name: 'support', query: { id: 'getStarted' } }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/*-- Hover isn't visible on touchscreen devices --*/
@media (hover: hover) {
  .feature:hover .feature-icon-container {
    background-color: var(--ltPrimary);
  }

  .feature:hover .feature-icon {
    color: var(--TextLight);
  }

  .feature:hover .feature-icon-text {
    color: var(--TextLight);
  }
}
</style>
