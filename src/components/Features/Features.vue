<script setup lang="ts">
import { RouterLink } from "vue-router";
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
import ButtonFilled from "@/components/Buttons/ButtonFilled.vue";
import ButtonOutlined from "@/components/Buttons/ButtonOutlined.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line-primary.svg";
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
    </div>
  </section>
</template>

<style scoped></style>
